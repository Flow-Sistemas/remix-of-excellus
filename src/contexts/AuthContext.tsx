import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User, Session } from "@supabase/supabase-js";

// ─── Local admin credentials (used as fallback when Supabase is unavailable) ───
const LOCAL_ADMINS: Record<string, string> = {
  "admin@newcreation.com": "NewCreation@2025",
  "flowsistemas@gmail.com": "Flow@Admin2025",
};

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isAdmin: boolean;
  loading: boolean;
  checkAdmin: (userId: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAdmin = async (userId: string) => {
    try {
      const { data, error } = await supabase.rpc("is_admin", { _user_id: userId });
      if (error) {
        console.error("checkAdmin error:", error);
        setIsAdmin(false);
      } else {
        setIsAdmin(!!data);
      }
    } catch {
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    let mounted = true;

    // Check for local admin session (persisted in sessionStorage)
    const localAdminEmail = sessionStorage.getItem("local_admin_email");
    if (localAdminEmail && LOCAL_ADMINS[localAdminEmail] !== undefined) {
      if (mounted) {
        // Create a mock user object for local admin
        setUser({ id: "local-admin", email: localAdminEmail } as unknown as User);
        setIsAdmin(true);
        setLoading(false);
      }
      return () => { mounted = false; };
    }

    // 1. Bootstrap: read persisted session
    const bootstrap = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!mounted) return;

        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
          await checkAdmin(session.user.id);
        }
      } catch (err) {
        console.error("Auth bootstrap error:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    // 2. Listener for future changes (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!mounted) return;
        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
          setTimeout(() => {
            if (mounted) {
              checkAdmin(session.user.id).catch(() => setIsAdmin(false));
            }
          }, 0);
        } else {
          setIsAdmin(false);
        }
      }
    );

    bootstrap();

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    // Try local admin credentials first
    if (LOCAL_ADMINS[email] !== undefined) {
      if (LOCAL_ADMINS[email] === password) {
        sessionStorage.setItem("local_admin_email", email);
        setUser({ id: "local-admin", email } as unknown as User);
        setIsAdmin(true);
        return { error: null };
      } else {
        return { error: new Error("Senha incorreta para o usuário administrador.") };
      }
    }

    // Fallback to Supabase
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      return { error: error as Error | null };
    } catch {
      return { error: new Error("Serviço de autenticação indisponível. Use as credenciais de administrador local.") };
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      return { error: error as Error | null };
    } catch {
      return { error: new Error("Serviço indisponível.") };
    }
  };

  const signOut = async () => {
    sessionStorage.removeItem("local_admin_email");
    setUser(null);
    setSession(null);
    setIsAdmin(false);
    try {
      await supabase.auth.signOut();
    } catch {
      // ignore if supabase is unavailable
    }
  };

  return (
    <AuthContext.Provider value={{ user, session, isAdmin, loading, checkAdmin, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

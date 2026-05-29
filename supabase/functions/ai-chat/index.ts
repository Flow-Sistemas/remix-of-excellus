import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "messages array required" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // Fetch services from DB for context
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: services } = await supabase
      .from("services")
      .select("title, description, intro, duration, includes, extras, not_included")
      .order("sort_order");

    const servicesContext = (services || []).map((s: any) =>
      `**${s.title}**\nDescription: ${s.description}\nIntro: ${s.intro}\nDuration: ${s.duration}\nIncludes: ${(s.includes || []).join(", ")}\nExtras: ${(s.extras || []).join(", ")}\nNot Included: ${(s.not_included || []).join(", ")}`
    ).join("\n\n---\n\n");

    const systemPrompt = `You are the official virtual assistant for New Creation Home Solutions, a premium flooring installation and finishing company with 14 years of experience. You answer questions ONLY in English.

About the company:
- Name: New Creation Home Solutions
- Specialty: Installation and finishing of high-end flooring — hardwood, engineered, laminate, vinyl, ceramic, and carpet — for residential and commercial projects.
- Experience: 14 years delivering flawless installation and finishing.
- Service area: New Jersey, New York, and Pennsylvania.
- Phone: +1 (732) 320-6267
- Email: bean@newcreationhomesolutions.com
- Hours: Mon–Fri 8am–6pm, Sat 8am–12pm.
- Brand promise: "We turn spaces into unique experiences with high-end flooring installation and finishing."

Flooring lines we offer:
${servicesContext || "Hardwood, Engineered, Laminate, Vinyl, Ceramic, Carpet, and Sanding & Refinishing."}

Guidelines:
- Be warm, professional, and concise (2–4 sentences unless more detail is requested).
- Only answer questions related to New Creation Home Solutions, flooring, the services we provide, or the service areas above.
- For pricing, explain we provide custom quotes based on square footage, material choice, and finishing needs — then invite the user to request a free quote.
- ALWAYS guide users to request a free quote (suggest clicking "Get a Free Quote" or visiting /quote) or to contact us by phone/email when appropriate.
- If asked something unrelated to flooring or our company, politely redirect to how you can help with their flooring project.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages.slice(-10), // last 10 messages for context
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Too many requests. Please try again in a moment." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Instagram, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageShell, { PageHero } from "./site/PageShell";

const EASE = [0.22, 1, 0.36, 1] as const;

const SERVICE_OPTIONS = [
  "Hardwood",
  "Engineered Flooring",
  "Laminate",
  "Vinyl",
  "Ceramic Tile",
  "Carpet",
  "Sanding & refinishing",
  "Showers & backsplashes",
];

const CONTACT_IMG =
  "/images/contact-banner.png";

const HERO_IMG = "/images/contact-banner.png";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const d = new FormData(f);
    const body = encodeURIComponent(
      `Name: ${d.get("nome")}\nPhone: ${d.get("telefone")}\nEmail: ${d.get("email")}\nAddress: ${d.get(
        "endereco",
      )}\nCity/State: ${d.get("cidade")}\nService: ${d.get("servico")}\n\nMessage:\n${d.get("mensagem") || ""}`,
    );
    window.location.href = `mailto:bean@newcreationhomesolutions.com?subject=${encodeURIComponent(
      "Website contact — New Creation Home Solutions",
    )}&body=${body}`;
    setSent(true);
    f.reset();
  }

  return (
    <PageShell
      slug="/contact"
      title="Contact — New Creation Home Solutions"
      description="Talk to our team. Serving New Jersey, New York, and Pennsylvania."
    >
      {() => (
        <>
          <PageHero
            eyebrow="Contact"
            title="Tell us about your project. We'll handle the rest."
            lead="We serve homes and businesses across New Jersey, New York, and Pennsylvania. We reply within 24 hours."
            image={HERO_IMG}
          />

          {/* Form + side */}
          <section className="py-24 lg:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE }}
                className="lg:col-span-7"
              >
                {sent ? (
                  <div className="border border-[hsl(38_30%_82%)] p-12 text-center">
                    <h2
                      className="text-primary mb-4"
                      style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 500 }}
                    >
                      Thank you for reaching out!
                    </h2>
                    <p className="text-muted-foreground font-light">
                      We received your message. We'll be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    <div>
                      <p className="text-[10px] tracking-[0.42em] uppercase font-semibold mb-3" style={{ color: "hsl(45 85% 46%)" }}>
                        Form
                      </p>
                      <h2
                        className="text-primary"
                        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)", fontWeight: 400 }}
                      >
                        Request a personalized proposal.
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Field id="nome" label="Name">
                        <Input id="nome" name="nome" required className="form-field" />
                      </Field>
                      <Field id="telefone" label="Phone">
                        <Input id="telefone" name="telefone" required className="form-field" />
                      </Field>
                    </div>

                    <Field id="email" label="Email">
                      <Input id="email" name="email" type="email" required className="form-field" />
                    </Field>

                    <Field id="endereco" label="Project address">
                      <Input id="endereco" name="endereco" className="form-field" />
                    </Field>

                    <Field id="cidade" label="City / State">
                      <Input id="cidade" name="cidade" required placeholder="E.g. Newark, NJ" className="form-field" />
                    </Field>

                    <Field id="servico" label="Desired service type">
                      <select
                        id="servico"
                        name="servico"
                        required
                        defaultValue=""
                        className="form-field appearance-none w-full"
                      >
                        <option value="" disabled>Select a service…</option>
                        {SERVICE_OPTIONS.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </Field>

                    <Field id="mensagem" label="Message (optional)">
                      <Textarea id="mensagem" name="mensagem" rows={4} className="form-field !h-auto" />
                    </Field>

                    <button
                      type="submit"
                      className="w-full h-14 bg-primary text-white text-[10px] tracking-[0.32em] uppercase font-semibold hover:bg-[hsl(211_80%_18%)] transition-colors inline-flex items-center justify-center gap-3"
                    >
                      Send message
                      <ArrowUpRight className="h-4 w-4" />
                    </button>

                    <style>{`
                      .form-field {
                        border: 0;
                        border-bottom: 1px solid hsl(38 25% 78%);
                        border-radius: 0;
                        padding: 0.85rem 0.25rem;
                        background: transparent;
                        font-size: 0.95rem;
                        color: hsl(211 80% 13%);
                        outline: none;
                        transition: border-color .25s ease;
                      }
                      .form-field:focus, .form-field:focus-visible {
                        border-bottom-color: hsl(45 85% 46%);
                        box-shadow: none;
                      }
                    `}</style>
                  </form>
                )}
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
                className="lg:col-span-5 space-y-10"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={CONTACT_IMG} alt="New Creation workspace" className="w-full h-full object-cover" />
                </div>

                <div className="border-t border-[hsl(38_25%_82%)] pt-8 space-y-6">
                  <InfoItem icon={Phone} label="Phone" value="+1 (732) 320-6267" href="tel:+17323206267" />
                  <InfoItem icon={Mail} label="Email" value="bean@newcreationhomesolutions.com" href="mailto:bean@newcreationhomesolutions.com" />
                  <InfoItem icon={Instagram} label="Instagram" value="@newcreationhomesolutions" href="https://instagram.com/newcreationhomesolutions" />
                  <InfoItem icon={MapPin} label="Service area" value="New Jersey · New York · Pennsylvania" />
                </div>
              </motion.aside>
            </div>
          </section>

          {/* Stylized map / coverage band */}
          <section className="relative bg-[hsl(210_30%_97%)] py-24 lg:py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
              <p className="text-[10px] tracking-[0.42em] uppercase font-semibold mb-5" style={{ color: "hsl(45 85% 46%)" }}>
                Coverage
              </p>
              <h2
                className="text-primary mb-12"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.6vw, 3rem)", fontWeight: 400 }}
              >
                Tri-state area — NJ · NY · PA
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[hsl(38_25%_82%)] border border-[hsl(38_25%_82%)]">
                {[
                  { st: "New Jersey", cities: "Newark · Jersey City · Edison · Princeton" },
                  { st: "New York", cities: "Manhattan · Brooklyn · Queens · Westchester" },
                  { st: "Pennsylvania", cities: "Philadelphia · Pittsburgh · Allentown · Bethlehem" },
                ].map((r) => (
                  <div key={r.st} className="bg-background p-10">
                    <p
                      className="text-primary mb-3"
                      style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 500 }}
                    >
                      {r.st}
                    </p>
                    <p className="text-sm text-muted-foreground font-light">{r.cities}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </PageShell>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label htmlFor={id} className="text-[10px] tracking-[0.3em] uppercase font-semibold text-muted-foreground">
        {label}
      </Label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

function InfoItem({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 border border-[hsl(38_30%_78%)] flex items-center justify-center shrink-0">
        <Icon className="h-4 w-4" style={{ color: "hsl(45 85% 46%)" }} strokeWidth={1.4} />
      </div>
      <div>
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-muted-foreground mb-1">{label}</p>
        <p className="text-primary font-light">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity break-all">{content}</a>
  ) : (
    content
  );
}


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
  "Laminados",
  "Vinil",
  "Ceramic Tile",
  "Carpet",
  "Lixamento e acabamento",
  "Showers e backsplashes",
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
      `Nome: ${d.get("nome")}\nTelefone: ${d.get("telefone")}\nEmail: ${d.get("email")}\nEndereço: ${d.get(
        "endereco",
      )}\nCidade/Estado: ${d.get("cidade")}\nServiço: ${d.get("servico")}\n\nMensagem:\n${d.get("mensagem") || ""}`,
    );
    window.location.href = `mailto:bean@newcreationhomesolutions.com?subject=${encodeURIComponent(
      "Contato pelo site — New Creation Home Solutions",
    )}&body=${body}`;
    setSent(true);
    f.reset();
  }

  return (
    <PageShell
      slug="/contato"
      title="Contato — New Creation Home Solutions"
      description="Fale com a equipe. Atendimento em New Jersey, Nova York e Pensilvânia."
    >
      {() => (
        <>
          <PageHero
            eyebrow="Contato"
            title="Conte sobre o seu projeto. Cuidamos do resto."
            lead="Atendemos residências e comércios em New Jersey, Nova York e Pensilvânia. Respondemos em até 24 horas."
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
                      Obrigado pelo contato!
                    </h2>
                    <p className="text-muted-foreground font-light">
                      Recebemos sua mensagem. Entraremos em contato em até 24 horas.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    <div>
                      <p className="text-[10px] tracking-[0.42em] uppercase font-semibold mb-3" style={{ color: "hsl(45 85% 46%)" }}>
                        Formulário
                      </p>
                      <h2
                        className="text-primary"
                        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)", fontWeight: 400 }}
                      >
                        Solicite uma proposta personalizada.
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Field id="nome" label="Nome">
                        <Input id="nome" name="nome" required className="form-field" />
                      </Field>
                      <Field id="telefone" label="Telefone">
                        <Input id="telefone" name="telefone" required className="form-field" />
                      </Field>
                    </div>

                    <Field id="email" label="Email">
                      <Input id="email" name="email" type="email" required className="form-field" />
                    </Field>

                    <Field id="endereco" label="Endereço do projeto">
                      <Input id="endereco" name="endereco" className="form-field" />
                    </Field>

                    <Field id="cidade" label="Cidade / Estado">
                      <Input id="cidade" name="cidade" required placeholder="Ex: Newark, NJ" className="form-field" />
                    </Field>

                    <Field id="servico" label="Tipo de serviço desejado">
                      <select
                        id="servico"
                        name="servico"
                        required
                        defaultValue=""
                        className="form-field appearance-none w-full"
                      >
                        <option value="" disabled>Selecione um serviço…</option>
                        {SERVICE_OPTIONS.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </Field>

                    <Field id="mensagem" label="Mensagem (opcional)">
                      <Textarea id="mensagem" name="mensagem" rows={4} className="form-field !h-auto" />
                    </Field>

                    <button
                      type="submit"
                      className="w-full h-14 bg-primary text-white text-[10px] tracking-[0.32em] uppercase font-semibold hover:bg-[hsl(211_80%_18%)] transition-colors inline-flex items-center justify-center gap-3"
                    >
                      Enviar mensagem
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
                  <img src={CONTACT_IMG} alt="Escritório New Creation" className="w-full h-full object-cover" />
                </div>

                <div className="border-t border-[hsl(38_25%_82%)] pt-8 space-y-6">
                  <InfoItem icon={Phone} label="Telefone" value="+1 (732) 320-6267" href="tel:+17323206267" />
                  <InfoItem icon={Mail} label="Email" value="bean@newcreationhomesolutions.com" href="mailto:bean@newcreationhomesolutions.com" />
                  <InfoItem icon={Instagram} label="Instagram" value="@newcreationhomesolutions" href="https://instagram.com/newcreationhomesolutions" />
                  <InfoItem icon={MapPin} label="Atuação" value="New Jersey · Nova York · Pensilvânia" />
                </div>
              </motion.aside>
            </div>
          </section>

          {/* Stylized map / coverage band */}
          <section className="relative bg-[hsl(210_30%_97%)] py-24 lg:py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
              <p className="text-[10px] tracking-[0.42em] uppercase font-semibold mb-5" style={{ color: "hsl(45 85% 46%)" }}>
                Cobertura
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


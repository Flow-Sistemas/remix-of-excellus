import { motion } from "framer-motion";
import { Award, Hammer, Layers, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import PageShell, { PageHero } from "./site/PageShell";

const EASE = [0.22, 1, 0.36, 1] as const;

const HERO_IMG = "/images/floor-sanding.png";
const STORY_IMG = "/images/floor-engineered.png";
const CRAFT_IMG = "/images/floor-vinyl.png";

const TIMELINE = [
  { year: "2011", title: "O Início", text: "Fundada com o compromisso de elevar o padrão de instalação de pisos em New Jersey." },
  { year: "2015", title: "Expansão Regional", text: "Atendimento estendido a Nova York e Pensilvânia, sempre com a mesma exigência." },
  { year: "2019", title: "Catálogo Premium", text: "Parcerias com fornecedores de engineered, vinil e ceramic tile de alta performance." },
  { year: "2025", title: "14 Anos de Excelência", text: "Centenas de projetos residenciais e comerciais entregues com acabamento impecável." },
];

const VALUES = [
  { icon: Award, title: "Maestria", text: "Cada milímetro importa. Nivelamento, esquadro e alinhamento são tratados com rigor cirúrgico." },
  { icon: ShieldCheck, title: "Confiança", text: "Comunicação transparente, prazos cumpridos e respeito absoluto pelo seu lar." },
  { icon: Layers, title: "Materiais", text: "Trabalhamos somente com linhas de pisos premium, garantindo durabilidade real ao longo dos anos." },
  { icon: Sparkles, title: "Acabamento", text: "O detalhe final é o que diferencia um piso bem instalado de uma obra-prima." },
];

export default function AboutPage() {
  return (
    <PageShell
      slug="/sobre"
      title="Sobre — New Creation Home Solutions"
      description="Há 14 anos transformando ambientes com instalação e acabamento de pisos de alto padrão em NJ, NY e PA."
    >
      {() => (
        <>
          <PageHero
            eyebrow="Nossa História"
            title="Há 14 anos construindo pisos que duram gerações."
            lead="Somos uma equipe especializada em instalação e acabamento de pisos premium, atuando com a precisão de uma boutique e a estrutura de uma empresa de referência em New Jersey, Nova York e Pensilvânia."
            image={HERO_IMG}
          />

          {/* Story split */}
          <section className="py-14 sm:py-20 lg:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: EASE }}
                  className="lg:col-span-7 relative"
                >
                  <div className="aspect-[4/3] sm:aspect-[5/4] lg:aspect-[5/6] overflow-hidden">
                    <img src={STORY_IMG} alt="Instalação de piso premium" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-[hsl(43_75%_60%)] text-primary px-5 sm:px-8 py-4 sm:py-6 hidden sm:block">
                    <p className="text-4xl sm:text-5xl font-light" style={{ fontFamily: "var(--font-display)" }}>14</p>
                    <p className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold">anos de experiência</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
                  className="lg:col-span-5"
                >
                  <p className="text-[10px] tracking-[0.42em] uppercase font-semibold mb-4 sm:mb-5" style={{ color: "hsl(45 85% 46%)" }}>
                    Nossa Filosofia
                  </p>
                  <h2
                    className="text-primary mb-6 sm:mb-8"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.1 }}
                  >
                    Pisos são a base de tudo. Tratamos como tal.
                  </h2>
                  <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                    <p>
                      Começamos em 2011 com uma ideia simples: oferecer instalação e acabamento de pisos no padrão exigido por arquitetos, designers e clientes que não aceitam concessões.
                    </p>
                    <p>
                      Hoje, somos referência em <span className="text-primary font-medium">hardwood, engineered, laminados, vinil, ceramic tile e carpet</span> — também com serviço completo de lixamento e acabamento de pisos existentes.
                    </p>
                    <p>
                      Cada projeto recebe a mesma atenção, seja uma reforma de cozinha ou uma residência inteira. É isso que mantém clientes voltando e indicando há mais de uma década.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-14 sm:py-20 lg:py-32 bg-[hsl(210_30%_98%)]">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
              <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <p className="text-[10px] tracking-[0.42em] uppercase font-semibold mb-4 sm:mb-5" style={{ color: "hsl(45 85% 46%)" }}>
                  Nossa Trajetória
                </p>
                <h2
                  className="text-primary"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 4vw, 3rem)", fontWeight: 400 }}
                >
                  Uma linha do tempo de excelência
                </h2>
              </div>

              {/* Mobile: simple vertical list. Desktop: alternating */}
              <div className="relative">
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[hsl(38_30%_82%)]" />
                <div className="space-y-10 sm:space-y-14 lg:space-y-24">
                  {TIMELINE.map((t, i) => (
                    <motion.div
                      key={t.year}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: EASE }}
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-20 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}
                    >
                      <div className="lg:[direction:ltr]">
                        <p
                          className="font-light leading-none"
                          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 10vw, 6rem)", color: "hsl(45 85% 50%)" }}
                        >
                          {t.year}
                        </p>
                      </div>
                      <div className="lg:[direction:ltr]">
                        <h3
                          className="text-primary mb-2 sm:mb-3"
                          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 3vw, 1.75rem)", fontWeight: 500 }}
                        >
                          {t.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-md">{t.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Values grid */}
          <section className="py-14 sm:py-20 lg:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
              <div className="mb-10 sm:mb-14 lg:mb-16">
                <p className="text-[10px] tracking-[0.42em] uppercase font-semibold mb-4 sm:mb-5" style={{ color: "hsl(45 85% 46%)" }}>
                  Valores
                </p>
                <h2
                  className="text-primary"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.1 }}
                >
                  O que orienta cada instalação que entregamos.
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-px lg:bg-[hsl(38_25%_88%)] lg:border lg:border-[hsl(38_25%_88%)]">
                {VALUES.map((v) => (
                  <div key={v.title} className="bg-background p-6 sm:p-8 lg:p-10 border border-[hsl(38_25%_88%)] lg:border-0 group hover:bg-[hsl(210_30%_98%)] transition-colors">
                    <v.icon className="h-6 w-6 sm:h-7 sm:w-7 mb-4 sm:mb-6" style={{ color: "hsl(45 85% 46%)" }} strokeWidth={1.3} />
                    <h3 className="text-primary mb-2 sm:mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: 500 }}>
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Craft band */}
          <section className="relative py-20 sm:py-24 lg:py-40 bg-primary text-white overflow-hidden">
            <div className="absolute inset-0">
              <img src={CRAFT_IMG} alt="" className="w-full h-full object-cover opacity-25" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
            </div>
            <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
              <Hammer className="h-7 w-7 sm:h-8 sm:w-8 mx-auto mb-6 sm:mb-8" style={{ color: "hsl(45 85% 62%)" }} strokeWidth={1.3} />
              <h2
                className="mb-5 sm:mb-8"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 4.5vw, 3.75rem)", fontWeight: 400, lineHeight: 1.1 }}
              >
                Mão de obra especializada, acabamento impecável.
              </h2>
              <p className="text-white/75 font-light max-w-2xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg">
                Cada profissional da nossa equipe é treinado dentro do nosso próprio padrão de qualidade. Por isso conseguimos garantir uniformidade e excelência em projetos de qualquer escala.
              </p>
              <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2 sm:gap-3 text-sm">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: "hsl(45 85% 62%)" }} />
                <span className="text-white/80 tracking-wider text-xs sm:text-sm">Atendimento em New Jersey · Nova York · Pensilvânia</span>
              </div>
            </div>
          </section>
        </>
      )}
    </PageShell>
  );
}


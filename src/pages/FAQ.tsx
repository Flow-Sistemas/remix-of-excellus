import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import PageShell, { PageHero } from "./site/PageShell";

const EASE = [0.22, 1, 0.36, 1] as const;

const HERO_IMG =
  "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=2000&q=85";

const CATEGORIES = [
  {
    title: "Serviços & Produtos",
    items: [
      {
        q: "Quais tipos de piso vocês instalam?",
        a: "Trabalhamos com hardwood, engineered, laminados, vinil (LVT/LVP), ceramic tile e carpet. Também executamos lixamento e acabamento de pisos existentes.",
      },
      {
        q: "Vocês fazem showers e backsplashes em ceramic tile?",
        a: "Sim. Executamos o assentamento completo de ceramic tile em áreas molhadas, incluindo impermeabilização, paginação e rejunte premium.",
      },
      {
        q: "É possível renovar um piso de madeira antigo?",
        a: "Sim. Nosso serviço de lixamento e acabamento devolve uniformidade, brilho e proteção a pisos existentes — uma alternativa elegante à troca completa.",
      },
    ],
  },
  {
    title: "Orçamento & Prazos",
    items: [
      {
        q: "Como funciona o orçamento?",
        a: "Após o primeiro contato, agendamos uma visita técnica para medições e diagnóstico. Em até 24h enviamos uma proposta detalhada por escrito.",
      },
      {
        q: "Qual o prazo médio de uma instalação?",
        a: "Depende do tipo de piso e da metragem, mas a maioria dos projetos residenciais é concluída em 3 a 7 dias úteis.",
      },
      {
        q: "Vocês fornecem o material ou eu compro?",
        a: "Podemos fornecer materiais premium das nossas parcerias ou trabalhar com produto comprado pelo cliente. Sempre com nota fiscal e garantia.",
      },
    ],
  },
  {
    title: "Atendimento & Cobertura",
    items: [
      {
        q: "Em quais regiões vocês atendem?",
        a: "Atendemos toda a tri-state area: New Jersey, Nova York e Pensilvânia — em projetos residenciais e comerciais.",
      },
      {
        q: "Trabalham com arquitetos e designers de interiores?",
        a: "Sim. Temos parcerias contínuas com profissionais da área e oferecemos suporte técnico durante a especificação do projeto.",
      },
      {
        q: "Qual a garantia dos serviços?",
        a: "Oferecemos garantia formal sobre a mão de obra. A garantia do material segue as condições do fabricante.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <PageShell
      slug="/faq"
      title="FAQ — Perguntas Frequentes — New Creation Home Solutions"
      description="Dúvidas mais comuns sobre instalação de pisos premium, orçamentos e cobertura em NJ, NY e PA."
    >
      {() => (
        <>
          <PageHero
            eyebrow="Perguntas Frequentes"
            title="Tudo o que você precisa saber antes de começar."
            lead="Reunimos as dúvidas mais comuns dos nossos clientes. Se a sua não estiver aqui, fale com a gente."
            image={HERO_IMG}
          />

          <section className="py-24 lg:py-32 bg-background">
            <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-20 lg:space-y-24">
              {CATEGORIES.map((cat, idx) => (
                <FaqCategory key={cat.title} cat={cat} idxOffset={idx * 100} />
              ))}
            </div>
          </section>

          <section className="py-20 bg-[hsl(210_30%_98%)] border-t border-[hsl(38_25%_88%)]">
            <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
              <h2
                className="text-primary mb-5"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400 }}
              >
                Sua dúvida não está aqui?
              </h2>
              <p className="text-muted-foreground font-light mb-8">
                Estamos a uma mensagem de distância. Respondemos em até 24 horas.
              </p>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 h-12 px-8 text-[10px] tracking-[0.3em] uppercase font-semibold bg-primary text-white hover:bg-[hsl(211_80%_18%)] transition-colors"
              >
                Fale com a equipe
              </Link>
            </div>
          </section>
        </>
      )}
    </PageShell>
  );
}

function FaqCategory({ cat, idxOffset }: { cat: { title: string; items: { q: string; a: string }[] }; idxOffset: number }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div>
      <p className="text-[10px] tracking-[0.42em] uppercase font-semibold mb-10" style={{ color: "hsl(38 55% 45%)" }}>
        {cat.title}
      </p>
      <div className="divide-y divide-[hsl(38_25%_85%)] border-y border-[hsl(38_25%_85%)]">
        {cat.items.map((it, i) => {
          const isOpen = openIdx === i;
          return (
            <motion.div
              key={it.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: (idxOffset + i) * 0.02 }}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-7 lg:py-8 text-left group"
              >
                <span
                  className="text-primary group-hover:text-[hsl(38_55%_40%)] transition-colors"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)", fontWeight: 500 }}
                >
                  {it.q}
                </span>
                <span className="shrink-0 h-9 w-9 border border-[hsl(38_30%_78%)] flex items-center justify-center transition-colors group-hover:border-[hsl(38_55%_45%)]">
                  {isOpen ? (
                    <Minus className="h-4 w-4" style={{ color: "hsl(38 55% 45%)" }} />
                  ) : (
                    <Plus className="h-4 w-4" style={{ color: "hsl(38 55% 45%)" }} />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 pr-12 text-muted-foreground font-light leading-relaxed max-w-2xl">{it.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

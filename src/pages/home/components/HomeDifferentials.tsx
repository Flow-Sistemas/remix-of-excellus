import { Gem, Award, Clock } from "lucide-react";

const items = [
  {
    icon: Gem,
    subtitle: "Projetos sob medida",
    title: "Design Exclusivo",
    text: "Projetos pensados para o seu estilo de vida, com materiais premium e acabamentos que valorizam cada ambiente.",
  },
  {
    icon: Award,
    subtitle: "Qualidade certificada",
    title: "Materiais Premium",
    text: "Acabamentos de alto padrão selecionados para garantir durabilidade, sofisticação e beleza duradoura.",
  },
  {
    icon: Clock,
    subtitle: "Compromisso total",
    title: "Entrega Garantida",
    text: "Prazo combinado é compromisso. Planejamento eficiente, execução impecável e atendimento humanizado.",
  },
];

export default function HomeDifferentials() {
  return (
    <section id="sobre" className="pt-14 sm:pt-20 lg:pt-32 pb-8 sm:pb-10 lg:pb-14 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div
            className="text-[10px] sm:text-[11px] tracking-[0.28em] sm:tracking-[0.32em] uppercase font-semibold mb-3 sm:mb-4"
            style={{ color: "hsl(45 85% 46%)" }}
          >
            Por que escolher a New Creation
          </div>
          <h2
            className="text-primary tracking-tight max-w-4xl mx-auto px-4"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 4.5vw, 3rem)", fontWeight: 600 }}
          >
            EXCELÊNCIA QUE <span className="italic" style={{ color: "hsl(45 85% 46%)" }}>TRANSFORMA</span> CADA DETALHE
          </h2>
          <div
            className="mx-auto mt-4 sm:mt-5 h-px w-14 sm:w-16"
            style={{ background: "linear-gradient(90deg, transparent, hsl(45 85% 55%), transparent)" }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {items.map(({ icon: Icon, title, subtitle, text }) => (
            <article
              key={title}
              className="relative p-7 sm:p-8 lg:p-10 text-center bg-white border border-[hsl(38_25%_88%)] hover:border-[hsl(43_55%_60%)] hover:shadow-[0_30px_80px_-30px_hsl(211_80%_13%/0.18)] transition-all duration-700 hover:-translate-y-1.5"
            >
              <div
                className="mx-auto mb-5 sm:mb-6 h-14 w-14 sm:h-16 sm:w-16 rounded-full flex items-center justify-center"
                style={{ border: "1.5px solid hsl(43 55% 55%)" }}
              >
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: "hsl(45 85% 46%)" }} strokeWidth={1.4} />
              </div>
              <div className="text-[9px] sm:text-[10px] tracking-[0.24em] sm:tracking-[0.28em] uppercase font-semibold mb-2 sm:mb-3" style={{ color: "hsl(45 85% 46%)" }}>
                {subtitle}
              </div>
              <h3
                className="text-primary mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)", fontWeight: 600 }}
              >
                {title}
              </h3>
              <div className="mx-auto h-px w-8 sm:w-10 mb-3 sm:mb-4" style={{ background: "hsl(43 55% 55%)" }} />
              <p className="text-[13px] sm:text-[14px] leading-relaxed text-foreground/75 font-light">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


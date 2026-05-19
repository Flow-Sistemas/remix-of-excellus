import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "ENGINEERED",
    text: "Pisos de madeira engineered com estabilidade superior e visual sofisticado para ambientes residenciais e comerciais.",
    img: "/images/floor-engineered.png",
    large: true,
  },
  {
    title: "LAMINADOS",
    text: "Acabamento elegante, instalação rápida e alta resistência para o dia a dia da sua casa.",
    img: "/images/floor-laminate.png",
    large: true,
  },
  {
    title: "VINIL",
    text: "Durabilidade impermeável com design refinado para qualquer ambiente.",
    img: "/images/floor-vinyl.png",
  },
  {
    title: "CERAMIC TILE",
    text: "Pisos, showers e backsplashes com assentamento preciso e acabamento impecável.",
    img: "/images/floor-ceramic.png",
  },
  {
    title: "CARPET",
    text: "Conforto, isolamento acústico e estilo para quartos e ambientes sociais.",
    img: "/images/floor-carpet.png",
  },
  {
    title: "LIXAMENTO & ACABAMENTO",
    text: "Renovação completa de pisos existentes, devolvendo brilho, uniformidade e valor ao seu imóvel.",
    img: "/images/floor-sanding.png",
  },
];

export default function HomeServices(_props: { onQuote: () => void }) {
  return (
    <section id="servicos" className="py-14 sm:py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
          <h2
            className="text-primary tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 4vw, 2.75rem)", fontWeight: 500 }}
          >
            NOSSAS LINHAS DE PISOS
          </h2>
          <Link
            to="/servicos"
            className="text-[10px] tracking-[0.3em] uppercase font-semibold text-primary flex items-center gap-2 group hover:gap-3 transition-all flex-shrink-0"
          >
            Ver Todas as Linhas
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Top row — 2 large: side-by-side on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
          {services.filter((s) => s.large).map((s) => (
            <ServiceCard key={s.title} {...s} large />
          ))}
        </div>
        {/* Bottom row — 4 small: 2-col on mobile, 4-col on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.filter((s) => !s.large).map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, text, img, large }: { title: string; text: string; img: string; large?: boolean }) {
  return (
    <Link to="/servicos" className={`group relative overflow-hidden cursor-pointer block ${large ? "h-[240px] sm:h-[300px] lg:h-[340px]" : "h-[180px] sm:h-[220px] lg:h-[260px]"}`}>
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        loading="lazy"
      />
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(180deg, hsl(211 80% 8% / 0.1) 0%, hsl(211 80% 8% / 0.6) 50%, hsl(211 80% 6% / 0.97) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-9 text-white">
        <h3
          className="mb-1 sm:mb-2 tracking-tight"
          style={{ fontFamily: "var(--font-display)", fontSize: large ? "clamp(1.2rem, 3vw, 1.85rem)" : "clamp(0.95rem, 2.5vw, 1.4rem)", fontWeight: 500 }}
        >
          {title}
        </h3>
        <p className={`text-white/80 mb-2 sm:mb-4 font-light max-w-xs ${large ? "text-xs sm:text-sm" : "text-[11px] sm:text-xs hidden sm:block"}`}>{text}</p>
        <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold" style={{ color: "hsl(45 85% 65%)" }}>
          Ver Detalhes
          <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

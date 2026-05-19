import { motion } from "framer-motion";
import { ArrowUpRight, TreePine, Square, Droplets, Grid3x3, Sparkles, Wrench, Ruler, ShowerHead } from "lucide-react";
import { Link } from "react-router-dom";
import PageShell, { PageHero } from "./site/PageShell";

const EASE = [0.22, 1, 0.36, 1] as const;

const HERO_IMG =
  "/images/floor-vinyl.png";

const SERVICES = [
  {
    id: "hardwood",
    icon: TreePine,
    title: "Hardwood",
    tag: "Madeira maciça",
    text: "Pisos em madeira maciça com instalação precisa e acabamento valorizado por arquitetos e designers.",
    img: "/images/floor-engineered.png",
  },
  {
    id: "engineered",
    icon: Square,
    title: "Engineered Flooring",
    tag: "Estabilidade superior",
    text: "Tecnologia multicamadas com estabilidade dimensional ideal para qualquer ambiente, inclusive sobre piso radiante.",
    img: "/images/floor-laminate.png",
  },
  {
    id: "laminados",
    icon: Ruler,
    title: "Laminados",
    tag: "Custo-benefício premium",
    text: "Visual sofisticado, alta resistência ao tráfego e instalação ágil, com acabamento impecável.",
    img: "/images/floor-vinyl.png",
  },
  {
    id: "vinil",
    icon: Droplets,
    title: "Vinil",
    tag: "Impermeável & versátil",
    text: "Pisos vinílicos LVT/LVP com alta resistência à umidade, ideais para cozinhas, banheiros e áreas comerciais.",
    img: "/images/floor-engineered.png",
  },
  {
    id: "ceramic",
    icon: Grid3x3,
    title: "Ceramic Tile",
    tag: "Pisos & paredes",
    text: "Assentamento preciso em pisos, com paginação inteligente e juntas perfeitamente alinhadas.",
    img: "/images/floor-ceramic.png",
  },
  {
    id: "carpet",
    icon: Sparkles,
    title: "Carpet",
    tag: "Conforto residencial",
    text: "Instalação profissional de carpetes com tensionamento adequado, emendas invisíveis e acabamento de excelência.",
    img: "/images/floor-carpet.png",
  },
  {
    id: "showers",
    icon: ShowerHead,
    title: "Showers & Backsplashes",
    tag: "Ceramic tile em áreas molhadas",
    text: "Showers e backsplashes em ceramic tile com impermeabilização, paginação refinada e rejunte impecável.",
    img: "/images/floor-ceramic.png",
  },
  {
    id: "refinishing",
    icon: Wrench,
    title: "Lixamento & Acabamento",
    tag: "Renovação de pisos existentes",
    text: "Renove pisos de madeira existentes com lixamento profissional e acabamento de alta durabilidade.",
    img: "/images/floor-sanding.png",
  },
];

const PROCESS = [
  { n: "01", title: "Diagnóstico", text: "Visita técnica, medição precisa e avaliação do contrapiso." },
  { n: "02", title: "Especificação", text: "Sugestão de materiais, paginação e acabamentos alinhados ao projeto." },
  { n: "03", title: "Instalação", text: "Execução com equipe especializada, materiais premium e zero improviso." },
  { n: "04", title: "Acabamento", text: "Revisão detalhada, rodapés, finalização e entrega impecável." },
];

export default function ServicesPage() {
  return (
    <PageShell
      slug="/servicos"
      title="Serviços — Pisos premium em NJ, NY e PA"
      description="Hardwood, engineered, laminados, vinil, ceramic tile, carpet, lixamento e acabamento. Instalação de pisos premium."
    >
      {({ onQuote }) => (
        <>
          <PageHero
            eyebrow="Nossos Serviços"
            title="Um catálogo completo de pisos premium, executado com precisão."
            lead="Da seleção do material ao último rodapé, cobrimos todas as etapas — sempre com a mesma exigência de qualidade que nos acompanha há 14 anos."
            image={HERO_IMG}
          />

          {/* Catalog grid */}
          <section className="py-24 lg:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                <div className="max-w-xl">
                  <p className="text-[10px] tracking-[0.42em] uppercase font-semibold mb-5" style={{ color: "hsl(45 85% 46%)" }}>
                    Catálogo
                  </p>
                  <h2
                    className="text-primary"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.6vw, 3rem)", fontWeight: 400, lineHeight: 1.1 }}
                  >
                    Linhas de pisos & serviços especializados
                  </h2>
                </div>
                <button
                  onClick={onQuote}
                  className="text-[10px] tracking-[0.3em] uppercase font-semibold flex items-center gap-2 group self-start md:self-end"
                  style={{ color: "hsl(45 85% 46%)" }}
                >
                  Solicitar Orçamento
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                {SERVICES.map((s, i) => (
                  <motion.article
                    key={s.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.05 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-[hsl(210_25%_94%)]">
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-5 left-5 h-10 w-10 bg-white/95 backdrop-blur flex items-center justify-center">
                        <s.icon className="h-4 w-4 text-primary" strokeWidth={1.4} />
                      </div>
                    </div>
                    <p className="text-[10px] tracking-[0.32em] uppercase font-semibold mb-3" style={{ color: "hsl(45 85% 46%)" }}>
                      {s.tag}
                    </p>
                    <h3
                      className="text-primary mb-3 group-hover:text-[hsl(38_55%_40%)] transition-colors"
                      style={{ fontFamily: "var(--font-display)", fontSize: "1.7rem", fontWeight: 500 }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.text}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-24 lg:py-32 bg-[hsl(210_30%_98%)]">
            <div className="max-w-6xl mx-auto px-6 lg:px-10">
              <div className="max-w-2xl mb-16">
                <p className="text-[10px] tracking-[0.42em] uppercase font-semibold mb-5" style={{ color: "hsl(45 85% 46%)" }}>
                  Processo
                </p>
                <h2
                  className="text-primary"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.6vw, 3rem)", fontWeight: 400, lineHeight: 1.1 }}
                >
                  Quatro etapas. Zero surpresas.
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {PROCESS.map((p) => (
                  <div key={p.n} className="border-t border-[hsl(38_30%_75%)] pt-6">
                    <p className="text-xs tracking-[0.3em] font-semibold mb-6" style={{ color: "hsl(45 85% 46%)" }}>
                      {p.n}
                    </p>
                    <h3 className="text-primary mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 500 }}>
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA band */}
          <section className="py-24 lg:py-28 bg-primary text-white">
            <div className="max-w-5xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <h2
                className="max-w-2xl"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 400, lineHeight: 1.15 }}
              >
                Pronto para transformar seus pisos com quem entende?
              </h2>
              <Link
                to="/contato"
                className="inline-flex items-center gap-3 px-8 h-12 text-[10px] tracking-[0.3em] uppercase font-semibold border border-[hsl(43_75%_60%)] text-[hsl(43_75%_65%)] hover:bg-[hsl(43_75%_60%)] hover:text-primary transition-colors"
              >
                Falar com a equipe
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </>
      )}
    </PageShell>
  );
}


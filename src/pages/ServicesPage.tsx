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
    tag: "Solid wood",
    text: "Solid hardwood floors with precise installation and finishing trusted by architects and designers.",
    img: "/images/floor-engineered.png",
  },
  {
    id: "engineered",
    icon: Square,
    title: "Engineered Flooring",
    tag: "Superior stability",
    text: "Multi-layer technology with dimensional stability ideal for any space, including over radiant heating.",
    img: "/images/floor-laminate.png",
  },
  {
    id: "laminate",
    icon: Ruler,
    title: "Laminate",
    tag: "Premium value",
    text: "Sophisticated look, high traffic resistance, and fast installation — with flawless finishing.",
    img: "/images/floor-vinyl.png",
  },
  {
    id: "vinyl",
    icon: Droplets,
    title: "Vinyl",
    tag: "Waterproof & versatile",
    text: "LVT/LVP vinyl floors with high moisture resistance, ideal for kitchens, bathrooms, and commercial areas.",
    img: "/images/floor-engineered.png",
  },
  {
    id: "ceramic",
    icon: Grid3x3,
    title: "Ceramic Tile",
    tag: "Floors & walls",
    text: "Precise floor setting with smart layout and perfectly aligned joints.",
    img: "/images/floor-ceramic.png",
  },
  {
    id: "carpet",
    icon: Sparkles,
    title: "Carpet",
    tag: "Residential comfort",
    text: "Professional carpet installation with proper tensioning, invisible seams, and excellent finishing.",
    img: "/images/floor-carpet.png",
  },
  {
    id: "showers",
    icon: ShowerHead,
    title: "Showers & Backsplashes",
    tag: "Ceramic tile in wet areas",
    text: "Showers and backsplashes in ceramic tile with waterproofing, refined layout, and flawless grouting.",
    img: "/images/floor-ceramic.png",
  },
  {
    id: "refinishing",
    icon: Wrench,
    title: "Sanding & Refinishing",
    tag: "Renewal of existing floors",
    text: "Renew existing hardwood floors with professional sanding and high-durability finishing.",
    img: "/images/floor-sanding.png",
  },
];

const PROCESS = [
  { n: "01", title: "Assessment", text: "On-site visit, precise measuring, and subfloor evaluation." },
  { n: "02", title: "Specification", text: "Materials, layout, and finishes recommended in line with your project." },
  { n: "03", title: "Installation", text: "Execution by a specialized team with premium materials and zero improvisation." },
  { n: "04", title: "Finishing", text: "Detailed review, baseboards, finishing touches, and flawless handover." },
];

export default function ServicesPage() {
  return (
    <PageShell
      slug="/services"
      title="Services — Premium flooring in NJ, NY & PA"
      description="Hardwood, engineered, laminate, vinyl, ceramic tile, carpet, sanding, and refinishing. Premium floor installation."
    >
      {({ onQuote }) => (
        <>
          <PageHero
            eyebrow="Our Services"
            title="A full catalog of premium floors, executed with precision."
            lead="From material selection to the final baseboard, we cover every step — always with the same demanding quality that has guided us for 14 years."
            image={HERO_IMG}
          />

          {/* Catalog grid */}
          <section className="py-24 lg:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                <div className="max-w-xl">
                  <p className="text-[10px] tracking-[0.42em] uppercase font-semibold mb-5" style={{ color: "hsl(45 85% 46%)" }}>
                    Catalog
                  </p>
                  <h2
                    className="text-primary"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.6vw, 3rem)", fontWeight: 400, lineHeight: 1.1 }}
                  >
                    Flooring lines & specialized services
                  </h2>
                </div>
                <button
                  onClick={onQuote}
                  className="text-[10px] tracking-[0.3em] uppercase font-semibold flex items-center gap-2 group self-start md:self-end"
                  style={{ color: "hsl(45 85% 46%)" }}
                >
                  Request a Quote
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
                  Process
                </p>
                <h2
                  className="text-primary"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.6vw, 3rem)", fontWeight: 400, lineHeight: 1.1 }}
                >
                  Four steps. Zero surprises.
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
                Ready to transform your floors with the experts?
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 h-12 text-[10px] tracking-[0.3em] uppercase font-semibold border border-[hsl(43_75%_60%)] text-[hsl(43_75%_65%)] hover:bg-[hsl(43_75%_60%)] hover:text-primary transition-colors"
              >
                Talk to the team
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </>
      )}
    </PageShell>
  );
}


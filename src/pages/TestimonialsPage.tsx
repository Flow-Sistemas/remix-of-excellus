import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import PageShell, { PageHero } from "./site/PageShell";

const EASE = [0.22, 1, 0.36, 1] as const;

const HERO_IMG = "/images/floor-laminate.png";

const FEATURED = {
  quote:
    "They worked on three areas of our home — engineered in the living room, ceramic tile in the kitchen, and sanding of the old floor. The level of finishing is extremely rare to find.",
  name: "Patricia M.",
  role: "Residential · Princeton, NJ",
  img: "/images/floor-engineered.png",
};

const CARDS = [
  {
    quote: "Flawless vinyl installation across our entire clinic. They stayed on schedule to the day.",
    name: "Dr. Robert L.",
    role: "Commercial · Manhattan, NY",
    img: "/images/floor-vinyl.png",
  },
  {
    quote: "They refinished my apartment's hardwood floor like new. Extremely professional team.",
    name: "Camille R.",
    role: "Residential · Brooklyn, NY",
    img: "/images/floor-laminate.png",
  },
  {
    quote: "Bathroom ceramic tile with a perfect layout. Grout lines aligned, no flaws.",
    name: "Marco D.",
    role: "Residential · Philadelphia, PA",
    img: "/images/floor-ceramic.png",
  },
  {
    quote: "14 years of experience show in every detail. I recommend them without hesitation.",
    name: "Jennifer K.",
    role: "Residential · Edison, NJ",
    img: "/images/floor-carpet.png",
  },
];

const STATS = [
  { n: "500+", l: "Projects delivered" },
  { n: "14", l: "Years in business" },
  { n: "3", l: "States served" },
  { n: "98%", l: "Client referrals" },
];

export default function TestimonialsPage() {
  return (
    <PageShell
      slug="/testimonials"
      title="Testimonials — New Creation Home Solutions"
      description="Real stories from clients who trusted their floors to our team in NJ, NY, and PA."
    >
      {() => (
        <>
          <PageHero
            eyebrow="Testimonials"
            title="The trust of those who saw the results up close."
            lead="14 years of work create stories. Here are a few of them."
            image={HERO_IMG}
          />

          {/* Featured editorial quote — mobile: stacked, desktop: side-by-side */}
          <section className="py-14 sm:py-20 lg:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: EASE }}
                  className="lg:col-span-7"
                >
                  <div className="aspect-[4/3] sm:aspect-[5/4] overflow-hidden">
                    <img
                      src={FEATURED.img}
                      alt="Floor installed by New Creation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
                  className="lg:col-span-5"
                >
                  <Quote className="h-8 w-8 sm:h-10 sm:w-10 mb-5 sm:mb-8" style={{ color: "hsl(45 85% 50%)" }} strokeWidth={1.2} />
                  <p
                    className="text-primary leading-snug mb-7 sm:mb-10"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 3.5vw, 2rem)", fontWeight: 400, fontStyle: "italic" }}
                  >
                    "{FEATURED.quote}"
                  </p>
                  <div className="border-t border-[hsl(38_30%_75%)] pt-5 sm:pt-6">
                    <p className="text-primary font-medium">{FEATURED.name}</p>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{FEATURED.role}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Stats band */}
          <section className="py-12 sm:py-16 lg:py-20 bg-primary text-white">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-center">
              {STATS.map((s) => (
                <div key={s.l}>
                  <p
                    className="font-light mb-1 sm:mb-2"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 6vw, 3.5rem)", color: "hsl(45 85% 62%)" }}
                  >
                    {s.n}
                  </p>
                  <p className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold text-white/70">{s.l}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Editorial card grid — mobile: full-width stacked cards */}
          <section className="py-14 sm:py-20 lg:py-32 bg-[hsl(210_30%_98%)]">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
              <div className="mb-10 sm:mb-16">
                <p className="text-[10px] tracking-[0.42em] uppercase font-semibold mb-4 sm:mb-5" style={{ color: "hsl(45 85% 46%)" }}>
                  More testimonials
                </p>
                <h2
                  className="text-primary"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.1 }}
                >
                  Stories that set the standard.
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                {CARDS.map((c, i) => (
                  <motion.article
                    key={c.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: EASE, delay: (i % 2) * 0.05 }}
                    className="bg-background overflow-hidden border border-[hsl(38_25%_88%)]"
                  >
                    {/* On mobile: top image, then quote below */}
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={c.img} alt="Flooring project" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-5 sm:p-6 lg:p-8 flex flex-col gap-4">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, k) => (
                          <Star key={k} className="h-3.5 w-3.5" style={{ color: "hsl(45 85% 52%)", fill: "hsl(45 85% 52%)" }} />
                        ))}
                      </div>
                      <p
                        className="text-primary leading-relaxed"
                        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 2.5vw, 1.15rem)", fontWeight: 400, fontStyle: "italic" }}
                      >
                        "{c.quote}"
                      </p>
                      <div className="border-t border-[hsl(38_30%_85%)] pt-4">
                        <p className="text-primary font-medium text-sm">{c.name}</p>
                        <p className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mt-1">{c.role}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </PageShell>
  );
}


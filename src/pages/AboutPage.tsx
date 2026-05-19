import { motion } from "framer-motion";
import { Award, Hammer, Layers, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import PageShell, { PageHero } from "./site/PageShell";

const EASE = [0.22, 1, 0.36, 1] as const;

const HERO_IMG = "/images/floor-sanding.png";
const STORY_IMG = "/images/floor-engineered.png";
const CRAFT_IMG = "/images/floor-vinyl.png";

const TIMELINE = [
  { year: "2011", title: "The Beginning", text: "Founded with a commitment to raise the standard of flooring installation in New Jersey." },
  { year: "2015", title: "Regional Expansion", text: "Service extended to New York and Pennsylvania, always with the same demanding standards." },
  { year: "2019", title: "Premium Catalog", text: "Partnerships with high-performance engineered, vinyl, and ceramic tile suppliers." },
  { year: "2025", title: "14 Years of Excellence", text: "Hundreds of residential and commercial projects delivered with flawless finishing." },
];

const VALUES = [
  { icon: Award, title: "Mastery", text: "Every millimeter matters. Leveling, squaring, and alignment are treated with surgical precision." },
  { icon: ShieldCheck, title: "Trust", text: "Transparent communication, deadlines kept, and absolute respect for your home." },
  { icon: Layers, title: "Materials", text: "We work only with premium flooring lines, ensuring true durability over the years." },
  { icon: Sparkles, title: "Finishing", text: "The final detail is what separates a well-installed floor from a masterpiece." },
];

export default function AboutPage() {
  return (
    <PageShell
      slug="/about"
      title="About — New Creation Home Solutions"
      description="14 years transforming spaces with high-end flooring installation and finishing in NJ, NY, and PA."
    >
      {() => (
        <>
          <PageHero
            eyebrow="Our Story"
            title="14 years building floors that last for generations."
            lead="We are a team specialized in premium flooring installation and finishing, working with the precision of a boutique and the structure of a leading company across New Jersey, New York, and Pennsylvania."
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
                    <img src={STORY_IMG} alt="Premium floor installation" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-[hsl(43_75%_60%)] text-primary px-5 sm:px-8 py-4 sm:py-6 hidden sm:block">
                    <p className="text-4xl sm:text-5xl font-light" style={{ fontFamily: "var(--font-display)" }}>14</p>
                    <p className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold">years of experience</p>
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
                    Our Philosophy
                  </p>
                  <h2
                    className="text-primary mb-6 sm:mb-8"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.1 }}
                  >
                    Floors are the foundation of everything. We treat them that way.
                  </h2>
                  <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                    <p>
                      We started in 2011 with a simple idea: deliver flooring installation and finishing at the standard demanded by architects, designers, and clients who don't compromise.
                    </p>
                    <p>
                      Today, we are a reference in <span className="text-primary font-medium">hardwood, engineered, laminate, vinyl, ceramic tile, and carpet</span> — along with complete sanding and refinishing of existing floors.
                    </p>
                    <p>
                      Every project receives the same attention, whether a kitchen remodel or a full home. That's what keeps clients coming back and referring us for over a decade.
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
                  Our Journey
                </p>
                <h2
                  className="text-primary"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 4vw, 3rem)", fontWeight: 400 }}
                >
                  A timeline of excellence
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
                  Values
                </p>
                <h2
                  className="text-primary"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.1 }}
                >
                  What guides every installation we deliver.
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
                Skilled craftsmanship, flawless finishing.
              </h2>
              <p className="text-white/75 font-light max-w-2xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg">
                Every professional on our team is trained to our own quality standard. That's how we guarantee uniformity and excellence on projects of any scale.
              </p>
              <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2 sm:gap-3 text-sm">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: "hsl(45 85% 62%)" }} />
                <span className="text-white/80 tracking-wider text-xs sm:text-sm">Serving New Jersey · New York · Pennsylvania</span>
              </div>
            </div>
          </section>
        </>
      )}
    </PageShell>
  );
}


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
    title: "Services & Products",
    items: [
      {
        q: "What types of flooring do you install?",
        a: "We work with hardwood, engineered, laminate, vinyl (LVT/LVP), ceramic tile, and carpet. We also handle sanding and refinishing of existing floors.",
      },
      {
        q: "Do you handle ceramic tile showers and backsplashes?",
        a: "Yes. We do full ceramic tile setting in wet areas, including waterproofing, layout, and premium grouting.",
      },
      {
        q: "Can you refinish an old hardwood floor?",
        a: "Yes. Our sanding and refinishing service restores uniformity, shine, and protection to existing floors — an elegant alternative to a full replacement.",
      },
    ],
  },
  {
    title: "Quotes & Timelines",
    items: [
      {
        q: "How does the quote process work?",
        a: "After first contact, we schedule an on-site visit for measurements and assessment. Within 24 hours we send a detailed written proposal.",
      },
      {
        q: "What's the typical installation timeline?",
        a: "It depends on the floor type and square footage, but most residential projects are completed in 3 to 7 business days.",
      },
      {
        q: "Do you supply the material or do I purchase it?",
        a: "We can supply premium materials from our partners or work with product purchased by the client. Always with invoice and warranty.",
      },
    ],
  },
  {
    title: "Service & Coverage",
    items: [
      {
        q: "What areas do you serve?",
        a: "We serve the entire tri-state area: New Jersey, New York, and Pennsylvania — for residential and commercial projects.",
      },
      {
        q: "Do you work with architects and interior designers?",
        a: "Yes. We have ongoing partnerships with professionals in the field and offer technical support during project specification.",
      },
      {
        q: "What warranty do you offer?",
        a: "We provide a formal workmanship warranty. Material warranty follows the manufacturer's terms.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <PageShell
      slug="/faq"
      title="FAQ — Frequently Asked Questions — New Creation Home Solutions"
      description="Common questions about premium flooring installation, quotes, and coverage in NJ, NY, and PA."
    >
      {() => (
        <>
          <PageHero
            eyebrow="Frequently Asked Questions"
            title="Everything you need to know before getting started."
            lead="We gathered the most common questions from our clients. If yours isn't here, get in touch."
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
                Don't see your question?
              </h2>
              <p className="text-muted-foreground font-light mb-8">
                We're one message away. We reply within 24 hours.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-12 px-8 text-[10px] tracking-[0.3em] uppercase font-semibold bg-primary text-white hover:bg-[hsl(211_80%_18%)] transition-colors"
              >
                Talk to the team
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

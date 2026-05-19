const items = [
  {
    text: "Flawless work from start to finish. The team is extremely professional and the hardwood floor finish came out perfect.",
    name: "John D.",
    location: "Newark, New Jersey",
  },
  {
    text: "I recommend them without hesitation. They combined fair pricing with premium quality and met every deadline.",
    name: "Maria S.",
    location: "Brooklyn, New York",
  },
  {
    text: "Professionalism and care in every detail. The result exceeded our expectations in every room.",
    name: "Robert K.",
    location: "Philadelphia, PA",
  },
];

export default function HomeTestimonials() {
  return (
    <section className="py-14 sm:py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2
            className="text-primary tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 4vw, 3rem)", fontWeight: 500 }}
          >
            WHAT OUR CLIENTS <span className="italic" style={{ color: "hsl(45 85% 46%)" }}>SAY</span>
          </h2>
          <div className="mx-auto mt-4 sm:mt-5 h-px w-14 sm:w-16" style={{ background: "linear-gradient(90deg, transparent, hsl(45 85% 55%), transparent)" }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {items.map((t) => (
            <figure
              key={t.name}
              className="relative p-6 sm:p-8 lg:p-10 bg-[hsl(38_35%_97%)] border border-[hsl(38_25%_88%)] hover:border-[hsl(43_55%_60%)] hover:shadow-[0_30px_80px_-30px_hsl(211_80%_13%/0.18)] transition-all duration-700 hover:-translate-y-1.5"
            >
              <span
                className="block leading-none mb-1 select-none"
                style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", color: "hsl(45 85% 58%)", fontStyle: "italic", fontWeight: 400 }}
                aria-hidden
              >
                "
              </span>
              <blockquote
                className="text-foreground/85 leading-relaxed mb-6 sm:mb-8 -mt-2 sm:-mt-3"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.95rem, 2vw, 1.15rem)", fontWeight: 400 }}
              >
                {t.text}
              </blockquote>
              <div className="h-px w-8 sm:w-10 mb-3 sm:mb-4" style={{ background: "hsl(43 55% 55%)" }} />
              <figcaption>
                <div className="text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.22em] uppercase font-bold text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{t.location}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

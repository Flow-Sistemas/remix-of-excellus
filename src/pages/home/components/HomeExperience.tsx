import { Layers, ShieldCheck, Award, MapPin, Hammer, Sparkles } from "lucide-react";

const groups = [
  {
    eyebrow: "Our Services",
    title: "Complete flooring solutions",
    items: [
      { icon: Layers, text: "Installation of hardwood, engineered, laminate, vinyl, ceramic, and carpet." },
      { icon: Sparkles, text: "Sanding and refinishing of existing floors." },
      { icon: Hammer, text: "Ceramic tile installation in showers and backsplashes." },
    ],
  },
  {
    eyebrow: "What we solve",
    title: "No headaches on your project",
    items: [
      { icon: ShieldCheck, text: "Qualified, trustworthy professionals from start to finish." },
      { icon: Award, text: "Durable, high-quality materials carefully selected." },
      { icon: Layers, text: "A wide range of flooring options for every style and budget." },
    ],
  },
  {
    eyebrow: "What Sets Us Apart",
    title: "14 years transforming spaces",
    items: [
      { icon: Award, text: "14 years of experience with high-quality products." },
      { icon: Hammer, text: "Skilled craftsmanship with flawless finishing." },
      { icon: MapPin, text: "Serving New Jersey, New York, and Pennsylvania." },
    ],
  },
];

export default function HomeExperience() {
  return (
    <section className="py-14 sm:py-20 lg:py-32 bg-[hsl(38_35%_96%)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2
            className="text-primary tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 4.5vw, 3rem)", fontWeight: 500 }}
          >
            The <span className="italic" style={{ color: "hsl(45 85% 46%)" }}>New Creation</span> Experience
          </h2>
          <div className="mx-auto mt-4 sm:mt-5 h-px w-14 sm:w-16" style={{ background: "linear-gradient(90deg, transparent, hsl(45 85% 55%), transparent)" }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
          {groups.map((g) => (
            <div
              key={g.title}
              className="bg-white border border-[hsl(38_25%_88%)] rounded-sm p-6 sm:p-8 lg:p-10 shadow-[0_30px_60px_-40px_hsl(211_60%_10%/0.25)]"
            >
              <p className="text-[10px] tracking-[0.28em] sm:tracking-[0.32em] uppercase font-semibold mb-2 sm:mb-3" style={{ color: "hsl(45 85% 46%)" }}>
                {g.eyebrow}
              </p>
              <h3
                className="text-primary mb-4 sm:mb-6"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.05rem, 2.5vw, 1.5rem)", lineHeight: 1.2 }}
              >
                {g.title}
              </h3>
              <div className="h-px w-10 sm:w-12 mb-4 sm:mb-6" style={{ background: "hsl(45 85% 55%)" }} />
              <ul className="space-y-4 sm:space-y-5">
                {g.items.map(({ icon: Icon, text }, i) => (
                  <li key={i} className="flex gap-2.5 sm:gap-3">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" strokeWidth={1.4} style={{ color: "hsl(45 85% 46%)" }} />
                    <span className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

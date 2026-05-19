import { useState } from "react";
import { X } from "lucide-react";

const images = [
  { src: "/images/gallery-interior.png", label: "Residencial · Engineered Oak" },
  { src: "/images/floor-ceramic.png", label: "Acabamento Premium" },
  { src: "/images/gallery-wide-plank.png", label: "Living · Wide Plank" },
];

export default function HomeGallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="projetos" className="pt-14 sm:pt-20 lg:pt-28 pb-10 sm:pb-12 lg:pb-16 bg-background">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          <div className="text-[10px] sm:text-[11px] tracking-[0.28em] sm:tracking-[0.32em] uppercase font-semibold mb-3 sm:mb-4" style={{ color: "hsl(45 85% 48%)" }}>
            Portfólio
          </div>
          <h2
            className="text-primary tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 4vw, 3rem)", fontWeight: 500 }}
          >
            AMBIENTES QUE INSPIRAM
          </h2>
          <div className="mx-auto mt-4 sm:mt-5 h-px w-10 sm:w-12" style={{ backgroundColor: "hsl(45 88% 52%)" }} />
          <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-muted-foreground italic font-light">
            Projetos reais, feitos para pessoas reais.
          </p>
        </div>

        {/* Mobile: stacked single column. Desktop: editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-8">
          {/* Dominant image */}
          <button
            onClick={() => setActive(images[0].src)}
            className="group relative overflow-hidden lg:col-span-8 aspect-[16/10] lg:aspect-auto lg:h-[640px] shadow-[0_20px_60px_-30px_hsl(211_60%_6%/0.45)]"
          >
            <img src={images[0].src} alt={images[0].label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(211_60%_6%/0.55)] via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-left text-white">
              <div className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase opacity-80">Projeto em destaque</div>
              <div className="mt-1 text-xs sm:text-sm font-light">{images[0].label}</div>
            </div>
          </button>

          {/* Two medium stacked */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5 lg:gap-8">
            {images.slice(1).map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(img.src)}
                className="group relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[304px] shadow-[0_16px_50px_-30px_hsl(211_60%_6%/0.4)]"
              >
                <img src={img.src} alt={img.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(211_60%_6%/0.5)] via-transparent to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
                <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 text-left text-white">
                  <div className="text-[8px] sm:text-[9px] tracking-[0.3em] uppercase opacity-80">Projeto</div>
                  <div className="mt-0.5 text-[11px] sm:text-xs font-light">{img.label}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[80] bg-primary/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-4 sm:top-6 right-4 sm:right-6 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
            onClick={() => setActive(null)}
            aria-label="Fechar"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <img src={active} alt="" className="max-h-[90vh] max-w-full rounded-sm shadow-2xl" />
        </div>
      )}
    </section>
  );
}

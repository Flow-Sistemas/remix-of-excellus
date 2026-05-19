import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function HomeHero({ onQuote }: { onQuote: () => void }) {
  return (
    <section
      id="inicio"
      className="relative min-h-[88vh] lg:min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/17224730.mp4" type="video/mp4" />
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlays to ensure perfect readability */}
      <div className="absolute inset-0 bg-black/50" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 pt-32 sm:pt-36 pb-20 sm:pb-24 w-full text-center">
        <div className="animate-reveal">
          <p
            className="text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.32em] sm:tracking-[0.4em] uppercase mb-5 sm:mb-6 font-bold"
            style={{
              color: "hsl(45 92% 62%)",
              textShadow: "0 2px 4px rgba(0,0,0,0.9), 0 1px 2px rgba(0,0,0,0.6)",
            }}
          >
            Excelência em pisos há 14 anos
          </p>

          <h1
            className="text-white mb-6 sm:mb-7"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(1.85rem, 5.2vw, 4.25rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              textShadow: "0 4px 16px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,0.8)",
            }}
          >
            <span className="block">Instalação e Acabamento</span>
            <span className="block italic font-semibold" style={{ color: "hsl(45 92% 58%)", textShadow: "0 4px 16px rgba(0,0,0,0.95)" }}>
              de Pisos
            </span>
            <span className="block">para cada ambiente</span>
          </h1>

          <p
            className="text-white text-[13px] sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8 sm:mb-9 font-medium"
            style={{
              textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.7)",
            }}
          >
            Madeira, engineered, laminado, vinil, cerâmica e carpet — projetos residenciais e
            comerciais em New Jersey, Nova York e Pensilvânia.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <Button
              onClick={onQuote}
              size="lg"
              className="group rounded-full px-7 sm:px-9 h-12 text-[10px] sm:text-[11px] tracking-[0.24em] sm:tracking-[0.3em] uppercase font-bold text-primary border-0 shadow-[0_20px_50px_-20px_hsl(48_85%_55%/0.6)] hover:scale-[1.02] transition-all"
              style={{
                background:
                  "linear-gradient(135deg, hsl(45 92% 60%) 0%, hsl(45 88% 52%) 100%)",
              }}
            >
              Solicitar Orçamento
            </Button>
            <a
              href="tel:+17323206267"
              className="group inline-flex items-center justify-center gap-3 rounded-full px-6 sm:px-7 h-12 border border-white/60 text-white text-[10px] sm:text-[11px] tracking-[0.24em] sm:tracking-[0.3em] uppercase font-bold hover:bg-white/10 transition-all"
              style={{
                textShadow: "0 1px 4px rgba(0,0,0,0.8)",
              }}
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              +1 (732) 320-6267
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

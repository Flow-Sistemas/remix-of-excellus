import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const GOLD = "hsl(45 88% 52%)";
const GOLD_SOFT = "hsl(45 80% 68%)";
const NAVY = "hsl(211 50% 16%)";
const CREAM = "hsl(40 45% 96%)";

export default function HomeCta({ onQuote }: { onQuote: () => void }) {
  return (
    <section
      id="contato"
      className="relative overflow-hidden"
      style={{ background: CREAM }}
    >
      <div className="relative grid lg:grid-cols-2 min-h-[480px]">
        {/* Left — text */}
        <div className="relative flex items-center px-5 sm:px-10 lg:px-16 py-12 sm:py-14 lg:py-20">
          <div className="max-w-xl w-full">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div className="h-px w-8 sm:w-10" style={{ background: GOLD }} />
              <span
                className="text-[10px] sm:text-[11px] tracking-[0.35em] sm:tracking-[0.4em] uppercase font-medium"
                style={{ color: GOLD }}
              >
                Vamos conversar
              </span>
            </div>

            <h2
              className="tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4.5vw, 3.25rem)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
                color: NAVY,
              }}
            >
              Pronto para<br />
              <span className="italic font-normal" style={{ color: GOLD }}>
                transformar
              </span>
              <br />
              seu ambiente?
            </h2>

            <div className="h-px w-12 sm:w-14 my-5 sm:my-6" style={{ background: GOLD_SOFT }} />

            <p
              className="max-w-md text-[13px] sm:text-[14px] leading-[1.75] font-light"
              style={{ color: "hsl(211 22% 38%)" }}
            >
              Fale com um especialista da New Creation e descubra como podemos criar o espaço dos seus sonhos — com acabamento impecável e atendimento dedicado.
            </p>

            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-2 sm:gap-3">
              <Button
                onClick={onQuote}
                size="lg"
                className="group rounded-md px-6 sm:px-7 h-11 sm:h-12 text-[10px] sm:text-[11px] tracking-[0.28em] sm:tracking-[0.3em] uppercase font-semibold border-0 shadow-[0_18px_40px_-18px_hsl(38_60%_45%/0.55)] hover:scale-[1.02] transition-all"
                style={{
                  background: "linear-gradient(135deg, hsl(45 75% 65%) 0%, hsl(40 70% 55%) 50%, hsl(36 60% 45%) 100%)",
                  color: "hsl(0 0% 100%)",
                }}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <a
                href="tel:+17323206267"
                className="group inline-flex items-center gap-2 sm:gap-3 h-11 sm:h-12 px-5 sm:px-6 rounded-md border bg-white text-[10px] sm:text-[11px] tracking-[0.28em] sm:tracking-[0.3em] uppercase font-semibold transition-all hover:bg-[hsl(40_50%_99%)]"
                style={{ borderColor: GOLD_SOFT, color: NAVY }}
              >
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" style={{ color: NAVY }} />
                Ligar agora
              </a>
            </div>

            <div
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.28em] uppercase font-medium"
              style={{ color: "hsl(211 22% 42%)" }}
            >
              <div
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ border: `1px solid ${GOLD_SOFT}`, background: "hsl(40 50% 99%)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 sm:h-3.5 sm:w-3.5" style={{ color: GOLD }}>
                  <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>14 anos de experiência</span>
              <span className="h-3 sm:h-3.5 w-px" style={{ background: GOLD_SOFT }} />
              <span>NJ · NY · PA</span>
            </div>
          </div>
        </div>

        {/* Right — image: hidden on mobile, shown on lg */}
        <div className="relative hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=90"
            alt="Interior premium New Creation"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          {/* Cream fade from left for soft blend */}
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(90deg, ${CREAM} 0%, hsl(40 45% 96% / 0.7) 18%, transparent 45%)` }}
            aria-hidden
          />
        </div>
      </div>

      {/* Marble strip */}
      <div
        className="relative h-2 sm:h-3 w-full"
        style={{ background: "linear-gradient(90deg, hsl(40 35% 92%) 0%, hsl(40 30% 96%) 50%, hsl(40 35% 92%) 100%)" }}
      >
        <div
          className="absolute inset-x-0 top-1/2 h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsl(43 70% 55% / 0.6) 30%, hsl(43 70% 55% / 0.6) 70%, transparent)" }}
        />
      </div>
    </section>
  );
}

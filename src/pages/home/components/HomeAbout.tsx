import { ShieldCheck } from "lucide-react";

const GOLD = "hsl(45 88% 52%)";
const GOLD_SOFT = "hsl(45 80% 68%)";
const NAVY = "hsl(211 50% 16%)";
const CREAM = "hsl(40 45% 96%)";

export default function HomeAbout() {
  return (
    <section
      id="quem-somos"
      className="relative overflow-hidden py-14 sm:py-20 lg:py-28"
      style={{ background: CREAM }}
    >
      {/* subtle marble vein bottom-right */}
      <div
        className="pointer-events-none absolute -bottom-32 -right-20 w-[400px] sm:w-[520px] h-[400px] sm:h-[520px] opacity-40"
        style={{
          background: "radial-gradient(ellipse at center, hsl(43 60% 78% / 0.55), transparent 60%)",
          transform: "rotate(-15deg)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-10 right-0 h-px w-[60%]"
        style={{ background: "linear-gradient(90deg, transparent, hsl(43 70% 55% / 0.4), transparent)" }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
        {/* LEFT — text */}
        <div className="max-w-xl">
          <div className="flex flex-col items-start mb-6 sm:mb-8">
            <span className="text-[10px] sm:text-[11px] tracking-[0.38em] sm:tracking-[0.42em] font-medium mb-3 sm:mb-4" style={{ color: GOLD }}>
              QUEM SOMOS
            </span>
            <div className="h-px w-12 sm:w-14" style={{ background: GOLD_SOFT }} />
          </div>

          <h2
            className="tracking-tight mb-7 sm:mb-10"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 4.5vw, 3.6rem)",
              fontWeight: 400,
              color: NAVY,
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
            }}
          >
            Excelência em pisos e acabamentos que{" "}
            <span className="italic font-normal" style={{ color: GOLD }}>
              transformam ambientes.
            </span>
          </h2>

          <div className="h-px w-14 sm:w-16 mb-6 sm:mb-8" style={{ background: GOLD_SOFT }} />

          <div className="space-y-4 sm:space-y-5 text-[14px] sm:text-[15px] leading-[1.8] font-light" style={{ color: "hsl(211 22% 38%)" }}>
            <p>
              <strong className="font-semibold" style={{ color: NAVY }}>
                A New Creation Home Solutions
              </strong>{" "}
              é uma empresa especializada em serviços de instalação e acabamento de pisos, atuando em New Jersey, Nova York e Pensilvânia. Com Helber Medeiros, conhecido como Bim BM, como fundador e com 14 anos de experiência no setor, a empresa se destaca pela qualidade de seus materiais e pela excelência de sua mão de obra.
            </p>
            <p>
              Oferecemos uma ampla gama de opções de pisos, incluindo madeira, engineered, laminados, vinil, cerâmica (pisos, showers e backsplashes) e carpet, garantindo soluções duradouras e visualmente atraentes para todos os tipos de projetos.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-5">
            <div
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-md flex items-center justify-center flex-shrink-0"
              style={{ border: `1px solid ${GOLD_SOFT}`, background: "hsl(40 50% 99%)" }}
            >
              <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: GOLD }} strokeWidth={1.4} />
            </div>
            <span className="text-[12px] sm:text-[13px] font-medium" style={{ color: GOLD }}>
              14 anos de experiência
            </span>
            <span className="h-4 sm:h-5 w-px" style={{ background: GOLD_SOFT }} aria-hidden />
            <span className="text-[12px] sm:text-[13px] font-light" style={{ color: "hsl(211 22% 38%)" }}>
              New Jersey, Nova York e Pensilvânia
            </span>
          </div>
        </div>

        {/* RIGHT — image collage */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
            {/* big image spans both cols */}
            <div
              className="col-span-2 relative overflow-hidden rounded-[6px]"
              style={{ border: `1px solid ${GOLD_SOFT}`, boxShadow: "0 30px 60px -30px hsl(211 50% 20% / 0.25)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90"
                alt="Sala de estar de luxo com piso de madeira"
                className="w-full h-[220px] sm:h-[280px] lg:h-[400px] object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(90deg, hsl(40 45% 96% / 0.35) 0%, transparent 25%)" }}
                aria-hidden
              />
            </div>

            <div
              className="relative overflow-hidden rounded-[6px]"
              style={{ border: `1px solid ${GOLD_SOFT}`, boxShadow: "0 20px 40px -25px hsl(211 50% 20% / 0.22)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=900&q=90"
                alt="Instalação profissional de piso"
                className="w-full h-[130px] sm:h-[160px] lg:h-[210px] object-cover"
                loading="lazy"
              />
            </div>

            <div
              className="relative overflow-hidden rounded-[6px]"
              style={{ border: `1px solid ${GOLD_SOFT}`, boxShadow: "0 20px 40px -25px hsl(211 50% 20% / 0.22)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=90"
                alt="Acabamento de cerâmica premium"
                className="w-full h-[130px] sm:h-[160px] lg:h-[210px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* gold corner accents — hidden on smallest screens */}
          <div className="hidden sm:block absolute -top-3 -left-3 w-8 sm:w-10 h-8 sm:h-10 border-l border-t" style={{ borderColor: GOLD }} aria-hidden />
          <div className="hidden sm:block absolute -bottom-3 -right-3 w-8 sm:w-10 h-8 sm:h-10 border-r border-b" style={{ borderColor: GOLD }} aria-hidden />
        </div>
      </div>
    </section>
  );
}

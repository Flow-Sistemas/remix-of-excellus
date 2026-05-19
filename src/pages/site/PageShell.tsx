import { useState, ReactNode } from "react";
import HomeHeader from "@/pages/home/components/HomeHeader";
import HomeFooter from "@/pages/home/components/HomeFooter";
import QuoteModal from "@/pages/home/components/QuoteModal";
import FloatingSocial from "@/components/FloatingSocial";
import SeoHead from "@/components/SeoHead";

interface PageShellProps {
  children: (ctx: { onQuote: () => void }) => ReactNode;
  slug: string;
  title: string;
  description: string;
}

export default function PageShell({ children, slug, title, description }: PageShellProps) {
  const [open, setOpen] = useState(false);
  const onQuote = () => setOpen(true);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoHead slug={slug} fallbackTitle={title} fallbackDescription={description} />
      <HomeHeader onQuote={onQuote} />
      <main className="pt-[80px]">{children({ onQuote })}</main>
      <HomeFooter />
      <QuoteModal open={open} onOpenChange={setOpen} />
      <FloatingSocial />
    </div>
  );
}

/* Shared editorial primitives */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        {/* Stronger overlay for better contrast */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/45" />
      </div>
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-22 lg:py-40">
        <p
          className="text-[9px] sm:text-[10px] tracking-[0.28em] sm:tracking-[0.42em] uppercase font-semibold mb-4 sm:mb-5"
          style={{
            color: "hsl(45 85% 62%)",
            textShadow: "0 1px 4px rgba(0,0,0,0.6)",
          }}
        >
          {eyebrow}
        </p>
        <h1
          className="max-w-3xl tracking-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(1.6rem, 5.5vw, 4.5rem)",
            lineHeight: 1.05,
            textShadow: "0 2px 10px rgba(0,0,0,0.85), 0 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </h1>
        {lead && (
          <p
            className="max-w-xl mt-4 sm:mt-6 lg:mt-8 text-white/90 font-light leading-relaxed text-sm sm:text-base lg:text-lg"
            style={{
              textShadow: "0 1px 6px rgba(0,0,0,0.7)",
            }}
          >
            {lead}
          </p>
        )}
        <div className="mt-7 sm:mt-10 lg:mt-12 h-px w-16 sm:w-24 bg-[hsl(43_75%_60%)]" />
      </div>
    </section>
  );
}

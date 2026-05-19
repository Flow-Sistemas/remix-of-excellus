import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import LOGO from "@/assets/new-creation-logo.png";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function HomeHeader({ onQuote }: { onQuote: () => void }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-white border-b border-[hsl(38_25%_88%)] shadow-[0_2px_20px_-10px_hsl(211_80%_13%/0.15)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={LOGO} alt="New Creation Home Solutions" className="h-14 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((i) => {
            const isActive = pathname === i.to;
            return (
              <Link
                key={i.to}
                to={i.to}
                className={`text-[11px] tracking-[0.22em] uppercase font-medium transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:h-px after:bg-[hsl(38_55%_45%)] after:transition-all ${
                  isActive
                    ? "text-[hsl(38_55%_45%)] after:w-6"
                    : "text-primary/80 hover:text-[hsl(38_55%_45%)] after:w-0 hover:after:w-4"
                }`}
              >
                {i.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            onClick={onQuote}
            className="rounded-none px-7 h-11 text-[10px] tracking-[0.25em] uppercase font-semibold border border-[hsl(38_55%_45%)] bg-transparent text-[hsl(38_55%_45%)] hover:bg-[hsl(38_55%_45%)] hover:text-white transition-colors"
          >
            Get a Quote
          </Button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 text-primary"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-[hsl(38_25%_88%)]">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {NAV.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="py-2 text-primary font-medium text-sm tracking-wider uppercase"
              >
                {i.label}
              </Link>
            ))}
            <Button onClick={() => { setOpen(false); onQuote(); }} className="bg-[hsl(38_55%_45%)] text-white hover:bg-[hsl(38_55%_50%)] rounded-none">
              Request a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}


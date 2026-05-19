import { Instagram, MessageCircle, Mail, Phone, Facebook } from "lucide-react";
import LOGO from "@/assets/new-creation-logo.png";

export default function HomeFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-white/70 pt-14 sm:pt-16 lg:pt-20 pb-7 sm:pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
        {/* Logo & description — spans both cols on smallest */}
        <div className="col-span-2 lg:col-span-1">
          <img src={LOGO} alt="New Creation Home Solutions" className="h-16 sm:h-20 w-auto mb-4 sm:mb-6" />
          <p className="text-xs sm:text-sm leading-relaxed text-white/60 max-w-xs font-light">
            Transformamos ambientes em experiências únicas com instalação e acabamento de pisos de alto padrão.
          </p>
          <div className="flex gap-2.5 sm:gap-3 mt-5 sm:mt-6">
            {[
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Facebook, href: "#", label: "Facebook" },
              { Icon: MessageCircle, href: "https://wa.me/17323206267", label: "WhatsApp" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-white/20 hover:border-[hsl(43_70%_60%)] hover:text-[hsl(43_70%_70%)] flex items-center justify-center transition-colors"
                aria-label={label}
              >
                <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[10px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.25em] uppercase text-white font-semibold mb-4 sm:mb-6">Institucional</h4>
          <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm font-light">
            {[
              ["Sobre Nós", "#sobre"],
              ["Nossos Projetos", "#projetos"],
              ["Linhas de Pisos", "#servicos"],
              ["Contato", "#contato"],
            ].map(([l, h]) => (
              <li key={l}><a href={h} className="hover:text-[hsl(43_70%_70%)] transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.25em] uppercase text-white font-semibold mb-4 sm:mb-6">Atendimento</h4>
          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-light">
            <li className="flex items-start gap-2.5 sm:gap-3">
              <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 mt-0.5 sm:mt-1 flex-shrink-0" style={{ color: "hsl(45 85% 60%)" }} />
              <a href="tel:+17323206267" className="hover:text-[hsl(43_70%_70%)] transition-colors">+1 (732) 320-6267</a>
            </li>
            <li className="flex items-start gap-2.5 sm:gap-3">
              <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5 mt-0.5 sm:mt-1 flex-shrink-0" style={{ color: "hsl(45 85% 60%)" }} />
              <a href="mailto:bean@newcreationhomesolutions.com" className="hover:text-[hsl(43_70%_70%)] transition-colors break-all text-[11px] sm:text-sm">bean@newcreationhomesolutions.com</a>
            </li>
            <li className="text-white/60 pt-1 text-[11px] sm:text-sm">
              Seg a Sex: 08h às 18h<br />Sáb: 08h às 12h
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.25em] uppercase text-white font-semibold mb-4 sm:mb-6">Área de Atuação</h4>
          <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm font-light">
            <li className="text-white/70">New Jersey</li>
            <li className="text-white/70">Nova York</li>
            <li className="text-white/70">Pensilvânia</li>
          </ul>
          <p className="text-[10px] sm:text-xs text-white/50 mt-5 sm:mt-6 italic">
            14 anos transformando ambientes com excelência.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 mt-10 sm:mt-14 lg:mt-16 pt-5 sm:pt-6 border-t border-white/10 text-[10px] sm:text-xs text-white/40 text-center font-light">
        © {year} New Creation Home Solutions. Todos os direitos reservados.
      </div>
    </footer>
  );
}

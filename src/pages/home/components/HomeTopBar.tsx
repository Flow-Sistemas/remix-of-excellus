import { Truck, MapPin, ShieldCheck } from "lucide-react";

const items = [
  { icon: Truck, label: "ORÇAMENTO SEM COMPROMISSO" },
  { icon: MapPin, label: "ATENDIMENTO EM NJ · NY · PA" },
  { icon: ShieldCheck, label: "14 ANOS DE EXPERIÊNCIA" },
];

export default function HomeTopBar() {
  return (
    <div className="fixed top-0 inset-x-0 z-[60] bg-[hsl(0_55%_28%)] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 h-9 flex items-center justify-center gap-4 sm:gap-8 lg:gap-10 text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.22em] font-medium overflow-hidden">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-1.5 whitespace-nowrap">
            <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 opacity-80 flex-shrink-0" strokeWidth={1.5} />
            <span className="hidden xs:inline sm:inline">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

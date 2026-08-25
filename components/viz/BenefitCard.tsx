import { FeatureIcon } from "@/components/viz/FeatureIcon";
import type { BenefitStat, BenefitTone } from "@/lib/content/types";

const toneClasses: Record<BenefitTone, { icon: string; footer: string; hover: string }> = {
  violet: {
    icon: "bg-violet-100 text-violet-600",
    footer: "text-violet-600",
    hover: "hover:border-violet-400 hover:shadow-violet-500/10",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-600",
    footer: "text-cyan-600",
    hover: "hover:border-cyan-400 hover:shadow-cyan-500/10",
  },
  emerald: {
    icon: "bg-emerald-100 text-emerald-600",
    footer: "text-emerald-600",
    hover: "hover:border-emerald-400 hover:shadow-emerald-500/10",
  },
  amber: {
    icon: "bg-amber-100 text-amber-600",
    footer: "text-amber-600",
    hover: "hover:border-amber-400 hover:shadow-amber-500/10",
  },
  teal: {
    icon: "bg-teal-100 text-teal-600",
    footer: "text-teal-600",
    hover: "hover:border-teal-400 hover:shadow-teal-500/10",
  },
  red: {
    icon: "bg-red-100 text-red-600",
    footer: "text-red-600",
    hover: "hover:border-red-400 hover:shadow-red-500/10",
  },
  indigo: {
    icon: "bg-indigo-100 text-indigo-600",
    footer: "text-indigo-600",
    hover: "hover:border-indigo-400 hover:shadow-indigo-500/10",
  },
  orange: {
    icon: "bg-orange-100 text-orange-600",
    footer: "text-orange-600",
    hover: "hover:border-orange-400 hover:shadow-orange-500/10",
  },
};

export function BenefitCard({ item }: { item: BenefitStat }) {
  const tone = toneClasses[item.tone];

  return (
    <div
      data-reveal
      className={`flex flex-col rounded-2xl border border-brand-border/70 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${tone.hover}`}
    >
      <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${tone.icon}`}>
        <FeatureIcon name={item.icon} size={22} />
      </span>
      <h3 className="mt-4 text-sm font-bold text-brand-fg">{item.label}</h3>
      <p className="mt-2 flex-1 text-xs leading-6 text-muted-foreground">{item.description}</p>
      <div className="mt-4 flex items-center gap-1.5 border-t border-brand-border/60 pt-3">
        <FeatureIcon name={item.footerIcon} size={14} className={tone.footer} />
        <span className={`text-[11px] font-bold ${tone.footer}`}>{item.footerLabel}</span>
      </div>
    </div>
  );
}

import { FeatureIcon } from "@/components/viz/FeatureIcon";
import { toneClasses } from "@/components/viz/tone";
import type { BenefitStat } from "@/lib/content/types";

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

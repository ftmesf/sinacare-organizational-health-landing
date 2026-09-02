import { FeatureIcon } from "@/components/viz/FeatureIcon";
import { toneClasses } from "@/components/viz/tone";
import type { BenefitStat } from "@/lib/content/types";

export function BenefitCard({ item }: { item: BenefitStat }) {
  const tone = toneClasses[item.tone];

  return (
    <div
      data-reveal
      className={`relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-brand-border/60 bg-gradient-to-br ${tone.wash} to-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${tone.hover}`}
    >
      <div className="flex items-center gap-3">
        <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl shadow-md ${tone.solid}`}>
          <FeatureIcon name={item.icon} size={19} />
        </span>
        <h3 className="text-sm font-bold leading-6 text-brand-fg">{item.label}</h3>
      </div>
      <p className="flex-1 text-xs leading-6 text-brand-fg/70">{item.description}</p>
      <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${tone.badge}`}>
        <FeatureIcon name={item.footerIcon} size={13} />
        {item.footerLabel}
      </span>
    </div>
  );
}

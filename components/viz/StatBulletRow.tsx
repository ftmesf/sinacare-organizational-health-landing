import { FeatureIcon } from "@/components/viz/FeatureIcon";
import type { BenefitStat } from "@/lib/content/types";

export function StatBulletRow({ item }: { item: BenefitStat }) {
  return (
    <li
      data-reveal
      className="flex items-center gap-3 rounded-xl border border-brand-border/70 bg-white px-4 py-3.5 shadow-sm shadow-brand-primary/5"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-bg-alt text-brand-primary">
        <FeatureIcon name={item.icon} size={20} />
      </span>
      <span className="text-sm font-medium text-brand-fg">{item.label}</span>
    </li>
  );
}

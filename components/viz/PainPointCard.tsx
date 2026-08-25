import { FeatureIcon } from "@/components/viz/FeatureIcon";
import { toneClasses } from "@/components/viz/tone";
import type { PainPoint } from "@/lib/content/types";

export function PainPointCard({ item }: { item: PainPoint }) {
  const tone = toneClasses[item.tone];

  return (
    <div
      data-reveal
      className={`flex flex-col rounded-2xl border border-brand-border/70 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${tone.hover}`}
    >
      <div className="flex items-center justify-between">
        <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${tone.icon}`}>
          <FeatureIcon name={item.icon} size={22} />
        </span>
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${tone.badge}`}>
          {item.badge}
        </span>
      </div>
      <h3 className="mt-4 text-sm font-bold text-brand-fg">{item.title}</h3>
      <ul className="mt-2 flex-1 space-y-2">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-xs leading-6 text-muted-foreground">
            <span className={`mt-2 size-1.5 shrink-0 rounded-full ${tone.bullet}`} />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

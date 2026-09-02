import { FeatureIcon } from "@/components/viz/FeatureIcon";
import { toneClasses } from "@/components/viz/tone";
import type { BenefitTone, IconName } from "@/lib/content/types";

export function TonedFeatureCard({
  item,
  tone,
}: {
  item: { icon: IconName; title: string; bullets: string[] };
  tone: BenefitTone;
}) {
  const toneClass = toneClasses[tone];

  return (
    <div
      data-reveal
      className={`relative flex flex-col overflow-hidden rounded-3xl border border-brand-border/60 bg-gradient-to-b ${toneClass.wash} to-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${toneClass.hover}`}
    >
      <span aria-hidden className={`absolute inset-x-0 top-0 h-1.5 ${toneClass.bullet}`} />
      <span className={`flex size-14 items-center justify-center rounded-2xl shadow-lg ${toneClass.solid}`}>
        <FeatureIcon name={item.icon} size={26} />
      </span>
      <h3 className="mt-5 text-lg font-bold text-brand-fg">{item.title}</h3>
      <ul className="mt-3 space-y-2">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm leading-6 text-brand-fg/70">
            <span className={`mt-2.5 size-1.5 shrink-0 rounded-full ${toneClass.bullet}`} />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

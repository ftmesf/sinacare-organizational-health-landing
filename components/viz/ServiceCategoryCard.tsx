import { FeatureIcon } from "@/components/viz/FeatureIcon";
import { toneClasses } from "@/components/viz/tone";
import type { ServiceCategoryItem } from "@/lib/content/types";

export function ServiceCategoryCard({ item }: { item: ServiceCategoryItem }) {
  const tone = toneClasses[item.tone];

  return (
    <div
      data-reveal
      className="group relative z-10 flex flex-1 flex-col items-center gap-3 text-center"
    >
      <span
        className={`flex size-16 shrink-0 items-center justify-center rounded-2xl shadow-lg ring-8 ring-brand-bg-alt transition-transform duration-300 group-hover:scale-110 ${tone.solid}`}
      >
        <FeatureIcon name={item.icon} size={28} />
      </span>
      <h3 className="text-base font-bold text-brand-fg">{item.title}</h3>
      <ul className="w-full max-w-56 space-y-1.5 text-start">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm leading-6 text-brand-fg/70">
            <span className={`mt-2 size-1.5 shrink-0 rounded-full ${tone.bullet}`} />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

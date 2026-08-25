import { FeatureIcon } from "@/components/viz/FeatureIcon";
import { toneClasses } from "@/components/viz/tone";
import type { ServiceCategoryItem } from "@/lib/content/types";

const ringTone: Record<string, string> = {
  violet: "bg-violet-400",
  cyan: "bg-cyan-400",
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
  teal: "bg-teal-400",
  red: "bg-red-400",
  indigo: "bg-indigo-400",
  orange: "bg-orange-400",
};

export function ServiceCategoryCard({
  item,
  index,
}: {
  item: ServiceCategoryItem;
  index: number;
}) {
  const tone = toneClasses[item.tone];
  const ring = ringTone[item.tone];
  const number = String(index + 1).padStart(2, "0").replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

  return (
    <div
      data-reveal
      className={`group relative flex flex-col items-center overflow-hidden rounded-2xl border border-brand-border/70 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${tone.hover}`}
    >
      <span
        className="pointer-events-none absolute -top-3 left-3 select-none text-6xl font-black text-brand-fg/[0.04] transition-colors duration-300 group-hover:text-brand-fg/[0.07]"
        aria-hidden
      >
        {number}
      </span>

      <span className="relative mb-1 flex size-16 items-center justify-center">
        <span className={`absolute inset-0 rounded-2xl ${ring} animate-pulse-ring`} />
        <span
          className={`relative flex size-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${tone.icon} animate-icon-float`}
        >
          <FeatureIcon name={item.icon} size={26} />
        </span>
      </span>

      <h3 className="relative mt-3 text-base font-bold text-brand-fg">{item.title}</h3>
      <p className="relative mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
    </div>
  );
}

import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { FeatureIcon } from "@/components/viz/FeatureIcon";
import { toneClasses } from "@/components/viz/tone";
import type { PainPoint } from "@/lib/content/types";

export function PainPointCard({ item }: { item: PainPoint }) {
  const tone = toneClasses[item.tone];
  const [situation, consequence] = item.bullets;

  return (
    <div
      data-reveal
      className={`relative flex gap-5 overflow-hidden rounded-3xl border border-brand-border/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${tone.hover}`}
    >
      <span className={`absolute inset-y-0 right-0 w-1.5 ${tone.bullet}`} aria-hidden />
      <span className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${tone.icon}`}>
        <FeatureIcon name={item.icon} size={26} />
      </span>
      <div className="min-w-0">
        <span className={`text-[11px] font-bold uppercase tracking-wide ${tone.footer}`}>
          {item.badge}
        </span>
        <h3 className="mt-1.5 text-base font-bold text-brand-fg">{item.title}</h3>
        <p className="mt-2 text-sm leading-7 text-brand-fg/70">{situation}</p>
        {consequence ? (
          <p className={`mt-3 flex items-start gap-2 text-sm font-semibold leading-7 ${tone.footer}`}>
            <ArrowLeft size={16} weight="bold" className="mt-1 shrink-0" />
            <span>{consequence}</span>
          </p>
        ) : null}
      </div>
    </div>
  );
}

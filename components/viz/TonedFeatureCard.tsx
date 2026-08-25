import { Card, CardContent } from "@/components/ui/card";
import { FeatureIcon } from "@/components/viz/FeatureIcon";
import { toneClasses } from "@/components/viz/tone";
import type { BenefitTone, FeatureCard as FeatureCardData } from "@/lib/content/types";

export function TonedFeatureCard({
  item,
  tone,
}: {
  item: FeatureCardData;
  tone: BenefitTone;
}) {
  const toneClass = toneClasses[tone];

  return (
    <Card
      data-reveal
      className={`rounded-2xl border border-brand-border/70 ring-0 shadow-none transition hover:-translate-y-1 hover:shadow-lg ${toneClass.hover}`}
    >
      <CardContent className="flex flex-col">
        <span className={`flex size-11 items-center justify-center rounded-2xl ${toneClass.icon}`}>
          <FeatureIcon name={item.icon} size={22} />
        </span>
        <h3 className="mt-4 text-base font-bold text-brand-fg">{item.title}</h3>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  );
}

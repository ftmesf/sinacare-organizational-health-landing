import { Card, CardContent } from "@/components/ui/card";
import { FeatureIcon } from "@/components/viz/FeatureIcon";
import type { FeatureCard as FeatureCardData } from "@/lib/content/types";

type Tone = "primary" | "risk";

const toneChip: Record<Tone, string> = {
  primary:
    "bg-gradient-to-br from-brand-primary/12 to-brand-secondary/12 text-brand-primary",
  risk: "bg-brand-risk-bg text-brand-risk",
};

export function FeatureCard({
  item,
  tone = "primary",
  align = "start",
  compact = false,
}: {
  item: FeatureCardData;
  tone?: Tone;
  align?: "start" | "center";
  compact?: boolean;
}) {
  return (
    <Card
      data-reveal
      className={`rounded-2xl border border-brand-border/70 ring-0 shadow-none transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/10 ${
        compact ? "[--card-spacing:--spacing(5)]" : "[--card-spacing:--spacing(6)]"
      }`}
    >
      <CardContent
        className={`flex flex-col ${align === "center" ? "items-center text-center" : ""}`}
      >
        <span
          className={`flex size-11 items-center justify-center rounded-2xl ${toneChip[tone]}`}
        >
          <FeatureIcon name={item.icon} size={22} />
        </span>
        <h3
          className={`mt-4 font-bold text-brand-fg ${compact ? "text-sm" : "text-base"}`}
        >
          {item.title}
        </h3>
        <p
          className={`mt-2 leading-7 text-muted-foreground ${
            compact ? "text-xs leading-6" : "text-sm"
          }`}
        >
          {item.description}
        </p>
      </CardContent>
    </Card>
  );
}

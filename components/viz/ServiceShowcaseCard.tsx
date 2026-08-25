import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FeatureIcon } from "@/components/viz/FeatureIcon";
import type { FeatureCard as FeatureCardData } from "@/lib/content/types";

export function ServiceShowcaseCard({
  item,
  iconClassName,
  children,
}: {
  item: FeatureCardData;
  iconClassName: string;
  children: ReactNode;
}) {
  return (
    <Card
      data-reveal
      className="rounded-2xl border border-brand-border/70 ring-0 shadow-none transition [--card-spacing:--spacing(6)] hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/10"
    >
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <span
            className={`flex size-14 shrink-0 items-center justify-center rounded-2xl text-white ${iconClassName}`}
          >
            <FeatureIcon name={item.icon} size={28} />
          </span>
          <h3 className="flex-1 text-xl font-extrabold text-brand-fg">{item.title}</h3>
        </div>
        <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
        {children}
      </CardContent>
    </Card>
  );
}

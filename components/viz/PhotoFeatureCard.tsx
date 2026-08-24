import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { FeatureCard as FeatureCardData } from "@/lib/content/types";

export function PhotoFeatureCard({
  item,
  image,
}: {
  item: FeatureCardData;
  image: { src: string; alt: string };
}) {
  return (
    <Card
      data-reveal
      className="overflow-hidden rounded-2xl border border-brand-border/70 py-0 ring-0 shadow-none transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/10 [--card-spacing:--spacing(5)]"
    >
      <div className="relative aspect-[4/3] w-full bg-brand-bg-alt">
        <Image src={image.src} alt={image.alt} fill className="object-cover" />
      </div>
      <CardContent className="pt-4 pb-5">
        <h3 className="text-base font-bold text-brand-fg">{item.title}</h3>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  );
}

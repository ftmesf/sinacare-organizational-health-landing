import { TonedFeatureCard } from "@/components/viz/TonedFeatureCard";
import { BrandRings } from "@/components/viz/BrandRings";
import { Reveal } from "@/components/Reveal";
import type { BenefitTone, IconName } from "@/lib/content/types";

const points: { icon: IconName; tone: BenefitTone; title: string; bullets: string[] }[] = [
  {
    icon: "Stethoscope",
    tone: "cyan",
    title: "نظارت تخصصی بر سلامت شغلی",
    bullets: [
      "معاینات ادواری شغلی",
      "غربالگری‌های تخصصی",
      "تشخیص زودهنگام بیماری‌های ناشی از کار",
      "پیگیری منظم و مستند برای هر پرسنل",
    ],
  },
  {
    icon: "Scales",
    tone: "violet",
    title: "ریشه در الزام قانونی",
    bullets: [
      "الزام قانون کار برای کارفرما",
      "معاینات دوره‌ای شغلی مستند",
      "نگهداری سوابق پزشکی پرسنل",
      "دیجیتال، قابل‌پیگیری و قابل‌استناد",
    ],
  },
  {
    icon: "Database",
    tone: "emerald",
    title: "یک پرونده، سه ذی‌نفع",
    bullets: [
      "فرد (کارمند)",
      "پزشک طب کار",
      "مدیر سازمان",
      "تصمیم‌های مدیریتی دقیق‌تر و مبتنی بر داده",
    ],
  },
];

export function WhatIsOccupationalHealth() {
  return (
    <section id="what-is" className="section-alt relative overflow-hidden py-16 sm:py-24">
      <BrandRings className="pointer-events-none absolute -top-32 -left-40 -z-0 h-[480px] w-[480px] text-brand-primary opacity-[0.07]" />
      <BrandRings className="pointer-events-none absolute -bottom-40 -right-32 -z-0 h-[420px] w-[420px] text-brand-accent opacity-[0.07]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-fg sm:text-3xl">
            سلامت سازمانی در سیناکر، یعنی طب‌کار دیجیتال
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            نظارت تخصصی و مستند بر سلامت شغلی کارکنان: معاینات ادواری،
            تشخیص زودهنگام بیماری‌های ناشی از کار و پرونده‌ای قابل‌استناد —{" "}
            <strong className="text-brand-fg">نه</strong> یک برنامه
            فرهنگ‌سازمانی یا رضایت‌سنجی داخلی.
          </p>
        </div>

        <Reveal className="mt-12 grid gap-6 sm:grid-cols-3">
          {points.map((point) => (
            <TonedFeatureCard key={point.title} item={point} tone={point.tone} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

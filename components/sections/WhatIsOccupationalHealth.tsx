import { TonedFeatureCard } from "@/components/viz/TonedFeatureCard";
import { Reveal } from "@/components/Reveal";
import type { BenefitTone, FeatureCard as FeatureCardData } from "@/lib/content/types";

const points: (FeatureCardData & { tone: BenefitTone })[] = [
  {
    icon: "Stethoscope",
    tone: "cyan",
    title: "نظارت تخصصی بر سلامت شغلی",
    description:
      "معاینات ادواری، غربالگری‌های تخصصی و تشخیص زودهنگام بیماری‌های ناشی از کار — با پیگیری منظم و مستند برای هر پرسنل.",
  },
  {
    icon: "Scales",
    tone: "indigo",
    title: "ریشه در الزام قانونی",
    description:
      "بر اساس قانون کار، انجام معاینات دوره‌ای شغلی و نگهداری سوابق پزشکی پرسنل برای کارفرما الزامی است. سیناکر همین وظیفه قانونی را دیجیتال، قابل‌پیگیری و قابل‌استناد می‌کند.",
  },
  {
    icon: "Database",
    tone: "emerald",
    title: "یک پرونده، سه ذی‌نفع",
    description:
      "پرونده دیجیتال سلامت، فرد، پزشک طب کار و مدیر سازمان را به یک منبع داده واحد متصل می‌کند تا تصمیم‌های مدیریتی درباره سلامت نیروی کار، دقیق‌تر و مبتنی بر داده باشد.",
  },
];

export function WhatIsOccupationalHealth() {
  return (
    <section id="what-is" className="section-alt py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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

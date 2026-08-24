import { FeatureCard } from "@/components/viz/FeatureCard";
import { Reveal } from "@/components/Reveal";
import type { FeatureCard as FeatureCardData } from "@/lib/content/types";

const points: FeatureCardData[] = [
  {
    icon: "Stethoscope",
    title: "طب کار، نه فرهنگ‌سازمانی",
    description:
      "«سلامت سازمانی» در سیناکر به معنای طب کار دیجیتال است: نظارت بر سلامت شغلی، معاینات ادواری و تشخیص زودهنگام بیماری‌های ناشی از کار. این مفهوم را نباید با مباحث مدیریتیِ فرهنگ سازمانی یا رهبری اشتباه گرفت.",
  },
  {
    icon: "Scales",
    title: "ریشه در الزام قانونی",
    description:
      "بر اساس قانون کار، انجام معاینات دوره‌ای شغلی و نگهداری سوابق پزشکی پرسنل برای کارفرما الزامی است. سیناکر همین وظیفه قانونی را دیجیتال، قابل‌پیگیری و قابل‌استناد می‌کند.",
  },
  {
    icon: "Database",
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
            سلامت سازمانی از نگاه سیناکر یعنی چه؟
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            پیش از هر چیز، تعریف را روشن می‌کنیم: آنچه اینجا «سلامت سازمانی»
            نامیده می‌شود، حوزه تخصصی <strong className="text-brand-fg">طب کار</strong>{" "}
            است، نه یک برنامه فرهنگ‌سازی یا رضایت‌سنجی داخلی.
          </p>
        </div>

        <Reveal className="mt-12 grid gap-6 sm:grid-cols-3">
          {points.map((point) => (
            <FeatureCard key={point.title} item={point} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

import { painPoints } from "@/lib/content/services";
import { FeatureCard } from "@/components/viz/FeatureCard";
import { Reveal } from "@/components/Reveal";

export function PainPoints() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-fg sm:text-3xl">
            چالش‌هایی که واحد HSE و منابع انسانی هر روز با آن‌ها روبه‌رو هستند
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            بدون یک پرونده دیجیتال یکپارچه، مدیریت سلامت شغلی به کاری پرریسک و
            وقت‌گیر تبدیل می‌شود.
          </p>
        </div>

        <Reveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item) => (
            <FeatureCard key={item.title} item={item} tone="risk" />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

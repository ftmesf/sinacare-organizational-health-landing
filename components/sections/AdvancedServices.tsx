import { advancedServices } from "@/lib/content/services";
import { FeatureCard } from "@/components/viz/FeatureCard";
import { PhotoFeatureCard } from "@/components/viz/PhotoFeatureCard";
import { Reveal } from "@/components/Reveal";
import type { IconName } from "@/lib/content/types";

const imageByIcon: Partial<Record<IconName, string>> = {
  Scan: "/images/service-chronic-risk.jpg",
  Stethoscope: "/images/service-medical-care.jpg",
};

export function AdvancedServices() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wide text-brand-primary">
            خدمات اختصاصی
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-brand-fg sm:text-3xl">
            مدیریت پیشگیرانه ریسک سازمانی
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            لایه‌ای عمیق‌تر از تحلیل و مراقبت، برای سازمان‌هایی که می‌خواهند
            یک قدم جلوتر از بیماری حرکت کنند.
          </p>
        </div>

        <Reveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advancedServices.map((item) => {
            const image = imageByIcon[item.icon];
            return image ? (
              <PhotoFeatureCard key={item.title} item={item} image={{ src: image, alt: item.title }} />
            ) : (
              <FeatureCard key={item.title} item={item} />
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

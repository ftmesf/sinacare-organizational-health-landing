import { serviceCategories } from "@/lib/content/services";
import { FeatureCard } from "@/components/viz/FeatureCard";
import { Reveal } from "@/components/Reveal";

export function ServiceCategories() {
  return (
    <section id="service-categories" className="section-alt py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wide text-brand-primary">
            نقشه خدمات سیناکر
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-brand-fg sm:text-3xl">
            سیناکر چهار دسته خدمت ارائه می‌دهد
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            از زیرساخت نرم‌افزاری تا اپلیکیشن فردی، خدمات تخصصی و تجهیزات
            فیزیکی؛ در ادامه هر دسته را با جزئیات می‌بینید.
          </p>
        </div>

        <Reveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((item) => (
            <FeatureCard key={item.title} item={item} align="center" />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

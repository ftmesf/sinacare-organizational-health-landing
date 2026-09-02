import { serviceCategories } from "@/lib/content/services";
import { ServiceCategoryCard } from "@/components/viz/ServiceCategoryCard";
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
          <span
            aria-hidden
            className="brand-gradient-bg animate-flow-line mx-auto mt-4 block h-1 w-16 rounded-full"
          />
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            از زیرساخت نرم‌افزاری تا اپلیکیشن فردی، خدمات تخصصی و تجهیزات
            فیزیکی؛ در ادامه هر دسته را با جزئیات می‌بینید.
          </p>
        </div>

        <Reveal className="relative mt-16 flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-4">
          <span
            aria-hidden
            className="absolute top-8 right-1/2 bottom-8 w-px -translate-x-1/2 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent opacity-25 sm:right-8 sm:bottom-auto sm:left-8 sm:h-px sm:w-auto sm:translate-x-0 sm:bg-gradient-to-l"
          />
          {serviceCategories.map((item) => (
            <ServiceCategoryCard key={item.title} item={item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

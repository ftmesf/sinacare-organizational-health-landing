import { physicalKit } from "@/lib/content/services";
import { PhotoFeatureCard } from "@/components/viz/PhotoFeatureCard";
import { Reveal } from "@/components/Reveal";
import type { IconName } from "@/lib/content/types";

const imageByIcon: Partial<Record<IconName, string>> = {
  MonitorPlay: "/images/kit-station.jpg",
  Drop: "/images/kit-glucose.jpg",
  Gauge: "/images/kit-blood-pressure.jpg",
  PersonSimpleRun: "/images/kit-body-composition.jpg",
};

export function PhysicalKit() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-fg sm:text-3xl">
            امکانات فیزیکی سیناکر برای پایش سلامت در محل سازمان
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            نرم‌افزار با تجهیزات میدانی همراه می‌شود تا داده واقعی، مستقیماً
            و بدون واسطه وارد پرونده دیجیتال هر پرسنل شود.
          </p>
        </div>

        <Reveal className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {physicalKit.map((item) => (
            <PhotoFeatureCard
              key={item.title}
              item={item}
              image={{ src: imageByIcon[item.icon]!, alt: item.title }}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

import { coreServices } from "@/lib/content/services";
import { PhotoFeatureCard } from "@/components/viz/PhotoFeatureCard";
import { Reveal } from "@/components/Reveal";
import type { IconName } from "@/lib/content/types";

const imageByIcon: Partial<Record<IconName, string>> = {
  HeartStraight: "/images/service-health-panel.png",
  ChartLineUp: "/images/service-bi.png",
  FileText: "/images/service-ocr.png",
  Database: "/images/service-records.png",
};

export function CoreServices() {
  return (
    <section id="services" className="section-alt py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wide text-brand-primary">
            خدمات پایه
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-brand-fg sm:text-3xl">
            زیرساخت نرم‌افزار طب کار سازمان شما
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            هر کارت زیر پاسخ مستقیم به یکی از چالش‌های بالاست؛ از پرونده
            دیجیتال تا تحلیل هوشمند و تجمیع خودکار سوابق.
          </p>
        </div>

        <Reveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((item) => (
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

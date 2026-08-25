import { coreServices } from "@/lib/content/services";
import { ServiceShowcaseCard } from "@/components/viz/ServiceShowcaseCard";
import {
  BiWidget,
  HealthPanelWidget,
  OcrWidget,
  RecordsWidget,
} from "@/components/viz/ServiceWidgets";
import { Reveal } from "@/components/Reveal";
import type { IconName } from "@/lib/content/types";
import type { ReactNode } from "react";

const iconClassByIcon: Partial<Record<IconName, string>> = {
  HeartStraight: "bg-[#0b3a57]",
  ChartLineUp: "bg-blue-600",
  FileText: "bg-emerald-500",
  Database: "bg-violet-600",
};

const widgetByIcon: Partial<Record<IconName, ReactNode>> = {
  HeartStraight: <HealthPanelWidget />,
  ChartLineUp: <BiWidget />,
  FileText: <OcrWidget />,
  Database: <RecordsWidget />,
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

        <Reveal className="mt-12 grid gap-6 sm:grid-cols-2">
          {coreServices.map((item) => (
            <ServiceShowcaseCard
              key={item.title}
              item={item}
              iconClassName={iconClassByIcon[item.icon]!}
            >
              {widgetByIcon[item.icon]}
            </ServiceShowcaseCard>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

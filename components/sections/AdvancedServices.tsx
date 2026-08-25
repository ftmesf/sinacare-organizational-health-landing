import { advancedServices } from "@/lib/content/services";
import { ServiceShowcaseCard } from "@/components/viz/ServiceShowcaseCard";
import {
  ChallengeWidget,
  ChronicRiskWidget,
  MedicalCareWidget,
  ReportsWidget,
} from "@/components/viz/ServiceWidgets";
import { Reveal } from "@/components/Reveal";
import type { IconName } from "@/lib/content/types";
import type { ReactNode } from "react";

const iconClassByIcon: Partial<Record<IconName, string>> = {
  ClipboardText: "bg-orange-600",
  Scan: "bg-brand-risk",
  Trophy: "bg-amber-500",
  Stethoscope: "bg-cyan-700",
};

const widgetByIcon: Partial<Record<IconName, ReactNode>> = {
  ClipboardText: <ReportsWidget />,
  Scan: <ChronicRiskWidget />,
  Trophy: <ChallengeWidget />,
  Stethoscope: <MedicalCareWidget />,
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

        <Reveal className="mt-12 grid gap-6 sm:grid-cols-2">
          {advancedServices.map((item) => (
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

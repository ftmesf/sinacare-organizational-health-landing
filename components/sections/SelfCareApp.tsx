import { selfCareApp } from "@/lib/content/services";
import { FeatureIcon } from "@/components/viz/FeatureIcon";
import { Badge } from "@/components/ui/badge";
import { PhoneMockup } from "@/components/viz/PhoneMockup";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export function SelfCareApp() {
  return (
    <section className="section-alt py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div data-reveal>
            <span className="text-xs font-bold uppercase tracking-wide text-brand-primary">
              خدمات فردی
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-brand-fg sm:text-3xl">
              خودمراقبتی فردی، رایگان برای هر کارمند
            </h2>

            <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-brand-border/70 bg-white p-6 text-center sm:flex-row sm:items-start sm:text-right">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary/12 to-brand-secondary/12 text-brand-primary">
                <FeatureIcon name={selfCareApp.icon} size={28} />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                  <h3 className="text-base font-bold text-brand-fg">{selfCareApp.title}</h3>
                  <Badge className="h-auto border-0 bg-brand-accent/15 px-2 py-0.5 text-[11px] font-bold text-brand-accent">
                    رایگان
                  </Badge>
                </div>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {selfCareApp.description}
                </p>
                <a
                  href="#contact"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary transition hover:gap-2.5"
                >
                  فعال‌سازی اپلیکیشن برای سازمانم
                  <ArrowLeft size={16} weight="bold" />
                </a>
              </div>
            </div>
          </div>

          <div data-reveal className="flex items-center justify-center gap-0">
            <PhoneMockup
              src="/images/app-reminder-screenshot.jpg"
              alt="یادآور ثبت داده سلامت در اپلیکیشن سیناکر"
              className="z-0 -mr-8 hidden rotate-[-8deg] scale-90 opacity-90 sm:block"
            />
            <PhoneMockup
              src="/images/app-home-screenshot.jpg"
              alt="نمای صفحه خانه اپلیکیشن سیناکر"
              className="z-10"
            />
            <PhoneMockup
              src="/images/app-glucose-screenshot.jpg"
              alt="ثبت قندخون در اپلیکیشن سیناکر"
              className="z-0 -ml-8 hidden rotate-[8deg] scale-90 opacity-90 sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

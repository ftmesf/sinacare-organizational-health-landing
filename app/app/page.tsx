import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PhoneMockup } from "@/components/viz/PhoneMockup";
import { FeatureIcon } from "@/components/viz/FeatureIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { selfCareApp } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "اپلیکیشن خودمراقبتی سیناکر",
  description:
    "اپلیکیشن موبایل رایگان سیناکر برای ثبت فشار خون، قندخون و وزن؛ با یادآور دوره‌ای و نمودار روند سلامت فردی، هماهنگ با پرونده دیجیتال طب کار سازمان شما.",
};

const introParagraph =
  "اپلیکیشن خودمراقبتی سیناکر یک اپلیکیشن موبایل رایگان است که هر کارمند سازمان‌های مشترک می‌تواند نصب کند. ثبت فشار خون، قندخون و وزن در آن کمتر از یک دقیقه طول می‌کشد و هر داده ثبت‌شده مستقیماً وارد پرونده دیجیتال طب کار همان فرد می‌شود.";

const highlights = [
  "ثبت سریع فشار خون، قندخون و وزن با چند لمس",
  "یادآور هوشمند برای ثبت دوره‌ای داده‌های سلامت",
  "نمودار روند تغییرات سلامت فردی در طول زمان",
  "همگام با پرونده دیجیتال طب‌کار سازمان شما",
];

export default function AppPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wide text-brand-primary">
                خدمات فردی
              </span>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-brand-fg sm:text-4xl">
                {selfCareApp.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                {introParagraph}
              </p>

              <ul className="mt-8 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-brand-fg/80">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                      <FeatureIcon name={selfCareApp.icon} size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Badge className="h-auto border-0 bg-brand-accent/15 px-2.5 py-1 text-xs font-bold text-brand-accent">
                  رایگان برای کارکنان سازمان‌های مشترک
                </Badge>
              </div>

              <div className="mt-6">
                <Button asChild size="lg" className="h-11 px-6 text-base">
                  <Link href="/#contact">فعال‌سازی اپلیکیشن برای سازمانم</Link>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center gap-0">
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
        </section>
      </main>
      <Footer />
    </>
  );
}

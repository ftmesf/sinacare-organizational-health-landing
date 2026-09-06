import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/HeroVisual";
import { BrandRings } from "@/components/viz/BrandRings";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <BrandRings className="pointer-events-none absolute -top-24 -right-32 -z-10 h-[520px] w-[520px] text-brand-primary opacity-[0.06]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight text-brand-fg sm:text-4xl lg:text-5xl">
            سیناکر؛ پلتفرم جامع سلامت پرسنل، از طب کار تا خودمراقبتی هوشمند
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            پرونده دیجیتال طب کار، پایش سلامت شغلی و تحلیل هوشمند داده‌های
            سلامت کارکنان را در یک سامانه یکپارچه برای سازمان شما فراهم
            می‌کند.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-11 px-6 text-base">
              <a href="#contact">درخواست دموی سازمانی</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 px-6 text-base">
              <a href="#pricing">مشاهده طرح‌ها</a>
            </Button>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

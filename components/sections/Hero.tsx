import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroVisual } from "@/components/HeroVisual";
import { BrandRings } from "@/components/viz/BrandRings";
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <BrandRings className="pointer-events-none absolute -top-24 -right-32 -z-10 h-[520px] w-[520px] text-brand-primary opacity-[0.06]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <Badge
            variant="outline"
            className="h-auto gap-1.5 rounded-full border-brand-border bg-brand-bg-alt px-3 py-1 text-xs font-semibold text-brand-primary"
          >
            <ShieldCheck size={14} weight="bold" />
            نرم‌افزار تخصصی طب کار
          </Badge>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight text-brand-fg sm:text-4xl lg:text-5xl">
            سیناکر، نرم‌افزار جامع طب کار و مدیریت سلامت سازمانی
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            سامانه‌ای هوشمند برای مدیریت یکپارچه سلامت کارکنان؛ با ثبت، پایش و
            تحلیل داده‌های سلامت به ارتقای سطح سلامت نیروی انسانی و بهبود
            بهره‌وری سازمان کمک می‌کند و پرونده‌ای دیجیتال، قابل‌استناد و
            امن از سوابق طب‌کار هر پرسنل می‌سازد.
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

import { benefits } from "@/lib/content/benefits";
import { BenefitCard } from "@/components/viz/BenefitCard";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";

export function Benefits() {
  return (
    <section id="benefits" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="h-auto gap-1.5 rounded-full border-brand-border bg-brand-bg-alt px-3 py-1 text-xs font-semibold text-brand-primary"
          >
            <Sparkle size={14} weight="bold" />
            ارزش افزوده سازمانی
          </Badge>
          <h2 className="mt-3 text-2xl font-extrabold text-brand-fg sm:text-3xl">
            مزایای سوابق دیجیتال در طب‌کار
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            دیجیتالی‌شدن پرونده طب کار فقط صرفه‌جویی در کاغذ نیست؛ مستقیماً
            روی سرعت تشخیص، امنیت داده و اعتبار حقوقی سوابق سازمان اثر
            می‌گذارد.
          </p>
        </div>

        <Reveal className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <BenefitCard key={item.label} item={item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

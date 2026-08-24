import { benefits } from "@/lib/content/benefits";
import { StatBulletRow } from "@/components/viz/StatBulletRow";
import { Reveal } from "@/components/Reveal";

export function Benefits() {
  return (
    <section id="benefits" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-fg sm:text-3xl">
            مزایای سوابق دیجیتال در طب‌کار
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            دیجیتالی‌شدن پرونده طب کار فقط صرفه‌جویی در کاغذ نیست؛ مستقیماً
            روی سرعت تشخیص، امنیت داده و اعتبار حقوقی سوابق سازمان اثر
            می‌گذارد.
          </p>
        </div>

        <Reveal className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <StatBulletRow key={item.label} item={item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

import { BrandRings } from "@/components/viz/BrandRings";
import { LeadForm } from "@/components/sections/LeadForm";

export function CtaBar() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="brand-gradient-bg relative overflow-hidden rounded-3xl px-6 py-12 text-center shadow-xl shadow-brand-primary/30 sm:px-12">
          <BrandRings className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-96 w-96 text-white opacity-15" />
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            مدیریت سلامت شغلی سازمان خود را از امروز دیجیتال کنید
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
            یک دموی ۱۵ دقیقه‌ای رایگان، کافی‌ست تا ببینید سیناکر چطور پرونده
            طب کار سازمان شما را از کاغذ به داده تبدیل می‌کند.
          </p>

          <LeadForm />
        </div>
      </div>
    </section>
  );
}

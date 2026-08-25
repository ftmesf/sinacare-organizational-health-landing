import Image from "next/image";
import { trustedByPartners } from "@/lib/content/services";
import { Reveal } from "@/components/Reveal";

export function TrustedBy() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold text-muted-foreground">
          همکاری با سازمان‌های پیشرو در سلامت سازمانی
        </p>

        <Reveal className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {trustedByPartners.map((partner) => (
            <div
              key={partner.name}
              data-reveal
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-brand-border bg-white px-3 py-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-brand-primary/40 hover:shadow-md"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={96}
                height={96}
                className="h-20 w-20 object-contain mix-blend-multiply"
              />
              <span className="text-xs font-medium text-muted-foreground">{partner.name}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

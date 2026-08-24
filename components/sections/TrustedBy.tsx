import { Buildings } from "@phosphor-icons/react/dist/ssr";
import { trustedByPlaceholders } from "@/lib/content/services";
import { Reveal } from "@/components/Reveal";

// TODO: replace placeholder tiles with real partner logos once provided by Sinacare.
export function TrustedBy() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold text-muted-foreground">
          همکاری با سازمان‌های پیشرو در سلامت سازمانی
        </p>

        <Reveal className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {trustedByPlaceholders.map((name) => (
            <div
              key={name}
              data-reveal
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-brand-border bg-brand-bg-alt/50 px-3 py-5 text-center transition hover:border-brand-primary/40 hover:bg-brand-bg-alt"
            >
              <Buildings size={22} weight="duotone" className="text-brand-primary/60" />
              <span className="text-xs font-medium text-muted-foreground">{name}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

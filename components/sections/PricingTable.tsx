import { Check, X } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { pricingTiers, featureMatrix } from "@/lib/content/pricing";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function PricingTable() {
  return (
    <section id="pricing" className="section-alt py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-fg sm:text-3xl">
            چه طرحی برای سازمان شما مناسب است؟
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            از پرونده دیجیتال پایه تا راهکار کامل با فالوآپ پزشکی و تحلیل
            هوشمند؛ متناسب با اندازه و نیاز سازمان شما.
          </p>
        </div>

        <Reveal className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <div
              key={tier.key}
              data-reveal
              className={cn(
                "flex flex-col rounded-2xl border p-6",
                tier.highlighted
                  ? "glass-panel border-brand-primary/40 shadow-xl shadow-brand-primary/15"
                  : "border-brand-border/70 bg-white",
              )}
            >
              {tier.highlighted && (
                <Badge className="brand-gradient-bg mb-3 h-auto w-fit border-0 px-2.5 py-1 text-[11px] font-bold text-white">
                  پیشنهادی
                </Badge>
              )}
              <h3 className="text-lg font-extrabold text-brand-fg">طرح {tier.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{tier.tagline}</p>
              <Button asChild className="mt-6" variant={tier.highlighted ? "default" : "outline"}>
                <a href="#contact">تماس برای قیمت‌گذاری</a>
              </Button>
            </div>
          ))}
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-2xl border border-brand-border/70 bg-white">
          <Table>
            <TableHeader>
              <TableRow className="bg-brand-bg-alt/60 hover:bg-brand-bg-alt/60">
                <TableHead scope="col" className="min-w-56 py-4 ps-5 text-sm font-bold text-brand-fg">
                  امکانات ارائه‌شده
                </TableHead>
                {pricingTiers.map((tier) => (
                  <TableHead
                    key={tier.key}
                    scope="col"
                    className="py-4 text-center text-sm font-bold text-brand-fg"
                  >
                    {tier.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {featureMatrix.map((row) => (
                <TableRow key={row.feature}>
                  <TableCell className="whitespace-normal py-3 ps-5 text-sm text-brand-fg">
                    {row.feature}
                  </TableCell>
                  {row.availability.map((included, i) => (
                    <TableCell key={i} className="py-3 text-center">
                      {included ? (
                        <span className="inline-flex items-center gap-1 text-brand-accent">
                          <Check size={18} weight="bold" />
                          <span className="sr-only">شامل می‌شود</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-muted-foreground/50">
                          <X size={16} weight="bold" />
                          <span className="sr-only">شامل نمی‌شود</span>
                        </span>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}

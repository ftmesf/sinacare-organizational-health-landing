import {
  CheckCircle,
  UsersThree,
  IdentificationBadge,
  TestTube,
  ChartLineUp,
} from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";

const chartPoints = [
  { month: "فروردین", value: 82, x: 0, y: 90 },
  { month: "اردیبهشت", value: 84.5, x: 60, y: 77.5 },
  { month: "خرداد", value: 83, x: 120, y: 85 },
  { month: "تیر", value: 89, x: 180, y: 55 },
  { month: "مرداد", value: 90, x: 240, y: 50 },
  { month: "شهریور", value: 96, x: 300, y: 20 },
];

const linePath = `M${chartPoints.map((p) => `${p.x},${p.y}`).join(" L")}`;
const areaPath = `${linePath} L300,100 L0,100 Z`;

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="glass-panel absolute -top-4 -right-3 z-10 hidden items-center gap-2 rounded-xl px-3 py-2.5 shadow-md shadow-brand-primary/10 sm:-right-6 md:flex">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white">
          <CheckCircle size={16} weight="bold" />
        </span>
        <div>
          <p className="text-[11px] leading-tight text-muted-foreground">پردازش آنی OCR</p>
          <p className="text-xs font-bold leading-tight text-brand-fg">۹۹.۸٪ دقت استخراج داده</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-brand-border/60 bg-white shadow-xl shadow-brand-primary/10">
        <div className="flex items-center justify-between border-b border-brand-border/60 bg-brand-bg-alt/50 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-emerald-400" />
            </span>
            <span dir="ltr" className="text-[11px] text-muted-foreground">
              sinacare-health-panel.ir/enterprise
            </span>
          </div>
          <Badge className="border-0 bg-emerald-100 text-[11px] text-emerald-700">
            وضعیت سیستم: فعال
          </Badge>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-brand-fg">پرونده سلامت کارمند</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                مجموعه پرسنل واحد تولید (۱۴۲ نفر)
              </p>
            </div>
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
              <IdentificationBadge size={20} weight="duotone" />
            </span>
          </div>

          <div className="mt-4 rounded-xl bg-brand-bg-alt/60 p-4">
            <div className="flex items-center justify-between">
              <Badge className="border-0 bg-white text-[11px] text-brand-primary shadow-sm">
                تحلیل هوشمند ماهانه
              </Badge>
              <span className="text-xs font-bold text-brand-fg">
                روند شاخص‌های سلامت شغلی (BI)
              </span>
            </div>

            <div className="mt-3 flex gap-2">
              <div className="flex h-24 flex-col justify-between py-1 text-[10px] text-muted-foreground">
                <span>۹۶</span>
                <span>۸۹</span>
                <span>۸۲</span>
              </div>
              <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="h-24 flex-1">
                <defs>
                  <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--brand-secondary)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="var(--brand-secondary)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={areaPath} fill="url(#heroChartFill)" />
                <path
                  d={linePath}
                  fill="none"
                  stroke="var(--brand-secondary)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {chartPoints.map((p) => (
                  <circle
                    key={p.month}
                    cx={p.x}
                    cy={p.y}
                    r={p.month === "شهریور" ? 5 : 3}
                    fill="white"
                    stroke="var(--brand-secondary)"
                    strokeWidth="2.5"
                  />
                ))}
              </svg>
            </div>
            <div className="mt-1 flex justify-between ps-7 text-[10px] text-muted-foreground">
              {chartPoints.map((p) => (
                <span key={p.month}>{p.month}</span>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-brand-bg-alt/60 p-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-white">
                <ChartLineUp size={16} weight="bold" />
              </span>
              <div>
                <p className="text-[11px] font-bold leading-tight text-brand-fg">هوش تجاری BI</p>
                <p className="text-[10px] leading-tight text-muted-foreground">
                  تحلیل دقیق ریسک شغلی
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-brand-bg-alt/60 p-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white">
                <TestTube size={16} weight="bold" />
              </span>
              <div>
                <p className="text-[11px] font-bold leading-tight text-brand-fg">
                  پارامتر آزمایشگاهی OCR
                </p>
                <p className="text-[10px] leading-tight text-muted-foreground">۲۰۰+ پشتیبانی</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel absolute -bottom-4 -left-3 hidden items-center gap-2 rounded-xl px-3 py-2.5 shadow-md shadow-brand-primary/10 sm:-left-6 md:flex">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-accent text-white">
          <UsersThree size={16} weight="bold" />
        </span>
        <div>
          <p className="text-[11px] leading-tight text-muted-foreground">پایش اداری پرسنل</p>
          <p className="text-xs font-bold leading-tight text-brand-fg">۱۴۲ کارمند تحت پوشش</p>
        </div>
      </div>
    </div>
  );
}

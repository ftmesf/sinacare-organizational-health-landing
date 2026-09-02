import { Badge } from "@/components/ui/badge";
import {
  Buildings,
  Drop,
  Ear,
  Factory,
  HeartStraight,
  Heartbeat,
  Scan,
  Stethoscope,
  TestTube,
  Trophy,
  User,
  UserCheck,
  ClipboardText,
  TrendUp,
  Wind,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";

const panelClassName = "rounded-xl bg-brand-bg-alt/60 p-5";

const biBars = [
  { label: "اداری", value: 80 },
  { label: "تولید", value: 78 },
  { label: "انبار", value: 65 },
  { label: "فنی", value: 85 },
];

export function BiWidget() {
  return (
    <div className={panelClassName}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-brand-primary">گزارش BI</span>
        <span className="flex items-center gap-1 rounded-full bg-brand-accent/10 px-2 py-0.5 text-[10px] font-bold text-brand-accent">
          <TrendUp size={12} weight="bold" />
          ۸٪ نسبت به ماه قبل
        </span>
      </div>
      <p className="mt-1 text-sm font-bold text-brand-fg">
        نمودار شاخص انطباق سلامت واحدهای تولیدی
      </p>
      <div className="mt-5 flex gap-3">
        <div className="flex h-24 flex-col justify-between text-[10px] text-muted-foreground">
          <span>80</span>
          <span>40</span>
          <span>0</span>
        </div>
        <div className="flex flex-1 gap-3">
          {biBars.map((bar) => (
            <div key={bar.label} className="relative flex h-24 flex-1 flex-col justify-end">
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-brand-fg">
                {bar.value}
              </span>
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-brand-primary to-brand-secondary shadow-sm"
                style={{ height: `${bar.value}%` }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 flex gap-3 ps-[calc(var(--spacing)*7)]">
        {biBars.map((bar) => (
          <span key={bar.label} className="flex-1 text-center text-[10px] text-muted-foreground">
            {bar.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HealthPanelWidget() {
  return (
    <div className={panelClassName}>
      <div className="flex items-center justify-between">
        <Badge className="border-0 bg-brand-accent/10 text-brand-accent">تایید شده</Badge>
        <span className="text-sm font-bold text-brand-fg">کارت سلامت ادواری پرسنل</span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="flex flex-col items-center rounded-lg bg-white p-3 text-center shadow-sm">
          <div
            className="flex size-12 items-center justify-center rounded-full p-1"
            style={{
              background: `conic-gradient(var(--brand-accent) ${94 * 3.6}deg, var(--brand-bg-alt) 0deg)`,
            }}
          >
            <span className="flex size-full items-center justify-center rounded-full bg-white text-[11px] font-bold text-brand-accent">
              ۹۴٪
            </span>
          </div>
          <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
            <Wind size={12} className="text-brand-accent" />
            تست اسپیرومتری
          </p>
          <p className="mt-0.5 text-xs font-bold text-brand-accent">نرمال</p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg bg-white p-3 text-center shadow-sm">
          <span className="flex size-12 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
            <Ear size={22} weight="duotone" />
          </span>
          <p className="mt-2 text-xs text-muted-foreground">شنوایی‌سنجی</p>
          <p className="mt-0.5 text-xs font-bold text-brand-primary">افت خفیف فرکانس بالا</p>
        </div>
      </div>
    </div>
  );
}

export function RecordsWidget() {
  return (
    <div className={panelClassName}>
      <div className="relative space-y-2 ps-9">
        <div className="absolute right-4 top-4 bottom-4 w-px bg-brand-border" />

        <div className="relative flex items-center justify-between gap-2 rounded-lg bg-white p-3 shadow-sm">
          <span className="absolute -right-9 flex size-6 items-center justify-center rounded-full bg-brand-secondary text-white">
            <UserCheck size={13} weight="bold" />
          </span>
          <Badge className="border-0 bg-brand-secondary/10 text-brand-secondary">دیجیتالی‌شده</Badge>
          <span className="text-sm font-medium text-brand-fg">معاینات بدو استخدام</span>
        </div>
        <div className="relative flex items-center justify-between gap-2 rounded-lg bg-white p-3 shadow-sm">
          <span className="absolute -right-9 flex size-6 items-center justify-center rounded-full bg-brand-accent text-white">
            <ClipboardText size={13} weight="bold" />
          </span>
          <Badge className="border-0 bg-brand-accent/10 text-brand-accent">موجود در پرونده</Badge>
          <span className="text-sm font-medium text-brand-fg">کارت سلامت و پایش ادواری</span>
        </div>
      </div>
    </div>
  );
}

export function OcrWidget() {
  return (
    <div className={panelClassName}>
      <div className="flex items-center justify-between">
        <Badge className="border-0 bg-brand-secondary/10 text-brand-secondary">۲۴ پارامتر هوشمند</Badge>
        <span className="flex items-center gap-1.5 text-sm font-bold text-brand-fg">
          <Scan size={16} className="text-brand-secondary" />
          استخراج آنی OCR از آزمایش
        </span>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between gap-2 rounded-lg bg-white p-3 text-sm shadow-sm">
          <span className="flex items-center gap-2 font-bold text-brand-accent">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10">
              <Drop size={14} weight="fill" />
            </span>
            ۹۲ mg/dL (نرمال)
          </span>
          <span dir="ltr" className="text-muted-foreground">
            Fasting Blood Sugar [FBS]
          </span>
        </div>
        <div className="flex items-center justify-between gap-2 rounded-lg bg-white p-3 text-sm shadow-sm">
          <span className="flex items-center gap-2 font-bold text-brand-accent">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10">
              <TestTube size={14} weight="fill" />
            </span>
            ۵.۴% (ایده‌آل)
          </span>
          <span dir="ltr" className="text-muted-foreground">
            Hemoglobin A1c [HbA1c]
          </span>
        </div>
      </div>
    </div>
  );
}

export function ReportsWidget() {
  const rows = [
    { unit: "واحد تولید", risk: "ریسک بالا", percent: 88, icon: Factory, className: "text-brand-risk", barClassName: "bg-brand-risk" },
    { unit: "واحد فنی", risk: "ریسک متوسط", percent: 55, icon: Wrench, className: "text-brand-primary", barClassName: "bg-brand-primary" },
    { unit: "واحد اداری", risk: "ریسک پایین", percent: 22, icon: Buildings, className: "text-brand-accent", barClassName: "bg-brand-accent" },
  ];
  return (
    <div className={panelClassName}>
      <div className="flex items-center justify-between">
        <Badge className="border-0 bg-brand-risk-bg text-brand-risk">۲ واحد پرریسک</Badge>
        <span className="text-sm font-bold text-brand-fg">گزارش سلامت واحدها</span>
      </div>
      <div className="mt-4 space-y-2">
        {rows.map((row) => (
          <div key={row.unit} className="rounded-lg bg-white p-3 text-sm shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-2 text-brand-fg">
                <span className={`flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-bg-alt ${row.className}`}>
                  <row.icon size={14} weight="bold" />
                </span>
                {row.unit}
              </span>
              <span className={`font-bold ${row.className}`}>{row.risk}</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-bg-alt">
              <div className={`h-full rounded-full ${row.barClassName}`} style={{ width: `${row.percent}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChronicRiskWidget() {
  const rows = [
    { disease: "قلبی‌عروقی", horizon: "۱۰ سال آینده", percent: 35, icon: HeartStraight },
    { disease: "دیابت نوع ۲", horizon: "۸ سال آینده", percent: 58, icon: Drop },
    { disease: "کبد چرب", horizon: "۶ سال آینده", percent: 78, icon: Heartbeat },
  ];
  return (
    <div className={panelClassName}>
      <div className="flex items-center justify-between">
        <Badge className="border-0 bg-brand-risk-bg text-brand-risk">پیش‌بینی ۱۰ ساله</Badge>
        <span className="text-sm font-bold text-brand-fg">احتمال بروز بیماری مزمن</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {rows.map((row) => (
          <div key={row.disease} className="flex flex-col items-center gap-2 rounded-lg bg-white p-3 text-center shadow-sm">
            <div
              className="flex size-14 items-center justify-center rounded-full p-1"
              style={{
                background: `conic-gradient(var(--brand-risk) ${row.percent * 3.6}deg, var(--brand-bg-alt) 0deg)`,
              }}
            >
              <span className="flex size-full items-center justify-center rounded-full bg-white text-brand-risk">
                <row.icon size={18} weight="duotone" />
              </span>
            </div>
            <div>
              <p className="text-[11px] font-bold leading-tight text-brand-fg">{row.disease}</p>
              <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">{row.horizon}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChallengeWidget() {
  const ranks = [
    { rank: "۱", team: "واحد تولید", score: "۲٬۴۵۰", percent: 100, rankClassName: "bg-gradient-to-br from-amber-400 to-amber-600" },
    { rank: "۲", team: "واحد فنی", score: "۲٬۱۸۰", percent: 89, rankClassName: "bg-gradient-to-br from-zinc-300 to-zinc-500" },
    { rank: "۳", team: "واحد اداری", score: "۱٬۹۲۰", percent: 78, rankClassName: "bg-gradient-to-br from-amber-600 to-amber-800" },
  ];
  return (
    <div className={panelClassName}>
      <div className="flex items-center justify-between">
        <Badge className="border-0 bg-brand-primary/10 text-brand-primary">هفته ۶</Badge>
        <span className="flex items-center gap-1.5 text-sm font-bold text-brand-fg">
          <Trophy size={16} weight="fill" className="text-amber-500" />
          رتبه‌بندی زنده چالش
        </span>
      </div>
      <div className="mt-4 space-y-2">
        {ranks.map((r, i) => (
          <div
            key={r.rank}
            className={`rounded-lg p-3 text-sm shadow-sm ${
              i === 0 ? "bg-white ring-1 ring-amber-400/50" : "bg-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-brand-fg">
                <span
                  className={`flex size-6 items-center justify-center rounded-full text-[11px] font-bold text-white shadow-sm ${r.rankClassName}`}
                >
                  {r.rank}
                </span>
                {r.team}
              </span>
              <span dir="ltr" className="font-bold text-brand-fg">
                {r.score}
                <span className="mr-1 text-[10px] font-normal text-muted-foreground">امتیاز</span>
              </span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-bg-alt">
              <div
                className="h-full rounded-full bg-gradient-to-l from-brand-primary to-brand-secondary"
                style={{ width: `${r.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MedicalCareWidget() {
  return (
    <div className={panelClassName}>
      <div className="flex items-center justify-between">
        <Badge className="border-0 bg-brand-secondary/10 text-brand-secondary">پاسخ داده‌شده</Badge>
        <span className="text-sm font-bold text-brand-fg">پیگیری آنلاین پزشک</span>
      </div>
      <div className="mt-4 space-y-3">
        <div className="flex items-start justify-end gap-2">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white p-3 text-sm shadow-sm">
            <p className="text-[10px] font-medium text-muted-foreground">پرسش کاربر</p>
            <p className="mt-1 text-brand-fg">فشار خونم بالا رفته، باید نگران باشم؟</p>
          </div>
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-bg-alt text-brand-fg/60">
            <User size={14} weight="bold" />
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-white">
            <Stethoscope size={14} weight="bold" />
          </span>
          <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-secondary/10 p-3 text-sm shadow-sm">
            <p className="text-[10px] font-medium text-brand-secondary">پاسخ پزشک</p>
            <p className="mt-1 text-brand-fg">مصرف نمک رو کم کنید و هفته بعد دوباره اندازه بگیرید.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";

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
      <span className="text-xs font-bold text-brand-primary">گزارش BI</span>
      <p className="mt-1 text-sm font-bold text-brand-fg">
        نمودار شاخص انطباق سلامت واحدهای تولیدی
      </p>
      <div className="mt-4 flex gap-3">
        <div className="flex h-24 flex-col justify-between text-[10px] text-muted-foreground">
          <span>80</span>
          <span>40</span>
          <span>0</span>
        </div>
        <div className="flex flex-1 gap-3">
          {biBars.map((bar) => (
            <div key={bar.label} className="flex h-24 flex-1 flex-col justify-end">
              <div
                className="w-full rounded-t-md bg-brand-primary"
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
        <Badge className="border-0 bg-emerald-100 text-emerald-700">تایید شده</Badge>
        <span className="text-sm font-bold text-brand-fg">کارت سلامت ادواری پرسنل</span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-white p-3 text-center shadow-sm">
          <p className="text-xs text-muted-foreground">تست اسپیرومتری</p>
          <p className="mt-1 text-sm font-bold text-emerald-600">نرمال (۹۴%)</p>
        </div>
        <div className="rounded-lg bg-white p-3 text-center shadow-sm">
          <p className="text-xs text-muted-foreground">شنوایی‌سنجی</p>
          <p className="mt-1 text-sm font-bold text-amber-600">افت خفیف فرکانس بالا</p>
        </div>
      </div>
    </div>
  );
}

export function RecordsWidget() {
  return (
    <div className={`${panelClassName} space-y-2`}>
      <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
        <Badge className="border-0 bg-violet-100 text-violet-700">دیجیتالی‌شده</Badge>
        <span className="text-sm font-medium text-brand-fg">معاینات بدو استخدام</span>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
        <Badge className="border-0 bg-emerald-100 text-emerald-700">موجود در پرونده</Badge>
        <span className="text-sm font-medium text-brand-fg">کارت سلامت و پایش ادواری</span>
      </div>
    </div>
  );
}

export function OcrWidget() {
  return (
    <div className={panelClassName}>
      <div className="flex items-center justify-between">
        <Badge className="border-0 bg-emerald-100 text-emerald-700">۲۴ پارامتر هوشمند</Badge>
        <span className="text-sm font-bold text-brand-fg">استخراج آنی OCR از آزمایش</span>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between rounded-lg bg-white p-3 text-sm shadow-sm">
          <span className="font-bold text-emerald-600">۹۲ mg/dL (نرمال)</span>
          <span dir="ltr" className="text-muted-foreground">
            Fasting Blood Sugar [FBS]
          </span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-white p-3 text-sm shadow-sm">
          <span className="font-bold text-emerald-600">۵.۴% (ایده‌آل)</span>
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
    { unit: "واحد تولید", risk: "ریسک بالا", className: "text-red-600" },
    { unit: "واحد فنی", risk: "ریسک متوسط", className: "text-amber-600" },
    { unit: "واحد اداری", risk: "ریسک پایین", className: "text-emerald-600" },
  ];
  return (
    <div className={panelClassName}>
      <div className="flex items-center justify-between">
        <Badge className="border-0 bg-red-100 text-red-700">۲ واحد پرریسک</Badge>
        <span className="text-sm font-bold text-brand-fg">گزارش سلامت واحدها</span>
      </div>
      <div className="mt-4 space-y-2">
        {rows.map((row) => (
          <div
            key={row.unit}
            className="flex items-center justify-between rounded-lg bg-white p-3 text-sm shadow-sm"
          >
            <span className={`font-bold ${row.className}`}>{row.risk}</span>
            <span className="text-brand-fg">{row.unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChronicRiskWidget() {
  const rows = [
    { disease: "بیماری‌های قلبی‌عروقی", horizon: "۱۰ سال آینده", className: "text-brand-risk" },
    { disease: "دیابت نوع ۲", horizon: "۸ سال آینده", className: "text-amber-600" },
    { disease: "کبد چرب و فیبروز کبدی", horizon: "۶ سال آینده", className: "text-amber-600" },
  ];
  return (
    <div className={panelClassName}>
      <span className="text-xs font-bold text-brand-risk">پیش‌بینی ۱۰ ساله</span>
      <p className="mt-1 text-sm font-bold text-brand-fg">احتمال بروز بیماری‌های مزمن</p>
      <div className="mt-4 space-y-2">
        {rows.map((row) => (
          <div
            key={row.disease}
            className="flex items-center justify-between rounded-lg bg-white p-3 text-sm shadow-sm"
          >
            <span className={`font-bold ${row.className}`}>{row.horizon}</span>
            <span className="text-brand-fg">{row.disease}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChallengeWidget() {
  const ranks = [
    { rank: "۱", team: "واحد تولید", score: "۲٬۴۵۰ امتیاز", rankClassName: "bg-amber-500" },
    { rank: "۲", team: "واحد فنی", score: "۲٬۱۸۰ امتیاز", rankClassName: "bg-zinc-400" },
    { rank: "۳", team: "واحد اداری", score: "۱٬۹۲۰ امتیاز", rankClassName: "bg-amber-700" },
  ];
  return (
    <div className={panelClassName}>
      <div className="flex items-center justify-between">
        <Badge className="border-0 bg-amber-100 text-amber-700">هفته ۶</Badge>
        <span className="text-sm font-bold text-brand-fg">رتبه‌بندی زنده چالش</span>
      </div>
      <div className="mt-4 space-y-2">
        {ranks.map((r) => (
          <div
            key={r.rank}
            className="flex items-center justify-between rounded-lg bg-white p-3 text-sm shadow-sm"
          >
            <span className="font-bold text-brand-fg">{r.score}</span>
            <span className="flex items-center gap-2 text-brand-fg">
              {r.team}
              <span
                className={`flex size-5 items-center justify-center rounded-full text-[10px] font-bold text-white ${r.rankClassName}`}
              >
                {r.rank}
              </span>
            </span>
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
        <Badge className="border-0 bg-cyan-100 text-cyan-700">پاسخ داده‌شده</Badge>
        <span className="text-sm font-bold text-brand-fg">پیگیری آنلاین پزشک</span>
      </div>
      <div className="mt-4 space-y-2">
        <div className="rounded-lg bg-white p-3 text-sm shadow-sm">
          <p className="text-xs text-muted-foreground">پرسش کاربر</p>
          <p className="mt-1 text-brand-fg">فشار خونم بالا رفته، باید نگران باشم؟</p>
        </div>
        <div className="rounded-lg bg-white p-3 text-sm shadow-sm">
          <p className="text-xs text-muted-foreground">پاسخ پزشک</p>
          <p className="mt-1 text-brand-fg">مصرف نمک رو کم کنید و هفته بعد دوباره اندازه بگیرید.</p>
        </div>
      </div>
    </div>
  );
}

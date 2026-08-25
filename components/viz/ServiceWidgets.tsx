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

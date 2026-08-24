export interface PricingTier {
  key: "bronze" | "silver" | "platinum" | "gold";
  name: string;
  tagline: string;
  highlighted?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    key: "bronze",
    name: "برنزی",
    tagline: "راهکاری پایه برای ایجاد پرونده سلامت دیجیتال و دسترسی به گزارش‌های طب کار و اپلیکیشن کارکنان.",
  },
  {
    key: "silver",
    name: "نقره‌ای",
    tagline: "امکانات پایه به‌همراه داشبورد تحلیلی، گزارش‌های مدیریتی و چاپ سوابق طب کار بر اساس فرم‌های مصوب.",
  },
  {
    key: "platinum",
    name: "پلاتینیوم",
    tagline: "پایش هوشمند، فالوآپ پزشکی، هشدار هنگام ثبت داده‌های پرخطر و پشتیبانی از خانواده کارکنان.",
    highlighted: true,
  },
  {
    key: "gold",
    name: "طلایی",
    tagline: "کامل‌ترین راهکار: اپلیکیشن سازمانی، آموزش سلامت، تحلیل‌های جامع و افزودن خودکار آزمایش‌ها (OCR).",
  },
];

export interface FeatureRow {
  feature: string;
  availability: [boolean, boolean, boolean, boolean];
}

export const featureMatrix: FeatureRow[] = [
  {
    feature: "پنل طب کار، غربالگری سازمانی و ارزیابی دوره‌ای پرسنل",
    availability: [true, true, true, true],
  },
  {
    feature: "امکان استفاده از اپلیکیشن خودمراقبتی سیناکر",
    availability: [true, true, true, true],
  },
  {
    feature: "داشبورد گزارش‌دهی هوش تجاری (BI)",
    availability: [false, true, true, true],
  },
  {
    feature: "پرینت سوابق طب کار بر اساس فرم ۴ صفحه‌ای مصوب اداره کار",
    availability: [false, true, true, true],
  },
  {
    feature: "بررسی سلامت کارکنان و گزارش سالانه تحلیل هوشمند سازمان",
    availability: [false, true, true, true],
  },
  {
    feature: "ثبت سنجه‌های سلامت و بارگذاری مدارک پزشکی توسط پزشک",
    availability: [false, false, true, true],
  },
  {
    feature: "پشتیبانی از پایش سلامت توسط پزشک سازمان (Follow up)",
    availability: [false, false, true, true],
  },
  {
    feature: "هشدار سیستمی به بیمار، پزشک و خانواده در داده پرخطر",
    availability: [false, false, true, true],
  },
  {
    feature: "پشتیبانی نصب و آموزش اپلیکیشن برای کلیه پرسنل",
    availability: [false, false, true, true],
  },
  {
    feature: "دسترسی تمام کاربران به پنل شخصی",
    availability: [false, false, false, true],
  },
  {
    feature: "افزودن خودکار آزمایش با فناوری OCR",
    availability: [false, false, false, true],
  },
];

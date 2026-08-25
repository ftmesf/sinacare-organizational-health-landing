import type { FeatureCard, PainPoint } from "./types";

export const painPoints: PainPoint[] = [
  {
    icon: "FileText",
    badge: "اتلاف زمان",
    tone: "amber",
    title: "پرونده‌های کاغذی و پراکنده",
    bullets: [
      "سوابق معاینات ادواری در پوشه‌های فیزیکی و اکسل‌های جدا از هم نگهداری می‌شود.",
      "در ممیزی یا بازرسی اداره کار، پیدا کردن یک مدرک ساعت‌ها زمان می‌برد.",
    ],
  },
  {
    icon: "WarningCircle",
    badge: "جریمه قانونی",
    tone: "red",
    title: "ریسک عدم انطباق قانونی",
    bullets: [
      "بدون یادآوری خودکار، عقب‌افتادن معاینات دوره‌ای شغلی از چشم واحد HSE دور می‌ماند.",
      "سازمان را در برابر بازرسی و جریمه اداره کار آسیب‌پذیر می‌کند.",
    ],
  },
  {
    icon: "Clock",
    badge: "هزینه درمان",
    tone: "orange",
    title: "تشخیص دیرهنگام بیماری",
    bullets: [
      "بدون پایش مستمر داده‌های سلامت، روند بیماری‌های مزمن شغلی تا بروز علائم دیده نمی‌شود.",
      "فرصت مداخله زودهنگام و کم‌هزینه از دست می‌رود.",
    ],
  },
  {
    icon: "HourglassMedium",
    badge: "خطای انسانی",
    tone: "indigo",
    title: "گزارش‌دهی دستی و کند",
    bullets: [
      "تهیه گزارش سالانه سلامت کارکنان به‌صورت دستی از منابع پراکنده انجام می‌شود.",
      "این روند برای واحد HSE و منابع انسانی وقت‌گیر و مستعد خطاست.",
    ],
  },
];

export const serviceCategories: FeatureCard[] = [
  {
    icon: "Database",
    title: "خدمات پایه",
    description:
      "زیرساخت نرم‌افزاری طب کار سازمان: پرونده دیجیتال سلامت، هوش تجاری، ثبت خودکار داده‌های آزمایشگاهی و تجمیع سوابق.",
  },
  {
    icon: "DeviceMobile",
    title: "خدمات فردی (اپلیکیشن)",
    description:
      "اپلیکیشن خودمراقبتی رایگان برای هر کارمند؛ ثبت، پیگیری و تحلیل شخصی داده‌های سلامت.",
  },
  {
    icon: "Stethoscope",
    title: "خدمات تخصصی",
    description:
      "گزارش‌های سازمانی، ریسک‌سنجی بیماری‌های مزمن، چالش اصلاح سبک زندگی و مراقبت تخصصی پزشکی.",
  },
  {
    icon: "MonitorPlay",
    title: "تجهیزات فیزیکی",
    description:
      "ایستگاه سلامت، دستگاه تست قند خون، فشارسنج دیجیتال و آنالیز ترکیب بدن در محل سازمان.",
  },
];

export const coreServices: FeatureCard[] = [
  {
    icon: "HeartStraight",
    title: "پنل سلامت",
    description:
      "پرونده دیجیتال سلامت هر کارمند در بستری تحت‌وب؛ پایش آنلاین وضعیت، نمودارهای تحلیلی روند سلامت، و گزارش‌های مدیریتی، پزشکی و کاربرمحور در یک‌جا.",
  },
  {
    icon: "ChartLineUp",
    title: "سامانه هوش تجاری (BI)",
    description:
      "تحلیل یکپارچه داده‌های سلامت کارکنان و ارائه تصویری جامع برای تصمیم‌گیری مدیران، واحد منابع انسانی و تیم HSE.",
  },
  {
    icon: "FileText",
    title: "ثبت خودکار داده‌های آزمایشگاهی",
    description:
      "پشتیبانی از بیش از ۲۰۰ پارامتر آزمایشگاهی؛ استخراج خودکار نتایج از فایل PDF و تصویر آزمایش با فناوری OCR و به‌روزرسانی هوشمند پرونده سلامت.",
  },
  {
    icon: "Database",
    title: "تجمیع و تبدیل سوابق",
    description:
      "یکپارچه‌سازی سوابق طب کار، معاینات ادواری و آزمایشگاه در یک منبع واحد؛ دسترسی سریع و ایمن، کاهش هزینه اداری و افزایش استنادپذیری پرونده.",
  },
];

export const selfCareApp: FeatureCard = {
  icon: "DeviceMobile",
  title: "اپلیکیشن خودمراقبتی فردی",
  description:
    "ابزاری رایگان برای هر کارمند تا داده‌های سلامت خود را هر زمان ثبت، پیگیری و تحلیل کند؛ با تمرکز بر پیشگیری و تشخیص زودهنگام.",
};

export const advancedServices: FeatureCard[] = [
  {
    icon: "ClipboardText",
    title: "گزارش‌های سازمانی",
    description:
      "تحلیل هوشمند وضعیت سلامت کل مجموعه برای مدیران؛ شناسایی افراد و واحدهای پرریسک پیش از تبدیل‌شدن به بحران.",
  },
  {
    icon: "Scan",
    title: "ریسک‌سنجی بیماری‌های مزمن",
    description:
      "شناسایی احتمال بروز بیماری‌های مزمن شغلی پیش از ظهور علائم بالینی، برای مدیریت پیشگیرانه سلامت نیروی کار.",
  },
  {
    icon: "Trophy",
    title: "چالش اصلاح سبک زندگی",
    description:
      "مسابقه‌ای انگیزشی و تیمی برای کاهش وزن و کنترل قند و فشار خون، با امتیازدهی، رتبه‌بندی زنده و تقدیر از برترین‌ها.",
  },
  {
    icon: "Stethoscope",
    title: "مراقبت تخصصی پزشکی",
    description:
      "پایش منظم داده‌های سلامت با امکان پرسش مستقیم از پزشک، دریافت بازخورد تخصصی و مشاهده روند پیشرفت در داشبورد شخصی.",
  },
];

export const physicalKit: FeatureCard[] = [
  {
    icon: "MonitorPlay",
    title: "استند ایستگاه سلامت",
    description: "ایستگاه خوداظهاری و اندازه‌گیری سلامت در محل سازمان، هم‌راستا با پرونده دیجیتال هر پرسنل.",
  },
  {
    icon: "Drop",
    title: "دستگاه تست قند خون",
    description: "اندازه‌گیری سریع و دوره‌ای قند خون، با ثبت خودکار نتیجه در پرونده سلامت فرد.",
  },
  {
    icon: "Gauge",
    title: "دستگاه فشار خون دیجیتال",
    description: "پایش منظم فشار خون کارکنان به‌عنوان یکی از مهم‌ترین شاخص‌های ریسک بیماری‌های مزمن.",
  },
  {
    icon: "PersonSimpleRun",
    title: "دستگاه آنالیز ترکیب بدن",
    description: "سنجش دقیق شاخص‌های تناسب اندام برای پایش روند برنامه‌های سلامت سازمانی.",
  },
];

export const trustedByPartners = [
  { name: "بانک صنعت و معدن", logo: "/images/partners/bank-sanat-o-madan.png" },
  { name: "شرکت صنایع پتروشیمی خلیج فارس (PGPIC/MECO)", logo: "/images/partners/pgpic-meco.png" },
  { name: "ذیون؛ طب هوشمند (Zhione)", logo: "/images/partners/zhione-smart-medicine.png" },
  { name: "شرکت صنایع معدنی فولاد سنگان (SMIC)", logo: "/images/partners/smic-foolad-sangan.png" },
  { name: "شرکت توسعه آهن و فولاد گل‌گهر", logo: "/images/partners/tosee-ahan-foolad-golgohar.png" },
  { name: "شرکت پتروشیمی پردیس", logo: "/images/partners/pardis-petrochemical.png" },
  { name: "موسسه خیریه کهریزک", logo: "/images/partners/kahrizak-charity.png" },
  { name: "خوارزمی گسترش فناوری", logo: "/images/partners/kharazmi-gostaresh-fanavari.png" },
  { name: "درمان‌یاب", logo: "/images/partners/darmanyab.png" },
  { name: "دانشگاه علوم پزشکی شهید بهشتی", logo: "/images/partners/sbmu-medical-sciences.png" },
  { name: "دانشگاه علوم پزشکی تهران", logo: "/images/partners/tums-medical-sciences.png" },
  { name: "شرکت توزیع نیروی برق تهران بزرگ", logo: "/images/partners/tehran-regional-electric.png" },
];

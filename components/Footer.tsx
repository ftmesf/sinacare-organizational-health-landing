import { MapPin, Phone, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/Logo";

const quickLinks = [
  "اپلیکیشن سیناکر",
  "تماس با سیناکر",
  "درباره سیناکر",
  "شرایط و قوانین",
  "گارانتی",
];

const articleTopics = [
  "آزمایش",
  "تناسب اندام",
  "سالمندی",
  "طب کار",
  "فشار خون",
  "قند خون",
  "کبد چرب",
  "مادر و کودک",
];

export function Footer() {
  return (
    <footer className="border-t border-brand-border/60 bg-brand-fg text-brand-bg-alt/80">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo textClassName="text-lg font-extrabold text-white" />
            <p className="mt-3 text-sm leading-7 text-brand-bg-alt/70">
              نرم‌افزار جامع طب کار و مدیریت دیجیتال سلامت سازمانی، متعلق به
              شرکت راهکار هوشمند سینا.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-white">لینک‌های سریع</p>
            <ul className="mt-3 space-y-2 text-sm text-brand-bg-alt/70">
              {quickLinks.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-white">مهم‌ترین مقالات</p>
            <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-sm text-brand-bg-alt/70">
              {articleTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-white">اطلاعات تماس</p>
            <ul className="mt-3 space-y-3 text-sm text-brand-bg-alt/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} weight="bold" className="mt-0.5 shrink-0" />
                خیابان شریعتی، بالاتر از پل رومی، کوچه نبوی، پلاک ۶، واحد ۵۰۲
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} weight="bold" className="shrink-0" />
                <a href="tel:02191002002" className="hover:text-white">۰۲۱-۹۱۰۰۲۰۰۲</a>
              </li>
              <li className="flex items-center gap-2">
                <EnvelopeSimple size={16} weight="bold" className="shrink-0" />
                <a href="mailto:support@sinacare.ir" className="hover:text-white">support@sinacare.ir</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-brand-bg-alt/50">
          © تمامی حقوق این وب‌سایت متعلق به شرکت راهکار هوشمند سینا است.
        </p>
      </div>
    </footer>
  );
}

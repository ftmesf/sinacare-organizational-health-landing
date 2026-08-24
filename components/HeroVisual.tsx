import {
  ChartLineUp,
  ShieldCheck,
  Pulse,
  HeartStraight,
} from "@phosphor-icons/react/dist/ssr";

const bars = [38, 62, 48, 80, 58, 70, 90];

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md sm:max-w-lg">
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 -z-10 h-full w-full scale-125 opacity-70"
        aria-hidden
      >
        <defs>
          <linearGradient id="heroBlob" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--brand-primary)" />
            <stop offset="55%" stopColor="var(--brand-secondary)" />
            <stop offset="100%" stopColor="var(--brand-accent)" />
          </linearGradient>
        </defs>
        <path
          fill="url(#heroBlob)"
          opacity="0.18"
          d="M45.6,-58.2C58.9,-49.6,69.2,-34.9,73.1,-18.4C77,-1.9,74.5,16.4,66.1,31.3C57.7,46.2,43.4,57.7,27.1,64.6C10.8,71.5,-7.5,73.8,-24.5,69.1C-41.5,64.4,-57.2,52.7,-65.9,37.2C-74.6,21.7,-76.3,2.4,-72.1,-15.1C-67.9,-32.6,-57.8,-48.3,-43.9,-57C-30,-65.7,-15,-67.4,1.2,-69C17.4,-70.6,32.3,-66.8,45.6,-58.2Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="glass-panel absolute inset-x-6 top-6 rounded-2xl p-5 shadow-lg shadow-brand-primary/10 sm:inset-x-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground">پرونده سلامت کارمند</p>
            <p className="mt-0.5 text-sm font-bold text-brand-fg">وضعیت: پایدار</p>
          </div>
          <span className="flex size-9 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
            <HeartStraight size={20} weight="duotone" />
          </span>
        </div>
        <div className="mt-4 flex h-16 items-end justify-between">
          {bars.map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%` }}
              className="w-2.5 rounded-t-full bg-gradient-to-t from-brand-primary to-brand-secondary sm:w-3"
            />
          ))}
        </div>
      </div>

      <div className="glass-panel absolute -top-2 left-2 flex items-center gap-2 rounded-xl px-3 py-2 shadow-md shadow-brand-primary/10 sm:left-0">
        <span className="flex size-8 items-center justify-center rounded-lg bg-brand-primary text-white">
          <ChartLineUp size={16} weight="bold" />
        </span>
        <span className="text-xs font-semibold text-brand-fg">هوش تجاری BI</span>
      </div>

      <div className="glass-panel absolute bottom-10 right-0 flex items-center gap-2 rounded-xl px-3 py-2 shadow-md shadow-brand-primary/10 sm:-right-2">
        <span className="flex size-8 items-center justify-center rounded-lg bg-brand-accent text-white">
          <ShieldCheck size={16} weight="bold" />
        </span>
        <span className="text-xs font-semibold text-brand-fg">داده‌های رمزنگاری‌شده</span>
      </div>

      <div className="glass-panel absolute bottom-0 left-4 flex items-center gap-2 rounded-xl px-3 py-2.5 shadow-md shadow-brand-primary/10 sm:left-8">
        <span className="flex size-8 items-center justify-center rounded-lg bg-brand-secondary/25 text-brand-primary">
          <Pulse size={16} weight="bold" />
        </span>
        <div>
          <p className="text-[11px] leading-tight text-muted-foreground">پارامتر آزمایشگاهی</p>
          <p className="text-xs font-bold leading-tight text-brand-fg">۲۰۰+ پشتیبانی</p>
        </div>
      </div>
    </div>
  );
}

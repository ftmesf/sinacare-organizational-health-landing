import Image from "next/image";

export function PhoneMockup({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`w-full max-w-[190px] ${className ?? ""}`}>
      <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-brand-fg bg-brand-fg shadow-xl shadow-brand-primary/20">
        <span className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-brand-fg" />
        <Image src={src} alt={alt} width={323} height={700} className="h-auto w-full" />
      </div>
    </div>
  );
}

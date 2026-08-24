import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-sans",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "سیناکر | نرم‌افزار طب کار و مدیریت سلامت سازمانی",
  description:
    "سیناکر پرونده دیجیتال طب کار، پایش سلامت شغلی و تحلیل هوشمند داده‌های سلامت کارکنان را در یک سامانه یکپارچه برای سازمان شما فراهم می‌کند.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

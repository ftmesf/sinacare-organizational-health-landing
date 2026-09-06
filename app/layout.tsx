import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { AgentationToolbar } from "@/components/agentation-toolbar";

const vazirmatn = Vazirmatn({
  variable: "--font-sans",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "سیناکر | نرم‌افزار طب کار و مدیریت سلامت سازمانی",
    template: "%s | سیناکر",
  },
  description:
    "سیناکر پرونده دیجیتال طب کار، پایش سلامت شغلی و تحلیل هوشمند داده‌های سلامت کارکنان را در یک سامانه یکپارچه برای سازمان شما فراهم می‌کند.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "سیناکر",
  alternateName: "راهکار هوشمند سینا",
  description:
    "سیناکر پرونده دیجیتال طب کار، پایش سلامت شغلی و تحلیل هوشمند داده‌های سلامت کارکنان را در یک سامانه یکپارچه برای سازمان شما فراهم می‌کند.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+98-21-91002002",
    contactType: "customer service",
    email: "support@sinacare.ir",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <AgentationToolbar />
      </body>
    </html>
  );
}

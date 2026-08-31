import { LeadsClient } from "@/components/LeadsClient";

export const metadata = {
  robots: { index: false, follow: false },
  title: "لیدهای سیناکر",
};

export default function LeadsPage() {
  return <LeadsClient />;
}

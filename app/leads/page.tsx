import { LeadsClient } from "@/components/LeadsClient";

export const metadata = {
  robots: { index: false, follow: false },
  title: "لیدها",
};

export default function LeadsPage() {
  return <LeadsClient />;
}

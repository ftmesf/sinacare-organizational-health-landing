export type IconName =
  | "ChartLineUp"
  | "Database"
  | "ShieldCheck"
  | "Pulse"
  | "FileText"
  | "UsersThree"
  | "WarningCircle"
  | "Trophy"
  | "Stethoscope"
  | "ClipboardText"
  | "Clock"
  | "LockKey"
  | "Scales"
  | "HeartStraight"
  | "Smiley"
  | "UserCheck"
  | "NotePencil"
  | "Gauge"
  | "Drop"
  | "PersonSimpleRun"
  | "MonitorPlay"
  | "DeviceMobile"
  | "ChartPieSlice"
  | "Books"
  | "HourglassMedium"
  | "Scan"
  | "MagnifyingGlass";

export interface FeatureCard {
  icon: IconName;
  title: string;
  description: string;
}

export interface PainPoint {
  icon: IconName;
  badge: string;
  tone: BenefitTone;
  title: string;
  bullets: string[];
}

export type BenefitTone =
  | "violet"
  | "cyan"
  | "emerald"
  | "amber"
  | "teal"
  | "red"
  | "indigo"
  | "orange";

export interface BenefitStat {
  icon: IconName;
  label: string;
  description: string;
  tone: BenefitTone;
  footerIcon: IconName;
  footerLabel: string;
}

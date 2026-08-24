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
  | "Scan";

export interface FeatureCard {
  icon: IconName;
  title: string;
  description: string;
}

export interface BenefitStat {
  icon: IconName;
  label: string;
  metric?: string;
}

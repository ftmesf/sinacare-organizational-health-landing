import {
  ChartLineUp,
  Database,
  ShieldCheck,
  Pulse,
  FileText,
  UsersThree,
  WarningCircle,
  Trophy,
  Stethoscope,
  ClipboardText,
  Clock,
  LockKey,
  Scales,
  HeartStraight,
  Smiley,
  UserCheck,
  NotePencil,
  Gauge,
  Drop,
  PersonSimpleRun,
  MonitorPlay,
  DeviceMobile,
  ChartPieSlice,
  Books,
  HourglassMedium,
  Scan,
} from "@phosphor-icons/react/dist/ssr";
import type { IconProps } from "@phosphor-icons/react";
import type { IconName } from "@/lib/content/types";

const registry: Record<IconName, React.ComponentType<IconProps>> = {
  ChartLineUp,
  Database,
  ShieldCheck,
  Pulse,
  FileText,
  UsersThree,
  WarningCircle,
  Trophy,
  Stethoscope,
  ClipboardText,
  Clock,
  LockKey,
  Scales,
  HeartStraight,
  Smiley,
  UserCheck,
  NotePencil,
  Gauge,
  Drop,
  PersonSimpleRun,
  MonitorPlay,
  DeviceMobile,
  ChartPieSlice,
  Books,
  HourglassMedium,
  Scan,
};

export function FeatureIcon({
  name,
  className,
  weight = "duotone",
  size = 24,
}: {
  name: IconName;
  className?: string;
  weight?: IconProps["weight"];
  size?: number;
}) {
  const Icon = registry[name];
  return <Icon className={className} weight={weight} size={size} />;
}

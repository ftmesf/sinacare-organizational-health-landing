import type { BenefitTone } from "@/lib/content/types";

export const toneClasses: Record<
  BenefitTone,
  { icon: string; badge: string; footer: string; hover: string; bullet: string }
> = {
  violet: {
    icon: "bg-violet-100 text-violet-600",
    badge: "bg-violet-100 text-violet-700",
    footer: "text-violet-600",
    hover: "hover:border-violet-400 hover:shadow-violet-500/10",
    bullet: "bg-violet-500",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-600",
    badge: "bg-cyan-100 text-cyan-700",
    footer: "text-cyan-600",
    hover: "hover:border-cyan-400 hover:shadow-cyan-500/10",
    bullet: "bg-cyan-500",
  },
  emerald: {
    icon: "bg-emerald-100 text-emerald-600",
    badge: "bg-emerald-100 text-emerald-700",
    footer: "text-emerald-600",
    hover: "hover:border-emerald-400 hover:shadow-emerald-500/10",
    bullet: "bg-emerald-500",
  },
  amber: {
    icon: "bg-amber-100 text-amber-600",
    badge: "bg-amber-100 text-amber-700",
    footer: "text-amber-600",
    hover: "hover:border-amber-400 hover:shadow-amber-500/10",
    bullet: "bg-amber-500",
  },
  teal: {
    icon: "bg-teal-100 text-teal-600",
    badge: "bg-teal-100 text-teal-700",
    footer: "text-teal-600",
    hover: "hover:border-teal-400 hover:shadow-teal-500/10",
    bullet: "bg-teal-500",
  },
  red: {
    icon: "bg-red-100 text-red-600",
    badge: "bg-red-100 text-red-700",
    footer: "text-red-600",
    hover: "hover:border-red-400 hover:shadow-red-500/10",
    bullet: "bg-red-500",
  },
  indigo: {
    icon: "bg-indigo-100 text-indigo-600",
    badge: "bg-indigo-100 text-indigo-700",
    footer: "text-indigo-600",
    hover: "hover:border-indigo-400 hover:shadow-indigo-500/10",
    bullet: "bg-indigo-500",
  },
  orange: {
    icon: "bg-orange-100 text-orange-600",
    badge: "bg-orange-100 text-orange-700",
    footer: "text-orange-600",
    hover: "hover:border-orange-400 hover:shadow-orange-500/10",
    bullet: "bg-orange-500",
  },
};

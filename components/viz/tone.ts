import type { BenefitTone } from "@/lib/content/types";

type ToneClass = { icon: string; badge: string; footer: string; hover: string; bullet: string };

const brandPrimary: ToneClass = {
  icon: "bg-brand-primary/10 text-brand-primary",
  badge: "bg-brand-primary/10 text-brand-primary",
  footer: "text-brand-primary",
  hover: "hover:border-brand-primary/40 hover:shadow-brand-primary/10",
  bullet: "bg-brand-primary",
};

const brandSecondary: ToneClass = {
  icon: "bg-brand-secondary/10 text-brand-secondary",
  badge: "bg-brand-secondary/10 text-brand-secondary",
  footer: "text-brand-secondary",
  hover: "hover:border-brand-secondary/40 hover:shadow-brand-secondary/10",
  bullet: "bg-brand-secondary",
};

const brandAccent: ToneClass = {
  icon: "bg-brand-accent/10 text-brand-accent",
  badge: "bg-brand-accent/10 text-brand-accent",
  footer: "text-brand-accent",
  hover: "hover:border-brand-accent/40 hover:shadow-brand-accent/10",
  bullet: "bg-brand-accent",
};

const brandRisk: ToneClass = {
  icon: "bg-brand-risk-bg text-brand-risk",
  badge: "bg-brand-risk-bg text-brand-risk",
  footer: "text-brand-risk",
  hover: "hover:border-brand-risk/40 hover:shadow-brand-risk/10",
  bullet: "bg-brand-risk",
};

export const toneClasses: Record<BenefitTone, ToneClass> = {
  violet: brandPrimary,
  cyan: brandSecondary,
  emerald: brandAccent,
  amber: brandPrimary,
  teal: brandSecondary,
  red: brandRisk,
  indigo: brandAccent,
  orange: brandPrimary,
};

"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

const links = [
  { href: "#what-is", label: "سلامت سازمانی چیست؟" },
  { href: "#services", label: "خدمات" },
  { href: "#benefits", label: "مزایا" },
  { href: "#pricing", label: "طرح‌ها" },
  { href: "#contact", label: "تماس" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-panel mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <a href="#top">
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-fg/80 transition hover:text-brand-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="#contact">درخواست دموی سازمانی</a>
          </Button>
        </div>

        <button
          className="flex size-9 items-center justify-center rounded-lg text-brand-fg md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </div>

      {open && (
        <div className="glass-panel mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-fg hover:bg-brand-bg-alt"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="mt-2">
            <a href="#contact">درخواست دموی سازمانی</a>
          </Button>
        </div>
      )}
    </header>
  );
}

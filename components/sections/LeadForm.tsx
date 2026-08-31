"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, Phone, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

const labelClass = "text-sm font-bold text-brand-fg";
const inputClass =
  "mt-2 w-full rounded-lg border border-brand-border bg-white px-3.5 py-2.5 text-sm text-brand-fg outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      fullName: String(data.get("fullName") ?? ""),
      organization: String(data.get("organization") ?? ""),
      jobTitle: String(data.get("jobTitle") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok) {
        setErrorMessage(result.error ?? "خطایی رخ داد، دوباره تلاش کنید.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("ارتباط با سرور برقرار نشد. لطفاً دوباره تلاش کنید یا تماس بگیرید.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 rounded-2xl bg-white px-6 py-10 text-center shadow-xl">
        <CheckCircle size={40} weight="fill" className="text-brand-accent" />
        <p className="text-base font-bold text-brand-fg">درخواست شما ثبت شد</p>
        <p className="text-sm text-muted-foreground">
          همکاران ما به‌زودی با شماره‌ای که وارد کردید تماس می‌گیرند.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-2xl bg-white text-start shadow-xl"
    >
      <div className="border-b border-brand-border/70 bg-brand-bg-alt/60 px-6 py-3.5">
        <span className="text-sm font-bold text-brand-fg">مشخصات</span>
      </div>

      <div className="grid gap-5 p-6 sm:grid-cols-2">
        <label>
          <span className={labelClass}>
            نام و نام خانوادگی <span className="text-red-500">*</span>
          </span>
          <input name="fullName" required className={inputClass} disabled={status === "submitting"} />
        </label>

        <label>
          <span className={labelClass}>
            شرکت یا سازمان <span className="text-red-500">*</span>
          </span>
          <input name="organization" required className={inputClass} disabled={status === "submitting"} />
        </label>

        <label>
          <span className={labelClass}>عنوان شغلی</span>
          <input name="jobTitle" className={inputClass} disabled={status === "submitting"} />
        </label>

        <label>
          <span className={labelClass}>
            شماره تماس <span className="text-red-500">*</span>
          </span>
          <input
            name="phone"
            required
            type="tel"
            className={inputClass}
            disabled={status === "submitting"}
          />
        </label>

        <label className="sm:col-span-2">
          <span className={labelClass}>توضیحات</span>
          <textarea
            name="message"
            rows={4}
            className={`${inputClass} resize-none`}
            disabled={status === "submitting"}
          />
        </label>
      </div>

      {status === "error" && (
        <div className="mx-6 mb-4 flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
          <WarningCircle size={16} weight="bold" />
          {errorMessage}
        </div>
      )}

      <div className="flex flex-col items-center justify-end gap-3 border-t border-brand-border/70 bg-brand-bg-alt/40 px-6 py-4 sm:flex-row">
        <a
          href="tel:02191002002"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-brand-border px-6 text-sm font-bold text-brand-fg transition hover:bg-white sm:w-auto"
        >
          <Phone size={16} />
          تماس مستقیم: ۰۲۱-۹۱۰۰۲۰۰۲
        </a>
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="h-11 w-full px-6 text-base sm:w-auto"
        >
          {status === "submitting" ? "در حال ارسال..." : "ثبت فرم"}
        </Button>
      </div>
    </form>
  );
}

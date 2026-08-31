"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, Phone, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/60 outline-none transition focus:border-white/70 focus:bg-white/15";

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
      phone: String(data.get("phone") ?? ""),
      headcount: String(data.get("headcount") ?? ""),
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
      <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl bg-white/10 px-6 py-8 text-center">
        <CheckCircle size={40} weight="fill" className="text-white" />
        <p className="text-base font-bold text-white">درخواست شما ثبت شد</p>
        <p className="text-sm text-white/80">
          همکاران ما به‌زودی با شماره‌ای که وارد کردید تماس می‌گیرند.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 grid max-w-2xl gap-3 text-start sm:grid-cols-2">
      <input
        name="fullName"
        required
        placeholder="نام و نام خانوادگی"
        className={inputClass}
        disabled={status === "submitting"}
      />
      <input
        name="organization"
        required
        placeholder="نام سازمان"
        className={inputClass}
        disabled={status === "submitting"}
      />
      <input
        name="phone"
        required
        type="tel"
        placeholder="شماره تماس"
        className={inputClass}
        disabled={status === "submitting"}
      />
      <input
        name="headcount"
        placeholder="تعداد پرسنل (اختیاری)"
        className={inputClass}
        disabled={status === "submitting"}
      />
      <textarea
        name="message"
        placeholder="توضیح کوتاه (اختیاری)"
        rows={2}
        className={`${inputClass} resize-none sm:col-span-2`}
        disabled={status === "submitting"}
      />

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm text-white sm:col-span-2">
          <WarningCircle size={16} weight="bold" />
          {errorMessage}
        </div>
      )}

      <div className="mt-1 flex flex-col items-center gap-3 sm:col-span-2">
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="h-11 w-full bg-white px-6 text-base text-brand-primary hover:bg-white/90 sm:w-auto"
        >
          {status === "submitting" ? "در حال ارسال..." : "درخواست دموی سازمانی"}
        </Button>
        <a
          href="tel:02191002002"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
        >
          <Phone size={16} />
          یا مستقیم تماس بگیرید: ۰۲۱-۹۱۰۰۲۰۰۲
        </a>
      </div>
    </form>
  );
}

"use client";

import { useState, type FormEvent } from "react";

type Lead = {
  id: string;
  created_at: string;
  full_name: string;
  organization: string;
  job_title: string | null;
  phone: string;
  message: string | null;
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("fa-IR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso));
}

export function LeadsClient() {
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchLeads(pwd: string) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/leads", {
        headers: { "x-admin-password": pwd },
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "خطا در دریافت اطلاعات.");
        setLeads(null);
        return;
      }
      setLeads(json.leads);
    } catch {
      setError("ارتباط با سرور برقرار نشد.");
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetchLeads(password);
  }

  if (!leads) {
    return (
      <div className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-4">
        <h1 className="text-center text-lg font-bold text-brand-fg">ورود به لیست لیدها</h1>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="رمز عبور"
            className="w-full rounded-xl border border-brand-border px-4 py-2.5 text-sm outline-none focus:border-brand-primary"
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-brand-primary px-4 py-2.5 text-sm font-bold text-white disabled:opacity-50"
          >
            {loading ? "در حال بررسی..." : "ورود"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-brand-fg">لیدهای ثبت‌شده ({leads.length})</h1>
        <button
          onClick={() => fetchLeads(password)}
          className="rounded-lg border border-brand-border px-3 py-1.5 text-xs font-semibold text-brand-fg hover:bg-brand-bg-alt"
        >
          به‌روزرسانی
        </button>
      </div>

      {leads.length === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">هنوز لیدی ثبت نشده است.</p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-brand-border">
          <table className="w-full text-start text-sm">
            <thead className="bg-brand-bg-alt/60">
              <tr>
                <th className="px-4 py-3 text-start font-bold text-brand-fg">تاریخ</th>
                <th className="px-4 py-3 text-start font-bold text-brand-fg">نام</th>
                <th className="px-4 py-3 text-start font-bold text-brand-fg">سازمان</th>
                <th className="px-4 py-3 text-start font-bold text-brand-fg">عنوان شغلی</th>
                <th className="px-4 py-3 text-start font-bold text-brand-fg">تلفن</th>
                <th className="px-4 py-3 text-start font-bold text-brand-fg">توضیح</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-t border-brand-border/60">
                  <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                    {formatDate(lead.created_at)}
                  </td>
                  <td className="px-4 py-3">{lead.full_name}</td>
                  <td className="px-4 py-3">{lead.organization}</td>
                  <td className="px-4 py-3">{lead.job_title ?? "—"}</td>
                  <td dir="ltr" className="px-4 py-3 text-end">
                    {lead.phone}
                  </td>
                  <td className="px-4 py-3">{lead.message ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

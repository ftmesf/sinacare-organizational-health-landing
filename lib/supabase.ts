import { createClient } from "@supabase/supabase-js";

export function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("SUPABASE_URL / SUPABASE_ANON_KEY تنظیم نشده‌اند.");
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

// فقط سمت سرور استفاده شود؛ این کلید RLS را دور می‌زند.
export function getSupabaseAdminClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY تنظیم نشده‌اند.");
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

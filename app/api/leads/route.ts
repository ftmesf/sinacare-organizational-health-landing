import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";

export async function GET(request: Request) {
  const password = request.headers.get("x-admin-password");

  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "رمز عبور اشتباه است." }, { status: 401 });
  }

  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("leads")
    .select("id, created_at, full_name, organization, job_title, phone, message")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: "خطا در خواندن اطلاعات." }, { status: 500 });
  }

  return NextResponse.json({ leads: data });
}

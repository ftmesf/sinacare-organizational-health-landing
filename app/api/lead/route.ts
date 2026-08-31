import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "بدنه درخواست نامعتبر است." }, { status: 400 });
  }

  const { fullName, organization, phone, jobTitle, message } = (body ?? {}) as Record<string, unknown>;

  if (
    typeof fullName !== "string" ||
    typeof organization !== "string" ||
    typeof phone !== "string" ||
    !fullName.trim() ||
    !organization.trim() ||
    !phone.trim()
  ) {
    return NextResponse.json(
      { error: "نام، سازمان و شماره تماس الزامی است." },
      { status: 400 },
    );
  }

  const supabase = getSupabaseClient();
  const { error } = await supabase.from("leads").insert({
    full_name: fullName.trim(),
    organization: organization.trim(),
    phone: phone.trim(),
    job_title: typeof jobTitle === "string" ? jobTitle.trim() || null : null,
    message: typeof message === "string" ? message.trim() || null : null,
    source: "landing_page",
  });

  if (error) {
    return NextResponse.json({ error: "ثبت درخواست ناموفق بود، دوباره تلاش کنید." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

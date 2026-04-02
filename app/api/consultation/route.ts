import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const required = ["fullName", "email", "whatsapp", "institute"];

  const missing = required.find((field) => !String(body[field] || "").trim());
  if (missing) {
    return NextResponse.json({ error: `${missing} is required` }, { status: 400 });
  }

  console.log("Consultation request received", body);

  return NextResponse.json({ ok: true });
}

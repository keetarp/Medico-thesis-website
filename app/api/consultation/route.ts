import { NextResponse } from "next/server";
import {
  ConsultationDeliveryError,
  ConsultationValidationError,
  deliverConsultationSubmission,
  parseConsultationSubmission,
} from "@/lib/server/consultation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const submission = parseConsultationSubmission(body);
    const result = await deliverConsultationSubmission(submission);

    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    if (error instanceof ConsultationValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    if (error instanceof ConsultationDeliveryError) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.error("Consultation route failed:", error);

    return NextResponse.json(
      { error: "Something went wrong while saving your request." },
      { status: 500 }
    );
  }
}

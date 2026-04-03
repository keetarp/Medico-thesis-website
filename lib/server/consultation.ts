import "server-only";

const MAX_FIELD_LENGTH = 2000;

export type ConsultationSubmission = {
  submittedAt: string;
  fullName: string;
  email: string;
  whatsapp: string;
  institute: string;
  department: string;
  thesisTitle: string;
  yearOfEnrollment: string;
  currentThesisStage: string;
  message: string;
};

type DeliveryTarget = "google-sheets" | "email";

export class ConsultationValidationError extends Error {}

export class ConsultationDeliveryError extends Error {}

function isPlaceholderResendKey(value: string) {
  return value === "re_xxxxxxxxx";
}

function sanitizeText(value: unknown) {
  return String(value ?? "").trim().slice(0, MAX_FIELD_LENGTH);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function fieldLine(label: string, value: string) {
  return `${label}: ${value || "-"}`;
}

function buildPlainTextEmail(submission: ConsultationSubmission) {
  return [
    "A new thesis advisory consultation request was submitted.",
    "",
    fieldLine("Submitted At", submission.submittedAt),
    fieldLine("Full Name", submission.fullName),
    fieldLine("Email", submission.email),
    fieldLine("WhatsApp", submission.whatsapp),
    fieldLine("Institute", submission.institute),
    fieldLine("Department", submission.department),
    fieldLine("Thesis Title", submission.thesisTitle),
    fieldLine("Year of Enrollment", submission.yearOfEnrollment),
    fieldLine("Current Thesis Stage", submission.currentThesisStage),
    "",
    "Message:",
    submission.message || "-",
  ].join("\n");
}

function buildHtmlEmail(submission: ConsultationSubmission) {
  const rows = [
    ["Submitted At", submission.submittedAt],
    ["Full Name", submission.fullName],
    ["Email", submission.email],
    ["WhatsApp", submission.whatsapp],
    ["Institute", submission.institute],
    ["Department", submission.department],
    ["Thesis Title", submission.thesisTitle],
    ["Year of Enrollment", submission.yearOfEnrollment],
    ["Current Thesis Stage", submission.currentThesisStage],
    ["Message", submission.message || "-"],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;border:1px solid #d7e0df;vertical-align:top;">${escapeHtml(
          label
        )}</td><td style="padding:8px 12px;border:1px solid #d7e0df;">${escapeHtml(
          value
        )}</td></tr>`
    )
    .join("");

  return `<div style="font-family:Arial,sans-serif;color:#102331;">
    <p style="margin:0 0 16px;">A new thesis advisory consultation request was submitted.</p>
    <table style="border-collapse:collapse;width:100%;max-width:760px;background:#ffffff;">${rows}</table>
  </div>`;
}

function getConfiguredTargets() {
  const targets: DeliveryTarget[] = [];

  if (process.env.CONSULTATION_GOOGLE_SHEETS_WEBHOOK_URL?.trim()) {
    targets.push("google-sheets");
  }

  if (
    process.env.RESEND_API_KEY?.trim() &&
    process.env.CONSULTATION_NOTIFICATION_EMAIL?.trim() &&
    process.env.CONSULTATION_FROM_EMAIL?.trim()
  ) {
    targets.push("email");
  }

  return targets;
}

function getResendEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim() || "";
  const to = process.env.CONSULTATION_NOTIFICATION_EMAIL?.trim() || "";
  const from = process.env.CONSULTATION_FROM_EMAIL?.trim() || "";

  const hasAnyValue = Boolean(apiKey || to || from);

  if (!hasAnyValue) {
    return null;
  }

  if (isPlaceholderResendKey(apiKey)) {
    throw new ConsultationDeliveryError(
      "Replace RESEND_API_KEY=re_xxxxxxxxx in your environment with your real Resend API key."
    );
  }

  if (!apiKey || !to || !from) {
    throw new ConsultationDeliveryError(
      "Resend email delivery is partially configured. Set RESEND_API_KEY, CONSULTATION_NOTIFICATION_EMAIL, and CONSULTATION_FROM_EMAIL."
    );
  }

  return { apiKey, to, from };
}

export function parseConsultationSubmission(
  body: unknown
): ConsultationSubmission {
  const values = Object(body) as Record<string, unknown>;
  const submission: ConsultationSubmission = {
    submittedAt: new Date().toISOString(),
    fullName: sanitizeText(values.fullName),
    email: sanitizeText(values.email),
    whatsapp: sanitizeText(values.whatsapp),
    institute: sanitizeText(values.institute),
    department: sanitizeText(values.department),
    thesisTitle: sanitizeText(values.thesisTitle),
    yearOfEnrollment: sanitizeText(values.yearOfEnrollment),
    currentThesisStage: sanitizeText(values.currentThesisStage),
    message: sanitizeText(values.message),
  };

  const requiredFields: Array<keyof ConsultationSubmission> = [
    "fullName",
    "email",
    "whatsapp",
    "institute",
  ];

  const missing = requiredFields.find((field) => !submission[field]);

  if (missing) {
    throw new ConsultationValidationError(`${missing} is required`);
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(submission.email)) {
    throw new ConsultationValidationError("Please enter a valid email address.");
  }

  return submission;
}

async function sendToGoogleSheets(submission: ConsultationSubmission) {
  const webhookUrl = process.env.CONSULTATION_GOOGLE_SHEETS_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    return false;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      secret: process.env.CONSULTATION_WEBHOOK_SECRET?.trim() || "",
      submission,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const details = (await response.text()).slice(0, 400);
    throw new Error(
      `Google Sheets webhook failed with ${response.status}${
        details ? `: ${details}` : ""
      }`
    );
  }

  return true;
}

async function sendConsultationEmail(submission: ConsultationSubmission) {
  const config = getResendEmailConfig();

  if (!config) {
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: config.from,
      to: [config.to],
      reply_to: submission.email,
      subject: `New consultation request: ${submission.fullName}`,
      text: buildPlainTextEmail(submission),
      html: buildHtmlEmail(submission),
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const details = (await response.text()).slice(0, 400);
    throw new Error(
      `Resend email delivery failed with ${response.status}${
        details ? `: ${details}` : ""
      }`
    );
  }

  return true;
}

export async function deliverConsultationSubmission(
  submission: ConsultationSubmission
) {
  const resendConfig = getResendEmailConfig();
  const configuredTargets = getConfiguredTargets();

  if (configuredTargets.length === 0) {
    if (resendConfig) {
      throw new ConsultationDeliveryError(
        "Consultation delivery is not configured yet. Add a Google Sheets webhook URL and/or complete the email delivery settings."
      );
    }

    throw new ConsultationDeliveryError(
      "Consultation delivery is not configured yet. Add a Google Sheets webhook URL and/or Resend email settings in your environment variables."
    );
  }

  const results = await Promise.allSettled([
    sendToGoogleSheets(submission),
    sendConsultationEmail(submission),
  ]);

  const deliveredTo: DeliveryTarget[] = [];
  const errors: string[] = [];

  if (results[0].status === "fulfilled" && results[0].value) {
    deliveredTo.push("google-sheets");
  } else if (results[0].status === "rejected") {
    errors.push(results[0].reason instanceof Error ? results[0].reason.message : "Google Sheets delivery failed.");
  }

  if (results[1].status === "fulfilled" && results[1].value) {
    deliveredTo.push("email");
  } else if (results[1].status === "rejected") {
    errors.push(results[1].reason instanceof Error ? results[1].reason.message : "Email delivery failed.");
  }

  if (deliveredTo.length === 0) {
    throw new ConsultationDeliveryError(errors.join(" "));
  }

  if (errors.length > 0) {
    console.error("Partial consultation delivery failure:", errors.join(" "));
  }

  return {
    deliveredTo,
    warnings: errors,
  };
}

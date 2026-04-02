"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-3xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-ink-muted)] focus:border-[var(--color-accent)]";

export function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    setSubmitting(true);
    setError("");

    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/consultation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setError("Please review the required fields and try again.");
      setSubmitting(false);
      return;
    }

    router.push("/thank-you");
  }

  return (
    <form action={handleSubmit} className="space-y-4 rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8">
      <div className={cn("grid gap-4", compact ? "md:grid-cols-2" : "md:grid-cols-2")}>
        <input name="fullName" required placeholder="Full Name" className={fieldClass} />
        <input name="email" type="email" required placeholder="Email Address" className={fieldClass} />
        <input name="whatsapp" required placeholder="WhatsApp Number" className={fieldClass} />
        <input name="institute" required placeholder="Institute / Medical College" className={fieldClass} />
        <input name="department" placeholder="Department / Specialty" className={fieldClass} />
        <input name="yearOfEnrollment" placeholder="Year of Enrollment" className={fieldClass} />
        <input name="thesisTitle" placeholder="Thesis Title" className={cn(fieldClass, "md:col-span-2")} />
        <select name="currentThesisStage" className={fieldClass} defaultValue="">
          <option value="" disabled>
            Current Thesis Stage
          </option>
          <option>Topic selection</option>
          <option>Proposal / synopsis</option>
          <option>Literature review</option>
          <option>Methodology finalisation</option>
          <option>Data collection</option>
          <option>Analysis / results</option>
          <option>Discussion writing</option>
          <option>Formatting / submission</option>
        </select>
        <div className="rounded-3xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface-muted)] px-4 py-3 text-sm leading-6 text-[var(--color-ink)]">
          Your details will remain confidential and will only be used to contact you regarding thesis advisory services.
        </div>
      </div>
      <textarea name="message" rows={5} placeholder="Tell us where you feel stuck and what kind of support you need." className={fieldClass} />
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <button type="submit" disabled={submitting} className={cn(buttonClasses("primary"), "w-full sm:w-auto")}>
        {submitting ? "Submitting..." : "Request Consultation"}
      </button>
    </form>
  );
}

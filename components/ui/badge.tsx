import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "accent" | "soft";
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
        tone === "neutral" && "border border-[var(--color-border)] bg-[var(--color-surface-muted)] text-[var(--color-ink-muted)]",
        tone === "accent" && "bg-[var(--color-accent-strong)] text-white",
        tone === "soft" && "border border-[var(--color-border)] bg-[rgba(255,253,251,0.96)] text-[var(--color-accent-strong)]",
      )}
    >
      {children}
    </span>
  );
}

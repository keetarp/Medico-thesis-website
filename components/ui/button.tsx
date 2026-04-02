import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function buttonClasses(variant: "primary" | "secondary" | "ghost" = "primary") {
  return cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
    variant === "primary" &&
      "bg-[var(--color-accent-strong)] text-white shadow-[0_18px_38px_rgba(19,47,70,0.16)] hover:-translate-y-0.5 hover:bg-[#0f2134]",
    variant === "secondary" &&
      "border border-[var(--color-border)] bg-[rgba(255,253,251,0.92)] text-[var(--color-ink)] hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-white hover:text-[var(--color-accent-strong)]",
    variant === "ghost" &&
      "text-[var(--color-accent-strong)] hover:bg-[var(--color-surface-muted)]",
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  return (
    <Link href={href} className={cn(buttonClasses(variant), className)}>
      {children}
    </Link>
  );
}

"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ButtonLink, buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BRAND_NAME } from "@/lib/brand";
import { cn } from "@/lib/utils";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Blog", "/blog"],
  ["Resources", "/resources"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(215,210,200,0.7)] bg-[rgba(245,243,239,0.82)] backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-6 py-5">
        <Link href="/" className="flex max-w-[17rem] flex-col">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
            Medico-academic advisory
          </span>
          <span className="mt-1 font-serif text-2xl tracking-[0.02em] text-[var(--color-ink)]">
            {BRAND_NAME}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium tracking-[0.02em] text-[var(--color-ink-muted)] transition hover:text-[var(--color-accent-strong)]">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="/contact">Book Consultation</ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex rounded-full border border-[var(--color-border)] bg-[rgba(255,253,250,0.78)] p-3 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>
      <div className={cn("border-t border-[var(--color-border)] bg-[var(--color-bg)] lg:hidden", !open && "hidden")}>
        <Container className="flex flex-col gap-4 py-5">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="text-base font-semibold text-[var(--color-ink)]" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/contact" className={buttonClasses("primary")} onClick={() => setOpen(false)}>
            Book Consultation
          </Link>
        </Container>
      </div>
    </header>
  );
}

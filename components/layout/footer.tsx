import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteSettings } from "@/lib/sample-content";

const serviceLinks = [
  "Topic Selection Guidance",
  "Methodology Support",
  "Data Analysis Guidance",
  "Editing and Formatting",
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[#ede9e2]">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.5fr,1fr,1fr,1fr]">
        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
            Medico-academic thesis advisory
          </p>
          <h3 className="font-serif text-3xl text-[var(--color-ink)]">
            {siteSettings.brandName}
          </h3>
          <p className="max-w-md text-base leading-7 text-[var(--color-ink-muted)]">
            Premium thesis guidance for medical postgraduates, with especially
            strong end-to-end advisory support in pediatrics.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
            Quick Links
          </p>
          <div className="flex flex-col gap-3 text-[var(--color-ink-muted)]">
            {[
              ["/about", "About"],
              ["/services", "Services"],
              ["/blog", "Blog"],
              ["/resources", "Resources"],
              ["/faq", "FAQ"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="transition hover:text-[var(--color-accent-strong)]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
            Service Focus
          </p>
          <div className="flex flex-col gap-3 text-[var(--color-ink-muted)]">
            {serviceLinks.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
            Connect
          </p>
          <div className="flex flex-col gap-3 text-[var(--color-ink-muted)]">
            <a href={`mailto:${siteSettings.contactEmail}`}>
              {siteSettings.contactEmail}
            </a>
            <a href={siteSettings.whatsappLink}>{siteSettings.whatsappDisplay}</a>
            <p>{siteSettings.location}</p>
            <div className="flex gap-4 pt-2">
              {siteSettings.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-[var(--color-accent-strong)] transition hover:opacity-80"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Container className="border-t border-[var(--color-border)] py-5 text-sm text-[var(--color-ink-muted)]">
        <p>
          © {new Date().getFullYear()} {siteSettings.brandName}. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}

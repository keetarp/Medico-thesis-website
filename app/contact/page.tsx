import { ConsultationForm } from "@/components/sections/consultation-form";
import { FaqList } from "@/components/sections/faq-list";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BRAND_NAME } from "@/lib/brand";
import { buildMetadata } from "@/lib/seo";
import { getFaqs, getSiteSettings } from "@/lib/site";

export const metadata = buildMetadata({
  title: `Contact | ${BRAND_NAME}`,
  description:
    "Book a thesis advisory consultation, contact Medico Thesis Advisor on WhatsApp, and share your stage for focused medico-academic guidance.",
  path: "/contact",
});

export default async function ContactPage() {
  const [faqs, settings] = await Promise.all([getFaqs(), getSiteSettings()]);

  return (
    <div className="py-20 pb-24 lg:pb-20">
      <Container className="grid gap-10 lg:grid-cols-[0.78fr,1.22fr]">
        <aside className="space-y-6">
          <SectionHeading
            eyebrow="Contact"
            title="Book a thesis advisory consultation."
            description="Share your stage, draft, or current bottleneck and we will guide the next conversation from there."
          />
          <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)]">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              Direct contact
            </p>
            <div className="mt-4 space-y-3 text-base leading-7 text-[var(--color-ink-muted)]">
              <a href={settings.whatsappLink}>WhatsApp: {settings.whatsappDisplay}</a>
              <a href={`mailto:${settings.contactEmail}`}>Email: {settings.contactEmail}</a>
              <p>{settings.consultationResponseTime}</p>
              <p>
                Your details will remain confidential and will be used only for
                thesis advisory communication.
              </p>
            </div>
            <div className="mt-5">
              <ButtonLink href={settings.whatsappLink}>WhatsApp Now</ButtonLink>
            </div>
          </div>
        </aside>
        <div className="space-y-10">
          <ConsultationForm />
          <section className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)]">
            <h2 className="font-serif text-4xl">Before you reach out</h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-ink-muted)]">
              A short, clear summary of your stage usually makes the consultation
              more useful. If pediatrics is your specialty and you need full
              journey support, mention that clearly in your message.
            </p>
          </section>
          <section className="space-y-6">
            <h2 className="font-serif text-4xl">FAQ preview</h2>
            <FaqList items={faqs.slice(0, 4)} />
          </section>
        </div>
      </Container>
    </div>
  );
}

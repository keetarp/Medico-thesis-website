import { ConsultationForm } from "@/components/sections/consultation-form";
import { FaqList } from "@/components/sections/faq-list";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BRAND_NAME } from "@/lib/brand";
import { buildMetadata } from "@/lib/seo";
import { getContactPage, getFaqs, getSiteSettings } from "@/lib/site";

export async function generateMetadata() {
  const content = await getContactPage();

  return buildMetadata({
    title: content.seoTitle || `Contact | ${BRAND_NAME}`,
    description:
      content.seoDescription ||
      "Book a thesis advisory consultation, contact Medico Thesis Advisor on WhatsApp, and share your stage for focused medico-academic guidance.",
    path: "/contact",
  });
}

export default async function ContactPage() {
  const [content, faqs, settings] = await Promise.all([
    getContactPage(),
    getFaqs(),
    getSiteSettings(),
  ]);

  return (
    <div className="py-20 pb-24 lg:pb-20">
      <Container className="grid gap-10 lg:grid-cols-[0.78fr,1.22fr]">
        <aside className="space-y-6">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
          <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)]">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              {content.directContactLabel}
            </p>
            <div className="mt-4 space-y-3 text-base leading-7 text-[var(--color-ink-muted)]">
              <a href={settings.whatsappLink}>WhatsApp: {settings.whatsappDisplay}</a>
              <a href={`mailto:${settings.contactEmail}`}>Email: {settings.contactEmail}</a>
              <p>{settings.consultationResponseTime}</p>
              {content.directContactNote ? <p>{content.directContactNote}</p> : null}
            </div>
            <div className="mt-5">
              <ButtonLink href={settings.whatsappLink}>
                {content.whatsappButtonLabel}
              </ButtonLink>
            </div>
          </div>
        </aside>
        <div className="space-y-10">
          <ConsultationForm />
          <section className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)]">
            <h2 className="font-serif text-4xl">{content.beforeReachOutTitle}</h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-ink-muted)]">
              {content.beforeReachOutDescription}
            </p>
          </section>
          <section className="space-y-6">
            <h2 className="font-serif text-4xl">{content.faqPreviewTitle}</h2>
            <FaqList items={faqs.slice(0, 4)} />
          </section>
        </div>
      </Container>
    </div>
  );
}

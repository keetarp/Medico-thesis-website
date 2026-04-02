import { ConsultationForm } from "@/components/sections/consultation-form";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BRAND_NAME } from "@/lib/brand";
import { serviceGroups } from "@/lib/sample-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `Services | ${BRAND_NAME}`,
  description:
    "Explore premium thesis advisory services for medical postgraduates, including topic selection, methodology, data analysis, writing, and strong pediatric end-to-end support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="py-20 pb-24 lg:pb-20">
      <Container className="space-y-16">
        <SectionHeading
          eyebrow="Services"
          title="Structured thesis guidance across the milestones that matter most."
          description="The overall positioning is medico-academic and broad, while pediatrics remains a key specialization for full journey support."
        />
        {serviceGroups.map((group) => (
          <section
            key={group.title}
            className="grid gap-8 rounded-[2rem] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-soft)] lg:grid-cols-[0.78fr,1.22fr]"
          >
            <div className="space-y-4">
              <h2 className="font-serif text-4xl leading-tight">{group.title}</h2>
              <p className="text-lg leading-8 text-[var(--color-ink-muted)]">
                {group.intro}
              </p>
              <ButtonLink href="/contact" variant="secondary">
                {group.ctaLabel}
              </ButtonLink>
            </div>
            <div className="grid gap-5">
              {group.services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6"
                >
                  <h3 className="text-2xl font-semibold text-[var(--color-ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--color-ink-muted)]">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-[var(--color-border)] bg-white px-3 py-2 text-sm text-[var(--color-ink-muted)]"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Consultation form"
            title="Book a thesis advisory consultation."
            description="Share your stage, institution, and current bottlenecks for a more focused discussion."
          />
          <ConsultationForm />
        </section>
      </Container>
    </div>
  );
}

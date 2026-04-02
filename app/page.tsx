import Link from "next/link";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { FaqList } from "@/components/sections/faq-list";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BRAND_NAME } from "@/lib/brand";
import { serviceGroups } from "@/lib/sample-content";
import { buildMetadata } from "@/lib/seo";
import {
  getBlogPosts,
  getFaqs,
  getHomePage,
  getResources,
  getTestimonials,
} from "@/lib/site";
import { formatCurrency, formatDate } from "@/lib/utils";

export const metadata = buildMetadata({
  title: `${BRAND_NAME} | Thesis Advisory for Medical Postgraduates`,
  description:
    "Premium thesis advisory for medical postgraduates in India, with structured support in research, methodology, statistics, writing, and strong pediatric specialization.",
  path: "/",
});

export default async function HomePage() {
  const [home, posts, resources, testimonials, faqs] = await Promise.all([
    getHomePage(),
    getBlogPosts(),
    getResources(),
    getTestimonials(),
    getFaqs(),
  ]);

  const featuredPosts = posts.filter((post) => post.featured).slice(0, 3);
  const featuredResources = resources.filter((resource) => resource.featured).slice(0, 4);

  return (
    <div className="pb-24 lg:pb-0">
      <section className="section-shell overflow-hidden py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-[1.08fr,0.92fr]">
          <div className="space-y-10">
            <Badge tone="soft">
              Medical thesis advisory with strong pediatric specialization
            </Badge>
            <div className="space-y-6">
              <h1 className="balanced max-w-4xl font-serif text-5xl leading-[0.96] text-[var(--color-ink)] sm:text-6xl lg:text-[5.6rem]">
                {home.heroTitle}
              </h1>
              <p className="max-w-xl text-xl leading-8 text-[var(--color-ink-muted)]">
                {home.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                {home.heroDescription.map((line) => (
                  <div
                    key={line}
                    className="rounded-full border border-[var(--color-border)] bg-[rgba(255,253,251,0.96)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] shadow-[var(--shadow-card)]"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/contact">Book a Consultation</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore Services
              </ButtonLink>
            </div>
          </div>

          <div className="surface-panel rounded-[2rem] border border-[var(--color-border)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
            <div className="grid gap-6">
              <div className="rounded-[1.75rem] bg-[var(--color-accent-strong)] p-7 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/78">
                  Working focus
                </p>
                <p className="mt-3 font-serif text-[2rem] leading-tight sm:text-[2.35rem]">
                  Thesis clarity, stronger structure, and more confident academic
                  presentation.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-strong)]">
                    Specialization
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--color-ink)]">
                    End-to-end advisory is especially strong in pediatrics.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-strong)]">
                    Approach
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--color-ink)]">
                    Ethical, consultation-led, and built for real academic
                    understanding.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Topic", "Selection and refinement"],
                  ["Methods", "Design, variables, and statistics"],
                  ["Submission", "Writing, formatting, and readiness"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-5"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-strong)]">
                      {label}
                    </p>
                    <p className="mt-2 text-base leading-7 text-[var(--color-ink)]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="Where residents usually get stuck"
            title="The thesis process becomes difficult when the structure is unclear."
            description="These are the pressure points we help simplify."
          />
          <div className="card-grid grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {home.painPoints.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]"
              >
                <p className="text-lg leading-7 text-[var(--color-ink)]">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr]">
          <div className="rounded-[2rem] bg-[var(--color-accent-strong)] p-8 text-white shadow-[var(--shadow-soft)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/78">
              Positioning
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              {home.valueTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
              {home.valueDescription}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {home.whyChooseUs.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[var(--color-border)] bg-[rgba(255,253,251,0.94)] p-5 shadow-[var(--shadow-card)]"
              >
                <p className="text-base leading-7 text-[var(--color-ink)]">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="Services"
            title="Support across the thesis journey."
            description="Advisory, review, and structured academic guidance in a premium, minimal format."
          />
          <div className="card-grid grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {serviceGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <h3 className="font-serif text-3xl leading-tight">{group.title}</h3>
                <div className="mt-5 space-y-3">
                  {group.services.slice(0, 2).map((service) => (
                    <div
                      key={service.title}
                      className="border-t border-[var(--color-border)] pt-3"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-accent-strong)]">
                        {service.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="Process"
            title="A simple five-step working flow."
            description="Designed to bring order to the thesis journey quickly."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {home.processSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-[1.5rem] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-strong)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-xl font-medium text-[var(--color-ink)]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Insights"
              title="Expert-led articles for academic clarity."
              description="Useful content that supports trust and long-term SEO growth."
            />
            <div className="card-grid grid gap-5">
              {featuredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <Badge tone="soft">{post.category.title}</Badge>
                    <span className="text-sm font-medium text-[var(--color-ink-muted)]">
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-3xl leading-tight">
                    {post.title}
                  </h3>
                  <div className="mt-5">
                    <ButtonLink href={`/blog/${post.slug}`} variant="secondary">
                      Read Article
                    </ButtonLink>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <SectionHeading
              eyebrow="Resources"
              title="Free downloads and paid guidance tools."
              description="Immediate practical value now, with room to scale later."
            />
            <div className="card-grid grid gap-5">
              {featuredResources.map((resource) => (
                <article
                  key={resource.slug}
                  className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <Badge tone={resource.freeOrPaid === "free" ? "soft" : "accent"}>
                      {resource.freeOrPaid}
                    </Badge>
                    <span className="text-sm font-medium text-[var(--color-ink-muted)]">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-3xl leading-tight">
                    {resource.title}
                  </h3>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-[var(--color-accent-strong)]">
                      {resource.freeOrPaid === "paid" && resource.price
                        ? formatCurrency(resource.price)
                        : "Free download"}
                    </span>
                    <ButtonLink href={`/resources/${resource.slug}`} variant="secondary">
                      {resource.freeOrPaid === "free" ? "Download Free" : "Buy Now"}
                    </ButtonLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="Professional, clear, and reassuring when the thesis process feels scattered."
          />
          <div className="card-grid grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <p className="text-base leading-7 text-[var(--color-ink)]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-5 border-t border-[var(--color-border)] pt-4">
                  <p className="text-lg font-semibold text-[var(--color-ink)]">
                    {item.name}
                  </p>
                  <p className="text-sm text-[var(--color-ink-muted)]">
                    {item.role}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Consultation"
              title={home.leadCtaTitle}
              description={home.leadCtaDescription}
            />
            <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-strong)]">
                Best fit
              </p>
              <p className="mt-3 text-base leading-7 text-[var(--color-ink)]">
                Medical postgraduates who want focused guidance in research planning,
                methodology, analysis, writing, or presentation. Full journey support
                is especially strong in pediatrics.
              </p>
            </div>
          </div>
          <ConsultationForm compact />
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="FAQ preview"
              title="Clarity around ethics and scope matters."
            />
            <ButtonLink href="/faq" variant="secondary">
              View All FAQs
            </ButtonLink>
          </div>
          <FaqList items={faqs.slice(0, 4)} />
        </Container>
      </section>

      <section className="py-14">
        <Container className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-accent-strong)] px-6 py-10 text-white shadow-[var(--shadow-soft)] sm:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/78">
                Final call to action
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                {home.finalCtaTitle}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/90">
                {home.finalCtaDescription}
              </p>
            </div>
            <Link
              href="/contact"
              className="text-sm font-semibold uppercase tracking-[0.16em] text-white"
            >
              Book Consultation →
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

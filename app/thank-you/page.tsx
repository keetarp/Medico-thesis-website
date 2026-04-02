import { BRAND_NAME } from "@/lib/brand";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `Thank You | ${BRAND_NAME}`,
  description:
    "Thank you for submitting your thesis advisory consultation request.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <div className="py-24 pb-28 lg:pb-24">
      <Container className="max-w-3xl">
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-white p-10 text-center shadow-[var(--shadow-soft)]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">Thank you</p>
          <h1 className="mt-4 font-serif text-5xl">Your consultation request has been received.</h1>
          <p className="mt-5 text-lg leading-8 text-[var(--color-ink-muted)]">
            We will review your message and respond within the stated working window. In the meantime, you can explore the blog and resources sections for useful guidance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/blog">Explore the Blog</ButtonLink>
            <ButtonLink href="/resources" variant="secondary">
              Browse Resources
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";
import { getResourceBySlug, getResources } from "@/lib/site";
import { formatCurrency } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = await getResourceBySlug(slug);
  return buildMetadata({
    title: resource.seoTitle,
    description: resource.seoDescription,
    path: `/resources/${resource.slug}`,
  });
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [resource, allResources] = await Promise.all([
    getResourceBySlug(slug),
    getResources(),
  ]);
  const related = allResources.filter((item) => item.slug !== resource.slug).slice(0, 3);
  const primaryHref =
    resource.freeOrPaid === "free"
      ? resource.downloadableFileUrl || "/contact"
      : resource.paymentLink || "/contact";

  return (
    <div className="py-20 pb-24 lg:pb-20">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr,1.2fr]">
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <Badge tone={resource.freeOrPaid === "free" ? "soft" : "accent"}>
            {resource.freeOrPaid}
          </Badge>
          <h1 className="font-serif text-5xl leading-tight">{resource.title}</h1>
          <p className="text-lg leading-8 text-[var(--color-ink-muted)]">{resource.shortDescription}</p>
          <p className="text-base font-semibold text-[var(--color-accent)]">
            {resource.freeOrPaid === "paid" && resource.price ? formatCurrency(resource.price) : "Free download"}
          </p>
          <ButtonLink href={primaryHref}>{resource.freeOrPaid === "free" ? "Download Free" : "Buy Now"}</ButtonLink>
        </aside>
        <div className="space-y-10">
          <section className="rounded-[2rem] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-soft)]">
            <h2 className="font-serif text-4xl">Resource overview</h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-ink-muted)]">{resource.fullDescription}</p>
            <div className="mt-8 rounded-[1.75rem] bg-[var(--color-surface-muted)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">How this works</p>
              <p className="mt-3 text-base leading-7 text-[var(--color-ink-muted)]">
                Free resources can be downloaded directly. Paid resources currently route to an external payment link and can later be upgraded to integrated checkout.
              </p>
            </div>
          </section>
          <section className="space-y-6">
            <h2 className="font-serif text-4xl">Related resources</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <article key={item.slug} className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">{item.category}</p>
                  <h3 className="mt-3 font-serif text-3xl">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--color-ink-muted)]">{item.shortDescription}</p>
                  <div className="mt-5">
                    <ButtonLink href={`/resources/${item.slug}`} variant="secondary">
                      View Resource
                    </ButtonLink>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}

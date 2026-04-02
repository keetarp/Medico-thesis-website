import { notFound } from "next/navigation";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { PortableTextRenderer } from "@/components/sections/portable-text";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/site";
import { formatDate } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  return buildMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, posts] = await Promise.all([getBlogPostBySlug(slug), getBlogPosts()]);
  if (!post) notFound();

  const relatedPosts = posts
    .filter((item) => item.slug !== post.slug && item.category.slug === post.category.slug)
    .slice(0, 3);

  return (
    <div className="py-20 pb-24 lg:pb-20">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr,1.15fr]">
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <Badge tone="soft">{post.category.title}</Badge>
          <h1 className="font-serif text-5xl leading-tight">{post.title}</h1>
          <p className="text-lg leading-8 text-[var(--color-ink-muted)]">{post.excerpt}</p>
          <p className="text-sm text-[var(--color-ink-muted)]">
            {formatDate(post.publishedAt)} · {post.readTime}
          </p>
          <div className="rounded-[1.75rem] bg-[var(--color-surface-muted)] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">Need guidance on this stage?</p>
            <p className="mt-3 text-base leading-7 text-[var(--color-ink-muted)]">
              Book a consultation if you want expert help applying these ideas to your own pediatric thesis work.
            </p>
            <div className="mt-5">
              <ButtonLink href="/contact">Book Consultation</ButtonLink>
            </div>
          </div>
        </aside>
        <div className="space-y-12">
          <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-soft)] sm:p-10">
            <PortableTextRenderer value={post.body} />
          </article>
          <section className="space-y-6 rounded-[2rem] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-soft)]">
            <h2 className="font-serif text-4xl">Book a Thesis Advisory Consultation</h2>
            <p className="text-base leading-7 text-[var(--color-ink-muted)]">
              Share your current thesis stage and receive focused guidance tailored to your pediatric research needs.
            </p>
            <ConsultationForm compact />
          </section>
          <section className="space-y-6">
            <h2 className="font-serif text-4xl">Related posts</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((item) => (
                <article key={item.slug} className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">{item.category.title}</p>
                  <h3 className="mt-3 font-serif text-3xl leading-tight">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--color-ink-muted)]">{item.excerpt}</p>
                  <div className="mt-5">
                    <ButtonLink href={`/blog/${item.slug}`} variant="secondary">
                      Read More
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

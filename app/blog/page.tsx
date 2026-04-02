import { BRAND_NAME } from "@/lib/brand";
import { BlogList } from "@/components/sections/blog-list";
import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/lib/site";

export const metadata = buildMetadata({
  title: `Blog | ${BRAND_NAME}`,
  description:
    "Educational blog content for medical postgraduates on thesis topics, methodology, biostatistics, writing, interpretation, and viva preparation.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="py-20 pb-24 lg:pb-20">
      <Container className="space-y-12">
        <SectionHeading eyebrow="Blog and SEO growth" title="Long-form educational content designed to build trust, search visibility, and real academic clarity." description="The blog architecture is built to scale with future category expansion, internal linking, and regular Sanity publishing." />
        <BlogList posts={posts} />
      </Container>
    </div>
  );
}

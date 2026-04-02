import { BRAND_NAME } from "@/lib/brand";
import { FaqList } from "@/components/sections/faq-list";
import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";
import { getFaqs } from "@/lib/site";

export const metadata = buildMetadata({
  title: `FAQ | ${BRAND_NAME}`,
  description:
    "Frequently asked questions about thesis advisory, medico-academic support, ethics, pediatric specialization, and consultation workflow.",
  path: "/faq",
});

export default async function FaqPage() {
  const faqs = await getFaqs();
  return (
    <div className="py-20 pb-24 lg:pb-20">
      <Container className="space-y-12">
        <SectionHeading eyebrow="FAQ" title="Straight answers for residents who want to understand the support model clearly." />
        <FaqList items={faqs} />
      </Container>
    </div>
  );
}

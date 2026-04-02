import { BRAND_NAME } from "@/lib/brand";
import { ResourceList } from "@/components/sections/resource-list";
import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";
import { getResources } from "@/lib/site";

export const metadata = buildMetadata({
  title: `Resources | ${BRAND_NAME}`,
  description:
    "Browse free and paid thesis resources including checklists, templates, worksheets, and guides for medical postgraduates in India.",
  path: "/resources",
});

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <div className="py-20 pb-24 lg:pb-20">
      <Container className="space-y-12">
        <SectionHeading eyebrow="Resources" title="Free and paid tools created to support real thesis progress." description="Free resources offer immediate practical value. Paid resources currently use simple external checkout links so the section can scale now and support integrated checkout later." />
        <ResourceList resources={resources} />
      </Container>
    </div>
  );
}

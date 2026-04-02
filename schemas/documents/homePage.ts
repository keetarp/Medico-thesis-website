import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 3 }),
    defineField({
      name: "heroDescription",
      title: "Hero Description Paragraphs",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "painPoints", title: "Pain Points", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "valueTitle", title: "Value Proposition Title", type: "string" }),
    defineField({ name: "valueDescription", title: "Value Proposition Description", type: "text", rows: 4 }),
    defineField({ name: "processSteps", title: "Process Steps", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "whyChooseUs", title: "Why Choose Us Points", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "leadCtaTitle", title: "Lead CTA Title", type: "string" }),
    defineField({ name: "leadCtaDescription", title: "Lead CTA Description", type: "text", rows: 3 }),
    defineField({ name: "finalCtaTitle", title: "Final CTA Title", type: "string" }),
    defineField({ name: "finalCtaDescription", title: "Final CTA Description", type: "text", rows: 3 }),
  ],
});

import { defineField, defineType } from "sanity";

export default defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } }),
    defineField({ name: "shortDescription", title: "Short Description", type: "text", rows: 3 }),
    defineField({ name: "fullDescription", title: "Full Description", type: "text", rows: 6 }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image" }),
    defineField({
      name: "freeOrPaid",
      title: "Free or Paid",
      type: "string",
      options: { list: [{ title: "Free", value: "free" }, { title: "Paid", value: "paid" }] },
    }),
    defineField({ name: "price", title: "Price", type: "number" }),
    defineField({ name: "downloadableFile", title: "Downloadable File", type: "file" }),
    defineField({ name: "paymentLink", title: "Payment Link", type: "url" }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO Description", type: "text", rows: 3 }),
  ],
});

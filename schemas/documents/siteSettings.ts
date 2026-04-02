import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "brandName", title: "Brand Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({
      name: "description",
      title: "Brand Description",
      type: "text",
      rows: 4,
    }),
    defineField({ name: "contactEmail", title: "Contact Email", type: "string" }),
    defineField({ name: "whatsappLink", title: "WhatsApp Link", type: "url" }),
    defineField({ name: "whatsappDisplay", title: "WhatsApp Display Number", type: "string" }),
    defineField({ name: "location", title: "Location / Service Area", type: "string" }),
    defineField({ name: "consultationResponseTime", title: "Response Time Note", type: "string" }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "URL", type: "url" }),
          ],
        },
      ],
    }),
  ],
});

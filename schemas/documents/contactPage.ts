import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "Contact",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "directContactLabel",
      title: "Direct Contact Label",
      type: "string",
      initialValue: "Direct contact",
    }),
    defineField({
      name: "directContactNote",
      title: "Direct Contact Note",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "whatsappButtonLabel",
      title: "WhatsApp Button Label",
      type: "string",
      initialValue: "WhatsApp Now",
    }),
    defineField({
      name: "beforeReachOutTitle",
      title: "Before You Reach Out Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "beforeReachOutDescription",
      title: "Before You Reach Out Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "faqPreviewTitle",
      title: "FAQ Preview Title",
      type: "string",
      initialValue: "FAQ preview",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});

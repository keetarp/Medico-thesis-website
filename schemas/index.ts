import author from "@/schemas/documents/author";
import category from "@/schemas/documents/category";
import faq from "@/schemas/documents/faq";
import homePage from "@/schemas/documents/homePage";
import post from "@/schemas/documents/post";
import resource from "@/schemas/documents/resource";
import siteSettings from "@/schemas/documents/siteSettings";
import testimonial from "@/schemas/documents/testimonial";

export const schemaTypes = [
  siteSettings,
  homePage,
  category,
  author,
  post,
  resource,
  testimonial,
  faq,
];

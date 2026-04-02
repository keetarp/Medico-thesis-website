import { notFound } from "next/navigation";
import {
  blogPosts,
  faqs,
  homePageContent,
  resources,
  siteSettings,
  testimonials,
} from "@/lib/sample-content";
import { sanityClient, sanityEnabled } from "@/lib/sanity/client";
import {
  blogPostBySlugQuery,
  blogPostQuery,
  faqQuery,
  homePageQuery,
  resourceBySlugQuery,
  resourceQuery,
  siteSettingsQuery,
  testimonialQuery,
} from "@/lib/sanity/queries";
import type {
  BlogPost,
  FAQ,
  HomePageContent,
  Resource,
  SiteSettings,
  Testimonial,
} from "@/lib/types";

async function querySanity<T>(query: string, params?: Record<string, string>) {
  if (!sanityEnabled || !sanityClient) {
    return null;
  }

  try {
    return await sanityClient.fetch<T>(query, params ?? {});
  } catch {
    return null;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return (await querySanity<SiteSettings>(siteSettingsQuery)) || siteSettings;
}

export async function getHomePage(): Promise<HomePageContent> {
  return (await querySanity<HomePageContent>(homePageQuery)) || homePageContent;
}

export async function getFaqs(): Promise<FAQ[]> {
  return (await querySanity<FAQ[]>(faqQuery)) || faqs;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return (
    (await querySanity<Testimonial[]>(testimonialQuery)) || testimonials
  );
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return (await querySanity<BlogPost[]>(blogPostQuery)) || blogPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const post =
    (await querySanity<BlogPost>(blogPostBySlugQuery, { slug })) ||
    blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return post;
}

export async function getResources(): Promise<Resource[]> {
  return (await querySanity<Resource[]>(resourceQuery)) || resources;
}

export async function getResourceBySlug(slug: string): Promise<Resource> {
  const resource =
    (await querySanity<Resource>(resourceBySlugQuery, { slug })) ||
    resources.find((entry) => entry.slug === slug);

  if (!resource) {
    notFound();
  }

  return resource;
}

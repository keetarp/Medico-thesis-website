export type SocialLink = {
  label: string;
  href: string;
};

export type SiteSettings = {
  brandName: string;
  tagline: string;
  description: string;
  contactEmail: string;
  whatsappLink: string;
  whatsappDisplay: string;
  location: string;
  consultationResponseTime: string;
  socialLinks: SocialLink[];
};

export type ContactPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  directContactLabel: string;
  directContactNote?: string;
  whatsappButtonLabel: string;
  beforeReachOutTitle: string;
  beforeReachOutDescription: string;
  faqPreviewTitle: string;
  seoTitle?: string;
  seoDescription?: string;
};

export type FounderProfile = {
  name: string;
  credentials: string;
  role: string;
  bio: string;
};

export type HomePageContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string[];
  painPoints: string[];
  valueTitle: string;
  valueDescription: string;
  processSteps: string[];
  whyChooseUs: string[];
  leadCtaTitle: string;
  leadCtaDescription: string;
  finalCtaTitle: string;
  finalCtaDescription: string;
};

export type ServiceGroup = {
  title: string;
  intro: string;
  ctaLabel: string;
  services: {
    title: string;
    description: string;
    points: string[];
  }[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type Category = {
  title: string;
  slug: string;
  description: string;
};

export type Author = {
  name: string;
  role: string;
  bio: string;
};

export type PortableContent = Array<{
  _type: string;
  [key: string]: unknown;
}>;

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  category: Category;
  author: Author;
  featured?: boolean;
  publishedAt: string;
  readTime: string;
  body: PortableContent;
};

export type Resource = {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  coverImage?: string;
  freeOrPaid: "free" | "paid";
  price?: number;
  downloadableFileUrl?: string;
  paymentLink?: string;
  featured?: boolean;
  seoTitle: string;
  seoDescription: string;
};

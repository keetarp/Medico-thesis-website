import groq from "groq";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{brandName,tagline,description,contactEmail,whatsappLink,whatsappDisplay,location,consultationResponseTime,socialLinks}`;
export const homePageQuery = groq`*[_type == "homePage"][0]{heroTitle,heroSubtitle,heroDescription,painPoints,valueTitle,valueDescription,processSteps,whyChooseUs,leadCtaTitle,leadCtaDescription,finalCtaTitle,finalCtaDescription}`;
export const faqQuery = groq`*[_type == "faq"] | order(orderRank asc, _createdAt asc){question,answer}`;
export const testimonialQuery = groq`*[_type == "testimonial"] | order(_createdAt desc){name,role,quote}`;
export const blogPostQuery = groq`*[_type == "post"] | order(featured desc, publishedAt desc){title,"slug": slug.current,excerpt,seoTitle,seoDescription,publishedAt,readTime,featured,body,category->{title,"slug": slug.current,description},author->{name,role,bio}}`;
export const blogPostBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{title,"slug": slug.current,excerpt,seoTitle,seoDescription,publishedAt,readTime,featured,body,category->{title,"slug": slug.current,description},author->{name,role,bio}}`;
export const resourceQuery = groq`*[_type == "resource"] | order(featured desc, _createdAt desc){title,"slug": slug.current,shortDescription,fullDescription,category,freeOrPaid,price,featured,seoTitle,seoDescription,paymentLink,"downloadableFileUrl": downloadableFile.asset->url}`;
export const resourceBySlugQuery = groq`*[_type == "resource" && slug.current == $slug][0]{title,"slug": slug.current,shortDescription,fullDescription,category,freeOrPaid,price,featured,seoTitle,seoDescription,paymentLink,"downloadableFileUrl": downloadableFile.asset->url}`;

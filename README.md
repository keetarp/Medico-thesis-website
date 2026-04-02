# Medico Thesis Advisor

Production-ready Next.js website for a premium medico-academic thesis advisory business in India, with especially strong end-to-end support in pediatrics. The site is built with Next.js App Router, TypeScript, Tailwind CSS, and Sanity CMS scaffolding.

## What is included

- Full marketing website with pages for home, about, services, blog, resources, FAQ, contact, and thank-you flow
- Sanity schemas for blog posts, categories, authors, resources, testimonials, FAQs, site settings, and homepage content
- Local fallback sample content so the site runs before Sanity is connected
- Blog architecture with category filtering and search UI
- Resources architecture with free and paid states
- Mock consultation form API route for future CRM, email, or automation integration
- SEO foundations including metadata, sitemap, robots, and clean slugs
- Sanity Studio configuration ready for local CMS editing

## Tech stack

- Next.js 16
- TypeScript
- Tailwind CSS 4
- Sanity CMS

## Local development

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Add your Sanity values when ready. The site still works without them because fallback content is included.

4. Run the app:

```bash
npm run dev
```

5. Open `http://localhost:3000`.

## Sanity setup

1. Create a Sanity project from the Sanity dashboard.
2. Add the following values to `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-15
SANITY_API_READ_TOKEN=your_optional_read_token
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. Start Sanity Studio:

```bash
npm run studio
```

4. Open the local Studio URL shown in the terminal after running `npm run studio`.

## Sanity content types

The project already includes schemas for:

- `siteSettings`
- `homePage`
- `category`
- `author`
- `post`
- `resource`
- `testimonial`
- `faq`

These are defined inside [`schemas`](/c:/Users/Hp/Documents/website%20builder/schemas).

## How to add blog posts in Sanity

1. Open Sanity Studio.
2. Create blog categories such as Thesis Topic Selection, Research Methodology, or Biostatistics Basics.
3. Create an author document if needed.
4. Create a new `post`.
5. Fill in:
   - title
   - slug
   - excerpt
   - category
   - author
   - published date
   - read time
   - body
   - SEO title
   - SEO description
6. Publish the post.

## How to add free resources

1. Create a new `resource`.
2. Set `freeOrPaid` to `free`.
3. Upload the downloadable file into `downloadableFile`.
4. Leave price empty.
5. Publish the resource.
6. The site will automatically show `Download Free`.

## How to add paid resources

1. Create a new `resource`.
2. Set `freeOrPaid` to `paid`.
3. Add the price.
4. Add an external `paymentLink` such as Razorpay, Gumroad, or any other hosted checkout.
5. Publish the resource.
6. The site will automatically show `Buy Now` and redirect to the external link.

## Homepage and editable content

Non-technical users can later update:

- homepage messaging via `homePage`
- testimonials via `testimonial`
- FAQs via `faq`
- contact and social details via `siteSettings`
- blog content via `post`
- resources via `resource`

## Consultation form

The consultation form currently posts to a mock route at [`app/api/consultation/route.ts`](/c:/Users/Hp/Documents/website%20builder/app/api/consultation/route.ts).

You can later connect that route to:

- email delivery
- Google Sheets
- Airtable
- HubSpot
- a CRM
- WhatsApp automation

## Deploying to Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the same environment variables from `.env.local` in the Vercel dashboard.
4. Deploy.

If you are using Sanity in production, also set:

- `NEXT_PUBLIC_SITE_URL` to your final domain
- optional read token if your query strategy later requires it

## Connecting a domain later

1. In Vercel, open the project.
2. Go to Settings → Domains.
3. Add your domain.
4. Follow the DNS instructions shown by Vercel.
5. Update `NEXT_PUBLIC_SITE_URL` to the final domain.

## Files worth editing before launch

- Replace founder names, credentials, and photos in [`lib/sample-content.ts`](/c:/Users/Hp/Documents/website%20builder/lib/sample-content.ts)
- Replace WhatsApp number, email, and social links in [`lib/sample-content.ts`](/c:/Users/Hp/Documents/website%20builder/lib/sample-content.ts)
- Replace placeholder payment links in [`lib/sample-content.ts`](/c:/Users/Hp/Documents/website%20builder/lib/sample-content.ts)
- Connect real Sanity credentials through `.env.local`
- Review legal, privacy, and business contact details for production use

# Medico Thesis Advisor

Production-ready Next.js website for a premium medico-academic thesis advisory business in India, with especially strong end-to-end support in pediatrics. The project uses Next.js App Router, TypeScript, Tailwind CSS, and Sanity CMS.

## What is included

- Full marketing website with pages for home, about, services, blog, resources, FAQ, contact, and thank-you flow
- Sanity schemas for blog posts, categories, authors, resources, testimonials, FAQs, site settings, and homepage content
- Local fallback sample content so the site still works before Sanity is connected
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

3. Update `.env.local` with your real values if needed.

4. Run the app:

```bash
npm run dev
```

5. Open `http://localhost:3000`.

## Sanity integration overview

This project is wired for Sanity in two layers:

- Studio layer:
  - `sanity.config.ts`
  - `sanity.cli.ts`
  - `schemas/`
- Frontend layer:
  - `lib/sanity/client.ts`
  - `lib/sanity/queries.ts`

The Sanity Studio and the Next.js frontend intentionally use different environment variable prefixes:

- Studio uses `SANITY_STUDIO_*`
- Next.js app uses `NEXT_PUBLIC_SANITY_*`

Keep the project ID and dataset identical across both sets.

If the frontend Sanity variables are missing, the app falls back to local sample content from `lib/sample-content.ts`.

## Exact env setup

Use this in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_PROJECT_ID=jsbu9a38
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-15
SANITY_STUDIO_PROJECT_ID=jsbu9a38
SANITY_STUDIO_DATASET=production
SANITY_API_READ_TOKEN=
```

Use this in `.env.example`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_PROJECT_ID=jsbu9a38
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-15
SANITY_STUDIO_PROJECT_ID=jsbu9a38
SANITY_STUDIO_DATASET=production
SANITY_API_READ_TOKEN=
```

## What each env variable does

- `SANITY_STUDIO_PROJECT_ID`: used by Sanity Studio
- `SANITY_STUDIO_DATASET`: used by Sanity Studio
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: used by the Next.js app when fetching content
- `NEXT_PUBLIC_SANITY_DATASET`: used by the Next.js app when fetching content
- `NEXT_PUBLIC_SANITY_API_VERSION`: API version for app-side Sanity queries
- `SANITY_API_READ_TOKEN`: optional read token if you later query protected content
- `NEXT_PUBLIC_SITE_URL`: canonical frontend URL for metadata and deployment

## How to connect this project to Sanity

1. Create or open your Sanity project in the Sanity dashboard.
2. Confirm the project ID and dataset you want to use.
3. Put those values into both:
   - `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET`
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`
4. Run the Studio:

```bash
npm run studio
```

5. Open `http://localhost:3333`.
6. Sign in to Sanity if prompted.
7. Create and publish content in Studio.
8. In a second terminal, run the frontend:

```bash
npm run dev
```

9. Open `http://localhost:3000` and verify the site is showing published Sanity content.

## How the Sanity integration works

1. Content models are defined in `schemas/documents/`.
2. `sanity.config.ts` loads those schemas into Studio.
3. `sanity.cli.ts` keeps CLI commands pointed at the same project and dataset.
4. `lib/sanity/client.ts` creates the Next.js Sanity client.
5. `lib/sanity/queries.ts` contains the GROQ queries used by the site.
6. Pages fetch Sanity content when the app-side env vars exist.
7. If Sanity is not connected yet, local sample content is used instead.

## Sanity content types

The project already includes schemas for:

- `siteSettings`
- `homePage`
- `contactPage`
- `category`
- `author`
- `post`
- `resource`
- `testimonial`
- `faq`

These are defined inside `schemas/`.

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
4. Add an external `paymentLink` such as Razorpay or Gumroad.
5. Publish the resource.
6. The site will automatically show `Buy Now` and redirect to the external payment link.

## Homepage and editable content

A non-technical user can later update:

- homepage messaging via `homePage`
- contact page copy via `contactPage`
- testimonials via `testimonial`
- FAQs via `faq`
- contact and social details via `siteSettings`
- blog content via `post`
- resources via `resource`

## Consultation form

The consultation form posts to `app/api/consultation/route.ts`.

It now supports two real delivery targets without adding extra packages:

- Google Sheets through a Google Apps Script webhook
- Email notifications through Resend

You can enable either one or both at the same time.

### Consultation form env variables

Add any of these to `.env.local` when you are ready:

```env
CONSULTATION_GOOGLE_SHEETS_WEBHOOK_URL=
CONSULTATION_WEBHOOK_SECRET=
RESEND_API_KEY=
CONSULTATION_NOTIFICATION_EMAIL=
CONSULTATION_FROM_EMAIL=
```

### Google Sheets setup

Use a Google Apps Script web app as the webhook target.

Full setup instructions are in `docs/google-sheets-webhook.md`.

At minimum you will set:

```env
CONSULTATION_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/your-web-app-id/exec
CONSULTATION_WEBHOOK_SECRET=your-shared-secret
```

### Email setup with Resend

To send each enquiry to your email inbox, set:

```env
RESEND_API_KEY=re_xxxxxxxxx
CONSULTATION_NOTIFICATION_EMAIL=your-inbox@example.com
CONSULTATION_FROM_EMAIL=notifications@yourdomain.com
```

Replace `re_xxxxxxxxx` with your real Resend API key in `.env.local`.

If you were given this basic Resend example:

```javascript
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');
```

do not hardcode that key into the project source. In this codebase, put the real key into:

```env
RESEND_API_KEY=your_real_resend_api_key
```

and the backend consultation route will use it automatically.

The form route will:

- validate the submission
- send it to Google Sheets if the webhook is configured
- send it by email if Resend is configured
- return a clear error if no delivery destination is configured

## Deploying to Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the same environment variables from `.env.local` to the Vercel project settings.
4. Deploy.

For production, make sure you set:

- `NEXT_PUBLIC_SITE_URL` to the final domain
- the same Sanity project ID and dataset values used locally
- `SANITY_API_READ_TOKEN` only if your production query strategy requires it

## Connecting a domain later

1. In Vercel, open the project.
2. Go to `Settings -> Domains`.
3. Add your domain.
4. Follow the DNS instructions shown by Vercel.
5. Update `NEXT_PUBLIC_SITE_URL` to the final domain.

## Sanity troubleshooting

- If `npm run studio` says env values are missing, confirm `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET` exist in `.env.local`.
- If the frontend shows fallback sample content, confirm `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are set.
- If you change env values, restart both `npm run studio` and `npm run dev`.
- There are no `@/` alias imports remaining in the Sanity-side files.
- On this Windows setup, Studio startup depends on an automatic Vite workaround applied by `scripts/patch-vite-windows-realdir.mjs`. Running `npm install` reapplies it through `postinstall`.

## Files worth editing before launch

- Replace founder names, credentials, and photos in `lib/sample-content.ts`
- Replace WhatsApp number, email, and social links in `lib/sample-content.ts`
- Replace placeholder payment links in `lib/sample-content.ts`
- Review legal, privacy, and business contact details for production use

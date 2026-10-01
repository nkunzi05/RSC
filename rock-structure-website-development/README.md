# Rock Structure Construction website

A responsive Next.js App Router site for Rock Structure Construction (Pvt) Ltd. The public pages are content-led and use the company’s supplied WordPress media URLs through `next/image`.

## Run locally

```bash
npm install
npm run dev
```

The site is ready for a Vercel deployment. The editorial pages do not require a database query at runtime. The starter PostgreSQL/Drizzle setup remains available for future data-backed features.

## Edit content

All editable company content lives in `src/lib/content.ts`:

- `company`: name, tagline, phone, email, addresses, links, local header logo, and verified About-page copy.
- `homeHero`: homepage headline, highlighted phrase, description, enquiry button, image alt text, and featured-project link. The header overlays this hero on the homepage and becomes paper-coloured on scroll; interior pages keep a solid header.
- `services`: the seven services and their related project images.
- `products`: the seven selected products, their source product group, and images.
- `projects`: the 39 archive entries, slugs, categories, featured images, optional verified descriptions, and optional gallery images.

To add a project, add one `project(...)` entry to the `projects` array. Use the exact archive slug from the source site, a real image URL hosted at `rockstructure.construction`, and a description only when the source project page provides usable text. New entries automatically receive a static detail route, archive card, filtering, metadata, and previous/next navigation.

The seven service-page images are cached in `public/images/services`. Six come from verified Rock Structure source URLs. The exception is `dams.jpg`: Rock Structure's current site has no photograph of a dam anywhere in its media library, so this is a stock library photograph of a dam (Pexels, photographer Alexander Graf) used as an illustrative placeholder. Its alt text does not claim it is Rock Structure's work. Replace it with a real company dam photo as soon as one is available. The service records in `src/lib/content.ts` point to these same-origin files, which avoids intermittent remote loading and lets Next serve optimized local variants. If a service image is replaced, download the approved real source image into that folder and update only the matching service record.

The homepage hero is cached as `public/images/home/nyaboko-forecourt.webp`, converted from the company's original [Nyaboko forecourt photograph](https://rockstructure.construction/wp-content/uploads/2025/07/IMG-20250705-WA0232.jpg) without enlarging the source file. The compact header mark is cached at `public/images/brand/rock-structure-mark.png` from the company's supplied [small logo](https://rockstructure.construction/wp-content/uploads/2021/08/rockstructure_construction_logo-small.png). No Huts media, text or logo is used.

Other project and product imagery remains on the configured remote host in `next.config.ts`. If a future approved image host is used, add a narrowly scoped `remotePatterns` entry there.

## Contact form environment variables

The form posts to `/api/contact` and sends through Resend. Set these in Vercel Project Settings or a local `.env` file:

```bash
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=sales@rockstructure.construction
RESEND_FROM_EMAIL="Rock Structure website <noreply@your-verified-domain.com>"
```

`CONTACT_TO_EMAIL` defaults to `sales@rockstructure.construction`. `RESEND_FROM_EMAIL` defaults to Resend’s onboarding sender for development; production should use a sender on a verified domain. If `RESEND_API_KEY` is missing, the form returns a clear email-directly message rather than pretending the enquiry was delivered. On submit, the server sends the enquiry to email and the browser opens the company WhatsApp chat with the same details pre-filled. The visitor still needs to tap Send in WhatsApp; silent WhatsApp delivery requires the company’s Meta WhatsApp Business API credentials and is not available through a normal `wa.me` link.

## Source verification note

The services and products pages expose category lists rather than long item-level descriptions, so product cards use the source group names and explicitly say the selected item is listed under that group. Several older individual project pages exposed images and titles but no reliably readable project description during review; those detail pages intentionally show only the verified title, category, and real image gallery. The current contact page also exposed older additional phone/email details; this build uses the contact details specified as the project source of truth.

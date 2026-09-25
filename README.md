# MarketScope — Next.js Portfolio Demo

A production-style marketing website + blog for a **fictional** market-intelligence SaaS brand, built to demonstrate:

- **Next.js (App Router) + TypeScript + Tailwind CSS**
- Public website (landing, about, contact, privacy, terms)
- Blog with index and statically generated article pages
- Complete technical **SEO** setup
- **AdSense-ready** ad integration (placeholders until a publisher ID is configured)

> MarketScope is not a real company. All blog posts are sample content, figures are illustrative, and the site has **not** been approved by Google AdSense.

## Quick start

```bash
npm install
cp .env.example .env.local   # optional
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

No database is required — content lives in `src/lib/posts.ts`.

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx              Root layout, global metadata, fonts
│  ├─ (site)/layout.tsx       Public layout: Header, Footer, AdSense loader
│  ├─ (site)/page.tsx         Landing page
│  ├─ (site)/blog/            Blog index + [slug] article pages (SSG)
│  ├─ (site)/about|contact|privacy|terms/
│  ├─ sitemap.ts, robots.ts   Generated sitemap.xml / robots.txt
│  ├─ ads.txt/route.ts        Generated /ads.txt
│  ├─ icon.svg, apple-icon.tsx, opengraph-image.tsx
│  └─ not-found.tsx
├─ components/
│  ├─ ads/AdSlot.tsx          Reusable ad unit / placeholder
│  ├─ ads/AdSenseScript.tsx   Loads adsbygoogle.js only when enabled
│  └─ Header, Footer, PostCard, ArticleBody, JsonLd, ...
└─ lib/
   ├─ site.ts                 Site config & absolute URL helper
   ├─ seo.ts                  buildMetadata() helper
   ├─ adsense.ts              AdSense config & slot IDs
   ├─ posts.ts                Typed blog content
   └─ og.tsx                  Shared Open Graph image renderer
```

## SEO

- Per-page `title`, `description`, canonical URL, Open Graph and Twitter tags via `buildMetadata()`
- Title template `%s | MarketScope`; `metadataBase` from `NEXT_PUBLIC_SITE_URL`
- Generated OG images (site-wide + one per article)
- `sitemap.xml` and `robots.txt` generated from the content
- JSON-LD: `Organization`, `WebSite`, `Blog`, `BlogPosting`, `BreadcrumbList`
- Semantic HTML (`header`, `nav`, `main`, `article`, `aside`, `time`, `address`), skip link, one `h1` per page
- 404 page is `noindex`

## AdSense setup

1. Get the production domain approved in Google AdSense.
2. Set `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX`.
3. Set the slot IDs (`NEXT_PUBLIC_ADSENSE_SLOT_*`, see `.env.example`). Once ads are enabled, a placement without a slot ID renders nothing.
4. Redeploy.

Until then: no Google script is loaded, `<AdSlot />` shows labelled placeholders with a reserved height (no layout shift later), and `/ads.txt` returns a commented example. See `public/ads.txt.example`.

Ads appear only on content pages (home, blog index, articles) — not on contact, legal or 404 pages.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain for SEO URLs |
| `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` | Enables AdSense when set to a valid `ca-pub-` ID |
| `NEXT_PUBLIC_ADSENSE_SLOT_*` | Ad unit slot IDs |

## Limitations

- Contact form is client-side only (no email delivery).
- Legal pages are templates and need professional review before real use.
- No CMS; posts are edited in code.

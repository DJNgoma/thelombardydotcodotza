# The Lombardy Lifestyle Estate

Static Next.js website for The Lombardy Lifestyle Estate, built for Cloudflare Pages and the live domain [thelombardy.co.za](https://thelombardy.co.za).

## Overview

The site is a brochure-plus-operations website for owners, residents, trustees, tenants, and prospective residents. It focuses on:

- estate overview and living information
- notices and governance communication
- management and owner support
- rules, forms, levy guidance, and owner portal access

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- File-based MDX notices
- Static export for Cloudflare Pages

## Local development

```bash
npm install
npm run dev
```

Default local URL:

```bash
http://localhost:3000
```

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

## Project structure

```text
app/            Routes, metadata, manifest, icons, and global styles
components/     Layout, section, and UI components
content/        Estate data, amenities, trustees, nearby context, and MDX notices
lib/            Content loading, formatting, metadata, structured data, navigation
public/         Images and downloadable documents
```

## Content model

- Estate notices live in `content/news/*.mdx`
- Core site settings live in `content/site.ts`
- Trustees, amenities, nearby context, and estate gallery content live in `content/*.ts`
- The March 2026 newsletter PDF is served from `public/documents/the-lombardy-news-letter-march-2026.pdf`

## Deployment

The project uses static export via `next.config.ts`:

```ts
output: "export"
```

That means deployment is a fully static upload with no runtime server dependency.

### Cloudflare Pages

- Build system: `v3` when using Git integration
- Framework preset: `Next.js`
- Build command: `npm run build`
- Output directory: `out`
- Node.js version: use the repository pin from `.node-version` (`24.14.1`)

Direct deploy command:

```bash
npx wrangler pages deploy out --project-name thelombardy-co-za --branch main
```

The direct deploy path bypasses the Pages build image and uploads the prebuilt static export directly.

## Owner support paths

- Owner portal: [app.weconnectu.co.za](https://app.weconnectu.co.za)
- Primary support: `connect@landsdowne.co.za`
- Escalation: `trustees@thelombardy.co.za`

## Notes

- The site is intentionally static and does not use API routes.
- Estate imagery lives under `public/images/`.
- App icons and favicon assets live in `app/`.

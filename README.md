# The Lombardy Lifestyle Estate

Static Next.js App Router website for The Lombardy Lifestyle Estate, designed for Cloudflare Pages deployment.

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

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

## Content model

- Estate notices live in `content/news/*.mdx`
- Core site settings live in `content/site.ts`
- Trustees, amenities, and curated social feed entries live in `content/*.ts`
- The March 2026 newsletter PDF is served from `public/documents/the-lombardy-news-letter-march-2026.pdf`

## Cloudflare Pages

- Framework preset: `Next.js`
- Build command: `npm run build`
- Output directory: `out`
- Recommended Node version: `22`

This project uses `output: "export"` in `next.config.ts`, so deployment is a fully static export with no runtime server dependency.

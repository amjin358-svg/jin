# GVG Global Trade OS

Enterprise B2B / B2C international trading platform for **Global Vista Group**.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Feature-based architecture + Atomic Design components

## Modules (v1.0 foundation)

| # | Module | Route |
|---|---|---|
| 01 | Home | `/` |
| 02 | Products | `/products` |
| 03 | Categories | `/categories` |
| 04 | Brands | `/brands` |
| 05 | RFQ | `/rfq` |
| 06 | Quote | `/quotes` |
| 07 | Orders | `/orders` |
| 08 | Procurement | `/procurement` |
| 09 | Supplier Portal | `/portal/supplier` |
| 10 | Customer Portal | `/portal/customer` |
| 11 | Inventory | `/inventory` |
| 12 | Warehouses | `/warehouses` |
| 13 | Logistics | `/logistics` |
| 14 | Customs | `/customs` |
| 15 | CRM | `/crm` |
| 16 | CMS | `/cms` |
| 17 | News | `/news` |
| 18 | Analytics | `/analytics` |
| 19 | AI Assistant | `/ai` |
| 20 | Admin Dashboard | `/admin` |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — Turbopack development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — ESLint

## Architecture notes

- Server Components first
- Strict TypeScript (no `any`)
- Repository-ready domain types under `src/types`
- Demo catalog data under `src/data/mock`
- Reusable UI atoms/molecules/organisms under `src/components`
- Feature modules under `src/features`

## Roadmap integrations

Planned backend and infrastructure bindings:

- Supabase (Auth, PostgreSQL, Storage, Realtime, Edge Functions)
- Redis, Vercel, Cloudflare
- Sentry + OpenTelemetry
- OpenAI embeddings / vector search / OCR / translation
- GA4, Microsoft Clarity, Search Console, Bing Webmaster

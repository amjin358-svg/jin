# Architecture

## Overview

GVG Global Trade OS is an enterprise SaaS platform for B2B/B2C international trading.

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  Frontend   │────▶│     API      │────▶│  Supabase   │
│  (Next.js)  │     │  (BFF/Edge)  │     │  Postgres   │
└─────────────┘     └──────────────┘     └─────────────┘
       │                   │                    │
       ▼                   ▼                    ▼
  components/           backend/            database/
  frontend/             packages/           supabase/
```

## Layers

1. **Presentation** — `app/`, `components/`, `hooks/`, `styles/`
2. **Frontend domain** — `frontend/features/`, `frontend/data/`
3. **API / BFF** — `api/`, `backend/`
4. **Data** — `database/`, `supabase/`
5. **Shared** — `packages/`, `types/`, `lib/`
6. **Ops** — `docker/`, `scripts/`, `.github/`, `tests/`

## Platform modules

Home · Products · Categories · Brands · RFQ · Quote · Orders · Procurement · Supplier Portal · Customer Portal · Inventory · Warehouses · Logistics · Customs · CRM · CMS · News · Analytics · AI Assistant · Admin

## Principles

- Server Components first
- Strict TypeScript (no `any`)
- Feature-based modules
- Repository pattern for data access
- Atomic Design for UI
- WCAG AA accessibility
- SEO / GEO ready

# Formosa Pacific Advisory

Luxury bilingual real estate investment website for Taiwanese investors evaluating and acquiring Southern California properties.

## Features

- Chinese / English language toggle
- Multi-page React frontend
- Premium market-watch and advisory presentation
- Express backend for inquiries
- Resend email notification integration
- Admin dashboard for site config and inquiry review
- SEO and Open Graph metadata support
- Optional Google Analytics and Meta Pixel injection

## Tech stack

- React
- TypeScript
- Vite
- Express
- Resend

## Local development

1. Copy environment variables:

   ```bash
   cp .env.example .env
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start frontend and backend together:

   ```bash
   npm run dev
   ```

4. Open:

   - Frontend: `http://localhost:5173`
   - Backend health: `http://localhost:8787/api/health`
   - Admin: `http://localhost:5173/admin`

## Environment variables

- `PORT`: backend port
- `ADMIN_API_KEY`: required to use admin APIs from the admin dashboard
- `RESEND_API_KEY`: enables real email delivery
- `RESEND_FROM_EMAIL`: sender identity for inquiry notifications

## Admin usage

The admin dashboard is available at `/admin`.

Enter the same value as `ADMIN_API_KEY` to:

- review inbound inquiries
- update brand and contact settings
- update analytics IDs
- edit featured market-watch items

Site settings are stored in:

- `data/site-config.json`

Inquiry submissions are stored in:

- `data/inquiries.json`

## Production build

```bash
npm run build
```

The Express server serves the built frontend from `dist/` in production.

## Deployment

This repository includes:

- `vercel.json`
- `.env.example`

Recommended deployment:

1. Deploy to Vercel
2. Set environment variables from `.env.example`
3. Configure `RESEND_API_KEY` and `RESEND_FROM_EMAIL` for live email delivery
4. Set `ADMIN_API_KEY` to protect admin endpoints
5. Update `data/site-config.json` or use `/admin` after deployment

## Notes

- Public property cards are market-watch references, not exclusive listings.
- If no Resend key is provided, inquiries still save locally and email delivery is skipped.

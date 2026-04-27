# jin

## BlueRock local preview + API

### 1) Install

```bash
npm install
```

### 2) Configure environment

Create `.env` in project root:

```env
PORT=8081

# MLS
# mock | crmls | mlsgrid
MLS_PROVIDER=mock
MLS_API_KEY=
MLS_BASE_URL=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_CURRENCY=usd
```

Notes:
- `MLS_PROVIDER=mock` will return local demo records.
- For real MLS integration, set `MLS_PROVIDER=crmls` or `mlsgrid`, and fill `MLS_API_KEY` + `MLS_BASE_URL`.
- `MLS_BASE_URL` should be your vendor endpoint root. Server calls `${MLS_BASE_URL}/listings`.

### 3) Start API + static site

```bash
npm run dev
```

Then open:
- `http://127.0.0.1:8081/` (site)
- `http://127.0.0.1:8081/api/health` (health)

### API endpoints

- `GET /api/mls/listings?zip=90210&limit=6`
- `GET /api/health`
- `POST /api/payments/create-intent`
- `POST /api/payments/create-link`

`/api/payments/create-link` request body:

```json
{
  "paymentType": "commission",
  "amount": 2500,
  "description": "BlueRock service payment"
}
```

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Stripe = require("stripe");

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8081);

app.use(cors());
app.use(express.json());
app.use(express.static("."));

const mlsProvider = (process.env.MLS_PROVIDER || "mock").toLowerCase();
const mlsApiKey = process.env.MLS_API_KEY || "";
const mlsBaseUrl = process.env.MLS_BASE_URL || "";
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || "";
const stripeCurrency = (process.env.STRIPE_CURRENCY || "usd").toLowerCase();

const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;

const mockListings = [
  {
    id: "MLS-90001-01",
    title: "Juniper Estate",
    city: "Los Angeles",
    zip: "90001",
    price: 3450000,
    beds: 4,
    baths: 3.5,
    sqft: 4200,
    status: "active"
  },
  {
    id: "MLS-90210-02",
    title: "Beverly Crest View",
    city: "Beverly Hills",
    zip: "90210",
    price: 5120000,
    beds: 5,
    baths: 5,
    sqft: 5600,
    status: "active"
  },
  {
    id: "MLS-94107-03",
    title: "Mission Bay Loft",
    city: "San Francisco",
    zip: "94107",
    price: 1625000,
    beds: 2,
    baths: 2,
    sqft: 1480,
    status: "active"
  }
];

function filterListings(listings, query) {
  const minPrice = Number(query.minPrice || 0);
  const maxPrice = Number(query.maxPrice || Number.MAX_SAFE_INTEGER);
  const beds = Number(query.beds || 0);
  const baths = Number(query.baths || 0);
  const zip = (query.zip || "").trim();

  return listings.filter((item) => {
    if (zip && item.zip !== zip) return false;
    if (item.price < minPrice || item.price > maxPrice) return false;
    if (beds && item.beds < beds) return false;
    if (baths && item.baths < baths) return false;
    return true;
  });
}

async function fetchMlsListings(query) {
  if (mlsProvider === "mock" || !mlsApiKey || !mlsBaseUrl) {
    return filterListings(mockListings, query);
  }

  const endpoint = new URL("/listings", mlsBaseUrl);
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      endpoint.searchParams.set(key, String(value));
    }
  });

  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${mlsApiKey}`,
      Accept: "application/json"
    }
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`MLS fetch failed (${response.status}): ${body}`);
  }

  const payload = await response.json();
  const records = Array.isArray(payload?.records) ? payload.records : Array.isArray(payload) ? payload : [];
  return records;
}

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    mlsProvider,
    mlsConfigured: Boolean(mlsApiKey && mlsBaseUrl),
    stripeConfigured: Boolean(stripeSecretKey)
  });
});

app.get("/api/mls/listings", async (req, res) => {
  try {
    const listings = await fetchMlsListings(req.query);
    res.json({
      provider: mlsProvider,
      count: listings.length,
      listings
    });
  } catch (error) {
    res.status(502).json({
      error: "Unable to fetch MLS listings",
      detail: error.message
    });
  }
});

app.post("/api/payments/create-intent", async (req, res) => {
  try {
    if (!stripe) {
      return res.status(400).json({
        error: "Stripe is not configured. Set STRIPE_SECRET_KEY in .env."
      });
    }

    const { paymentType, amount, customerName, customerEmail, referenceId } = req.body || {};
    const normalizedType = (paymentType || "").toLowerCase();
    const supportedTypes = ["commission", "management_fee", "investment_fund"];

    if (!supportedTypes.includes(normalizedType)) {
      return res.status(400).json({
        error: "paymentType must be one of commission, management_fee, investment_fund"
      });
    }

    const amountNumber = Number(amount);
    if (!Number.isFinite(amountNumber) || amountNumber <= 0) {
      return res.status(400).json({ error: "amount must be a positive number" });
    }

    const amountInCents = Math.round(amountNumber * 100);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: stripeCurrency,
      receipt_email: customerEmail || undefined,
      metadata: {
        paymentType: normalizedType,
        customerName: customerName || "",
        referenceId: referenceId || ""
      },
      automatic_payment_methods: { enabled: true }
    });

    res.json({
      id: paymentIntent.id,
      clientSecret: paymentIntent.client_secret,
      amount: amountNumber,
      currency: stripeCurrency,
      paymentType: normalizedType,
      status: paymentIntent.status
    });
  } catch (error) {
    res.status(502).json({
      error: "Unable to create payment intent",
      detail: error.message
    });
  }
});

app.post("/api/payments/create-link", async (req, res) => {
  try {
    if (!stripe) {
      return res.status(400).json({
        error: "Stripe is not configured. Set STRIPE_SECRET_KEY in .env."
      });
    }

    const { paymentType, amount, description } = req.body || {};
    const normalizedType = (paymentType || "").toLowerCase();
    const supportedTypes = ["commission", "management_fee", "investment_fund"];
    if (!supportedTypes.includes(normalizedType)) {
      return res.status(400).json({
        error: "paymentType must be one of commission, management_fee, investment_fund"
      });
    }

    const amountNumber = Number(amount);
    if (!Number.isFinite(amountNumber) || amountNumber <= 0) {
      return res.status(400).json({ error: "amount must be a positive number" });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: stripeCurrency,
            product_data: {
              name: `BlueRock ${normalizedType.replace("_", " ")}`,
              description: description || "BlueRock service payment"
            },
            unit_amount: Math.round(amountNumber * 100)
          }
        }
      ],
      metadata: {
        paymentType: normalizedType
      },
      success_url: process.env.PAYMENT_SUCCESS_URL || "http://localhost:8081/?payment=success",
      cancel_url: process.env.PAYMENT_CANCEL_URL || "http://localhost:8081/?payment=cancel"
    });

    res.json({
      ok: true,
      paymentType: normalizedType,
      amount: amountNumber,
      checkoutUrl: session.url
    });
  } catch (error) {
    res.status(502).json({
      error: "Unable to create payment link",
      detail: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`BlueRock API server running at http://0.0.0.0:${port}`);
});

import express from 'express'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Resend } from 'resend'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const inquiriesFile = path.join(rootDir, 'data', 'inquiries.json')
const siteConfigFile = path.join(rootDir, 'data', 'site-config.json')
const app = express()
const port = Number(process.env.PORT ?? 8787)
const adminApiKey = process.env.ADMIN_API_KEY ?? 'local-admin-key'
const resendApiKey = process.env.RESEND_API_KEY ?? ''
const resendFromEmail = process.env.RESEND_FROM_EMAIL ?? 'Luxury Desk <onboarding@resend.dev>'

const resend = resendApiKey ? new Resend(resendApiKey) : null

app.use(express.json({ limit: '1mb' }))

function isLanguage(value) {
  return value === 'en' || value === 'zh'
}

function resolveLocale(body) {
  const { locale: rawLocale, language } = body ?? {}
  if (isLanguage(rawLocale)) {
    return rawLocale
  }

  return language === 'zh' ? 'zh' : 'en'
}

async function readJson(filePath, fallback) {
  try {
    const raw = await fs.readFile(filePath, 'utf8')
    return JSON.parse(raw)
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
      return fallback
    }

    throw error
  }
}

async function writeJson(filePath, value) {
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

function getPublicSiteConfig(config) {
  return {
    ...config,
    notifications: undefined,
    media: {
      heroImage: config.media?.heroImage ?? config.seo?.defaultOgImage ?? '',
      serviceImage: config.media?.serviceImage ?? config.seo?.defaultOgImage ?? '',
    },
  }
}

function requireAdmin(request, response, next) {
  const providedKey = request.headers['x-admin-key']
  if (providedKey !== adminApiKey) {
    response.status(401).json({ message: 'Unauthorized' })
    return
  }

  next()
}

async function sendInquiryNotification(siteConfig, inquiry) {
  const targetEmail =
    siteConfig.notifications?.inquiryNotificationEmail ||
    siteConfig.contact?.email ||
    'invest@formosapacific.com'
  if (!resend || !targetEmail) {
    return { delivered: false, provider: 'disabled' }
  }

  const localeLabel = inquiry.locale === 'zh' ? '中文' : 'English'
  await resend.emails.send({
    from: resendFromEmail,
    to: [targetEmail],
    subject: `New investment inquiry from ${inquiry.name}`,
    replyTo: inquiry.email,
    text: [
      `Name: ${inquiry.name}`,
      `Company: ${inquiry.company || '-'}`,
      `Email: ${inquiry.email}`,
      `Phone: ${inquiry.phone || '-'}`,
      `Budget: ${inquiry.budget}`,
      `Preferred markets: ${inquiry.location || '-'}`,
      `Timeline: ${inquiry.timeline || '-'}`,
      `Language: ${localeLabel}`,
      '',
      'Goals:',
      inquiry.goals,
    ].join('\n'),
  })

  return { delivered: true, provider: 'resend' }
}

app.get('/api/health', async (_request, response) => {
  const siteConfig = await readJson(siteConfigFile, {})
  response.json({
    ok: true,
    emailProvider: resend ? 'resend' : 'disabled',
    configuredBrand: siteConfig.brand?.name ?? 'Formosa Pacific Advisory',
  })
})

app.get('/api/site-config/public', async (_request, response) => {
  const config = await readJson(siteConfigFile, {})
  response.json(getPublicSiteConfig(config))
})

app.get('/api/admin/site-config', requireAdmin, async (_request, response) => {
  const config = await readJson(siteConfigFile, {})
  response.json(config)
})

app.put('/api/admin/site-config', requireAdmin, async (request, response) => {
  const nextConfig = request.body ?? {}
  await writeJson(siteConfigFile, nextConfig)
  response.json({ ok: true, config: nextConfig })
})

app.get('/api/admin/inquiries', requireAdmin, async (_request, response) => {
  const inquiries = await readJson(inquiriesFile, [])
  response.json(Array.isArray(inquiries) ? inquiries : [])
})

app.get('/api/admin/dashboard', requireAdmin, async (_request, response) => {
  const [config, inquiries] = await Promise.all([
    readJson(siteConfigFile, {}),
    readJson(inquiriesFile, []),
  ])

  response.json({
    config,
    inquiries: Array.isArray(inquiries) ? inquiries : [],
  })
})

app.post('/api/inquiries', async (request, response) => {
  const {
    name = '',
    company = '',
    email = '',
    phone = '',
    budget = '',
    location = '',
    timeline = '',
    goals = '',
    submittedAt = new Date().toISOString(),
  } = request.body ?? {}
  const locale = resolveLocale(request.body)

  if (!name || !email || !budget || !goals) {
    response.status(400).json({
      message:
        locale === 'zh' ? '請完整填寫姓名、Email、預算與投資需求。' : 'Please complete name, email, budget, and goals.',
    })
    return
  }

  const inquiry = {
    id: crypto.randomUUID(),
    name,
    company,
    email,
    phone,
    budget,
    location,
    timeline,
    goals,
    locale,
    submittedAt,
  }

  try {
    const existing = await readJson(inquiriesFile, [])
    const next = Array.isArray(existing) ? [...existing, inquiry] : [inquiry]
    await writeJson(inquiriesFile, next)

    const siteConfig = await readJson(siteConfigFile, {})
    const emailResult = await sendInquiryNotification(siteConfig, inquiry)

    response.status(201).json({
      message:
        locale === 'zh' ? '已收到您的諮詢，我們將盡快回覆。' : 'Your inquiry has been received. We will respond shortly.',
      emailDelivered: emailResult.delivered,
      provider: emailResult.provider,
    })
  } catch (error) {
    console.error('Failed to persist inquiry', error)
    response.status(500).json({
      message:
        locale === 'zh' ? '目前無法送出，請稍後再試。' : 'Unable to send right now. Please try again shortly.',
    })
  }
})

const distDir = path.join(rootDir, 'dist')
app.use(express.static(distDir))

app.use(async (request, response, next) => {
  if (request.path.startsWith('/api/')) {
    next()
    return
  }

  response.sendFile(path.join(distDir, 'index.html'), (error) => {
    if (error) {
      next()
    }
  })
})

app.listen(port, () => {
  console.log(`Site backend listening on http://localhost:${port}`)
})

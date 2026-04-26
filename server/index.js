import express from 'express'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const dataFile = path.join(rootDir, 'data', 'inquiries.json')
const app = express()
const port = Number(process.env.PORT ?? 8787)

app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({ ok: true })
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
    locale: rawLocale,
    language,
    submittedAt = new Date().toISOString(),
  } = request.body ?? {}
  const locale = rawLocale === 'zh' || rawLocale === 'en' ? rawLocale : language === 'zh' ? 'zh' : 'en'

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
    const existingRaw = await fs.readFile(dataFile, 'utf8')
    const existing = JSON.parse(existingRaw)
    const next = Array.isArray(existing) ? [...existing, inquiry] : [inquiry]
    await fs.writeFile(dataFile, `${JSON.stringify(next, null, 2)}\n`, 'utf8')

    response.status(201).json({
      message:
        locale === 'zh' ? '已收到您的諮詢，我們將盡快回覆。' : 'Your inquiry has been received. We will respond shortly.',
    })
  } catch (error) {
    console.error('Failed to persist inquiry', error)
    response.status(500).json({
      message:
        locale === 'zh' ? '目前無法送出，請稍後再試。' : 'Unable to send right now. Please try again shortly.',
    })
  }
})

app.listen(port, () => {
  console.log(`Inquiry API listening on http://localhost:${port}`)
})

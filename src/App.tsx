import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { buildRuntimeContent, defaultSiteConfig } from './content/runtimeContent'
import { getStoredLanguage, persistLanguage } from './lib/language'
import { applyTracking } from './lib/tracking'
import MarketPage from './pages/MarketPage'
import AdminPage from './pages/AdminPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import OpportunitiesPage from './pages/OpportunitiesPage'
import ServicesPage from './pages/ServicesPage'
import type { Language, SiteRuntimeConfig } from './types'

function App() {
  const [language, setLanguage] = useState<Language>(() => getStoredLanguage())
  const [config, setConfig] = useState<SiteRuntimeConfig>(defaultSiteConfig)
  const [configLoaded, setConfigLoaded] = useState(false)

  useEffect(() => {
    persistLanguage(language)
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-Hant'
  }, [language])

  useEffect(() => {
    let cancelled = false

    async function loadConfig() {
      try {
        const response = await fetch('/api/site-config/public')
        if (!response.ok) {
          throw new Error('Unable to load public site config')
        }

        const payload = (await response.json()) as SiteRuntimeConfig
        if (!cancelled) {
          setConfig((current: SiteRuntimeConfig) => ({
            ...current,
            ...payload,
            brand: {
              ...current.brand,
              ...payload.brand,
            },
            contact: {
              ...current.contact,
              ...payload.contact,
            },
            seo: {
              ...current.seo,
              ...payload.seo,
            },
            analytics: {
              ...current.analytics,
              ...payload.analytics,
            },
            hero: {
              ...current.hero,
              ...payload.hero,
            },
            marketWatch: payload.marketWatch?.length ? payload.marketWatch : current.marketWatch,
          }))
        }
      } catch (error) {
        console.error('Failed to load site config', error)
      } finally {
        if (!cancelled) {
          setConfigLoaded(true)
        }
      }
    }

    loadConfig()

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    applyTracking(config)
  }, [config])

  const content = buildRuntimeContent(language, config)

  useEffect(() => {
    const title = config.seo.defaultTitle[language]
    const description = config.seo.defaultDescription[language]
    const ogImage = config.seo.defaultOgImage
    const siteUrl = config.seo.siteUrl

    document.title = title

    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) {
      descriptionTag.setAttribute('content', description)
    }

    const ogTitleTag = document.querySelector('meta[property="og:title"]')
    if (ogTitleTag) {
      ogTitleTag.setAttribute('content', title)
    }

    const ogDescriptionTag = document.querySelector('meta[property="og:description"]')
    if (ogDescriptionTag) {
      ogDescriptionTag.setAttribute('content', description)
    }

    const ogImageTag = document.querySelector('meta[property="og:image"]')
    if (ogImageTag) {
      ogImageTag.setAttribute('content', ogImage)
    }

    const ogUrlTag = document.querySelector('meta[property="og:url"]')
    if (ogUrlTag) {
      ogUrlTag.setAttribute('content', siteUrl)
    }
  }, [config, language])

  return (
    <Layout
      content={content}
      language={language}
      onToggleLanguage={() => setLanguage((current) => (current === 'en' ? 'zh' : 'en'))}
    >
      <Routes>
        <Route path="/" element={<HomePage content={content} />} />
        <Route path="/opportunities" element={<OpportunitiesPage content={content} />} />
        <Route path="/services" element={<ServicesPage content={content} />} />
        <Route path="/market" element={<MarketPage content={content} />} />
        <Route path="/contact" element={<ContactPage content={content} language={language} />} />
        <Route path="/admin" element={<AdminPage onConfigSaved={setConfig} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {configLoaded ? null : null}
    </Layout>
  )
}

export default App

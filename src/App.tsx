import { useEffect, useMemo, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { siteContent } from './content/siteContent'
import { getStoredLanguage, persistLanguage } from './lib/language'
import MarketPage from './pages/MarketPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import OpportunitiesPage from './pages/OpportunitiesPage'
import ServicesPage from './pages/ServicesPage'
import type { Language } from './types'

function App() {
  const [language, setLanguage] = useState<Language>(() => getStoredLanguage())

  useEffect(() => {
    persistLanguage(language)
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-Hant'
  }, [language])

  const content = useMemo(() => siteContent[language], [language])

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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App

import type { SiteRuntimeConfig } from '../types'

function appendScriptOnce(id: string, setup: () => HTMLScriptElement) {
  const existing = document.getElementById(id)
  if (existing) {
    return existing as HTMLScriptElement
  }

  const script = setup()
  script.id = id
  document.head.appendChild(script)
  return script
}

export function applyDocumentMetadata(config: SiteRuntimeConfig, language: 'en' | 'zh', pathname: string) {
  if (typeof document === 'undefined') {
    return
  }

  const title = config.seo.defaultTitle[language]
  const description = config.seo.defaultDescription[language]

  document.title = title

  const setMeta = (selector: string, attr: 'name' | 'property', value: string) => {
    let element = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${selector}"]`)
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attr, selector)
      document.head.appendChild(element)
    }
    element.setAttribute('content', value)
  }

  setMeta('description', 'name', description)
  setMeta('og:title', 'property', title)
  setMeta('og:description', 'property', description)
  setMeta('og:image', 'property', config.seo.defaultOgImage)
  setMeta('og:url', 'property', `${config.seo.siteUrl}${pathname}`)
  setMeta('twitter:card', 'name', 'summary_large_image')
  setMeta('twitter:title', 'name', title)
  setMeta('twitter:description', 'name', description)
  setMeta('twitter:image', 'name', config.seo.defaultOgImage)
}

export function applyTracking(config: SiteRuntimeConfig) {
  if (typeof document === 'undefined') {
    return
  }

  const gaMeasurementId = config.analytics.googleAnalyticsId
  const metaPixelId = config.analytics.metaPixelId

  if (gaMeasurementId) {
    appendScriptOnce('ga-loader', () => {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`
      return script
    })

    appendScriptOnce('ga-inline', () => {
      const script = document.createElement('script')
      script.text =
        "window.dataLayer = window.dataLayer || [];" +
        "function gtag(){dataLayer.push(arguments);}" +
        "gtag('js', new Date());" +
        `gtag('config', '${gaMeasurementId}');`
      return script
    })
  }

  if (metaPixelId) {
    appendScriptOnce('meta-pixel-inline', () => {
      const script = document.createElement('script')
      script.text =
        "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?" +
        "n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;" +
        "n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;" +
        "t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}" +
        "(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');" +
        `fbq('init', '${metaPixelId}');fbq('track', 'PageView');`
      return script
    })
  }
}

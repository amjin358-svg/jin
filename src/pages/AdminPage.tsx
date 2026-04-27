import { FormEvent, useEffect, useMemo, useState } from 'react'
import {
  fetchAdminDashboard,
  loginAdmin,
  logoutAdmin,
  updateSiteConfig,
} from '../lib/adminApi'
import type {
  AdminDashboardResponse,
  HeroLocaleContent,
  SiteConfigFile,
  SiteConfigMarketWatchItem,
} from '../types'

type AdminPageProps = {
  onConfigSaved: (config: SiteConfigFile) => void
}

type AdminStatus = 'idle' | 'loading' | 'saving' | 'error' | 'success'

const emptyMarketWatchItem = (): SiteConfigMarketWatchItem => ({
  region: { en: '', zh: '' },
  address: '',
  price: '',
  specs: ['', '', ''],
  source: '',
  sourceUrl: '',
  status: { en: '', zh: '' },
  summary: { en: '', zh: '' },
  investmentAngle: { en: '', zh: '' },
  visualTag: '',
  image: '',
})

function AdminPage({ onConfigSaved }: AdminPageProps) {
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [payload, setPayload] = useState<AdminDashboardResponse | null>(null)
  const [draft, setDraft] = useState<SiteConfigFile | null>(null)
  const [status, setStatus] = useState<AdminStatus>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    let active = true

    async function load() {
      try {
        const nextPayload = await fetchAdminDashboard()
        if (!active) return
        setPayload(nextPayload)
        setDraft(nextPayload.config)
        setAuthenticated(true)
        setStatus('idle')
      } catch (error) {
        if (!active) return
        setAuthenticated(false)
        setStatus('idle')
        setMessage(error instanceof Error ? error.message : '')
      }
    }

    void load()

    return () => {
      active = false
    }
  }, [])

  const inquiryRows = useMemo(() => payload?.inquiries ?? [], [payload])

  function updateField<T extends keyof SiteConfigFile>(key: T, value: SiteConfigFile[T]) {
    setDraft((current) => (current ? { ...current, [key]: value } : current))
  }

  function updateHero(language: 'en' | 'zh', field: keyof HeroLocaleContent, value: string) {
    setDraft((current) =>
      current
        ? {
            ...current,
            hero: {
              ...current.hero,
              [language]: {
                ...current.hero[language],
                [field]: value,
              },
            },
          }
        : current,
    )
  }

  function updateMarketWatch(
    index: number,
    updater: (item: SiteConfigMarketWatchItem) => SiteConfigMarketWatchItem,
  ) {
    setDraft((current) => {
      if (!current) return current
      const nextItems = [...(current.marketWatch ?? [])]
      nextItems[index] = updater(nextItems[index] ?? emptyMarketWatchItem())
      return {
        ...current,
        marketWatch: nextItems,
      }
    })
  }

  function addMarketWatch() {
    setDraft((current) =>
      current
        ? {
            ...current,
            marketWatch: [...(current.marketWatch ?? []), emptyMarketWatchItem()],
          }
        : current,
    )
  }

  function removeMarketWatch(index: number) {
    setDraft((current) =>
      current
        ? {
            ...current,
            marketWatch: (current.marketWatch ?? []).filter((_, itemIndex) => itemIndex !== index),
          }
        : current,
    )
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      await loginAdmin(password)
      const nextPayload = await fetchAdminDashboard()
      setPayload(nextPayload)
      setDraft(nextPayload.config)
      setAuthenticated(true)
      setPassword('')
      setStatus('success')
      setMessage('Logged in successfully.')
    } catch (error) {
      setAuthenticated(false)
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Unable to log in.')
    }
  }

  async function handleLogout() {
    await logoutAdmin().catch(() => undefined)
    setAuthenticated(false)
    setPayload(null)
    setDraft(null)
    setStatus('idle')
    setMessage('Logged out.')
  }

  async function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!draft) return

    setStatus('saving')
    setMessage('')

    try {
      const result = await updateSiteConfig(draft)
      setDraft(result.config)
      setPayload((current) => (current ? { ...current, config: result.config } : current))
      onConfigSaved(result.config)
      setStatus('success')
      setMessage('Configuration saved successfully.')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Failed to save configuration.')
    }
  }

  if (!authenticated || !draft) {
    return (
      <section className="section page-section admin-page">
        <div className="glass-card admin-login-card">
          <div className="section-label">Admin login</div>
          <h1 className="page-title">Protected management console</h1>
          <p>Sign in with the admin password configured on the server.</p>
          <form className="admin-login-form" onSubmit={handleLogin}>
            <label>
              <span>Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter admin password"
              />
            </label>
            <div className="form-actions">
              <button className="btn btn--primary" type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Signing in...' : 'Sign in'}
              </button>
              {message ? <p className={`form-message form-message--${status}`}>{message}</p> : null}
            </div>
          </form>
        </div>
      </section>
    )
  }

  return (
    <section className="section page-section admin-page">
      <div className="section-intro">
        <div>
          <div className="section-label">Admin</div>
          <h1 className="page-title">Brand, content, and inquiry management</h1>
        </div>
        <p>
          Update public branding, hero messaging, SEO, media assets, and live market-watch cards,
          then review inbound investor inquiries.
        </p>
      </div>

      <div className="admin-layout">
        <form className="glass-card admin-form" onSubmit={handleSave}>
          <div className="admin-section">
            <h2>Brand and contact</h2>
            <div className="admin-grid">
              <label>
                <span>Brand name</span>
                <input
                  type="text"
                  value={draft.brand.name}
                  onChange={(event) => updateField('brand', { ...draft.brand, name: event.target.value })}
                />
              </label>

              <label>
                <span>Legal name</span>
                <input
                  type="text"
                  value={draft.brand.legalName}
                  onChange={(event) =>
                    updateField('brand', { ...draft.brand, legalName: event.target.value })
                  }
                />
              </label>

              <label>
                <span>Logo mark</span>
                <input
                  type="text"
                  value={draft.brand.logoMark}
                  onChange={(event) =>
                    updateField('brand', { ...draft.brand, logoMark: event.target.value })
                  }
                />
              </label>

              <label>
                <span>Contact email</span>
                <input
                  type="email"
                  value={draft.contact.email}
                  onChange={(event) =>
                    updateField('contact', { ...draft.contact, email: event.target.value })
                  }
                />
              </label>

              <label>
                <span>Contact phone</span>
                <input
                  type="text"
                  value={draft.contact.phone}
                  onChange={(event) =>
                    updateField('contact', { ...draft.contact, phone: event.target.value })
                  }
                />
              </label>

              <label>
                <span>WhatsApp</span>
                <input
                  type="text"
                  value={draft.contact.whatsapp}
                  onChange={(event) =>
                    updateField('contact', { ...draft.contact, whatsapp: event.target.value })
                  }
                />
              </label>

              <label>
                <span>LINE ID</span>
                <input
                  type="text"
                  value={draft.contact.line}
                  onChange={(event) =>
                    updateField('contact', { ...draft.contact, line: event.target.value })
                  }
                />
              </label>

              <label>
                <span>Notification email</span>
                <input
                  type="email"
                  value={draft.notifications.inquiryNotificationEmail}
                  onChange={(event) =>
                    updateField('notifications', {
                      ...draft.notifications,
                      inquiryNotificationEmail: event.target.value,
                    })
                  }
                />
              </label>

              <label className="admin-grid__full">
                <span>English tagline</span>
                <input
                  type="text"
                  value={draft.brand.tagline.en}
                  onChange={(event) =>
                    updateField('brand', {
                      ...draft.brand,
                      tagline: { ...draft.brand.tagline, en: event.target.value },
                    })
                  }
                />
              </label>

              <label className="admin-grid__full">
                <span>中文標語</span>
                <input
                  type="text"
                  value={draft.brand.tagline.zh}
                  onChange={(event) =>
                    updateField('brand', {
                      ...draft.brand,
                      tagline: { ...draft.brand.tagline, zh: event.target.value },
                    })
                  }
                />
              </label>
            </div>
          </div>

          <div className="admin-section">
            <h2>SEO, analytics, and media</h2>
            <div className="admin-grid">
              <label className="admin-grid__full">
                <span>Site URL</span>
                <input
                  type="url"
                  value={draft.seo.siteUrl}
                  onChange={(event) =>
                    updateField('seo', { ...draft.seo, siteUrl: event.target.value })
                  }
                />
              </label>

              <label className="admin-grid__full">
                <span>English SEO title</span>
                <input
                  type="text"
                  value={draft.seo.defaultTitle.en}
                  onChange={(event) =>
                    updateField('seo', {
                      ...draft.seo,
                      defaultTitle: { ...draft.seo.defaultTitle, en: event.target.value },
                    })
                  }
                />
              </label>

              <label className="admin-grid__full">
                <span>中文 SEO 標題</span>
                <input
                  type="text"
                  value={draft.seo.defaultTitle.zh}
                  onChange={(event) =>
                    updateField('seo', {
                      ...draft.seo,
                      defaultTitle: { ...draft.seo.defaultTitle, zh: event.target.value },
                    })
                  }
                />
              </label>

              <label className="admin-grid__full">
                <span>English SEO description</span>
                <textarea
                  rows={3}
                  value={draft.seo.defaultDescription.en}
                  onChange={(event) =>
                    updateField('seo', {
                      ...draft.seo,
                      defaultDescription: {
                        ...draft.seo.defaultDescription,
                        en: event.target.value,
                      },
                    })
                  }
                />
              </label>

              <label className="admin-grid__full">
                <span>中文 SEO 描述</span>
                <textarea
                  rows={3}
                  value={draft.seo.defaultDescription.zh}
                  onChange={(event) =>
                    updateField('seo', {
                      ...draft.seo,
                      defaultDescription: {
                        ...draft.seo.defaultDescription,
                        zh: event.target.value,
                      },
                    })
                  }
                />
              </label>

              <label className="admin-grid__full">
                <span>Default OG image</span>
                <input
                  type="url"
                  value={draft.seo.defaultOgImage}
                  onChange={(event) =>
                    updateField('seo', { ...draft.seo, defaultOgImage: event.target.value })
                  }
                />
              </label>

              <label className="admin-grid__full">
                <span>Hero image</span>
                <input
                  type="url"
                  value={draft.media.heroImage}
                  onChange={(event) =>
                    updateField('media', { ...draft.media, heroImage: event.target.value })
                  }
                />
              </label>

              <label className="admin-grid__full">
                <span>Service image</span>
                <input
                  type="url"
                  value={draft.media.serviceImage}
                  onChange={(event) =>
                    updateField('media', { ...draft.media, serviceImage: event.target.value })
                  }
                />
              </label>

              <label className="admin-grid__full">
                <span>Google Analytics ID</span>
                <input
                  type="text"
                  value={draft.analytics.googleAnalyticsId}
                  onChange={(event) =>
                    updateField('analytics', {
                      ...draft.analytics,
                      googleAnalyticsId: event.target.value,
                    })
                  }
                />
              </label>

              <label className="admin-grid__full">
                <span>Meta Pixel ID</span>
                <input
                  type="text"
                  value={draft.analytics.metaPixelId}
                  onChange={(event) =>
                    updateField('analytics', {
                      ...draft.analytics,
                      metaPixelId: event.target.value,
                    })
                  }
                />
              </label>
            </div>
          </div>

          <div className="admin-section">
            <h2>Hero copy</h2>
            <div className="admin-grid">
              <label className="admin-grid__full">
                <span>Hero eyebrow (EN)</span>
                <input
                  type="text"
                  value={draft.hero.en.eyebrow}
                  onChange={(event) => updateHero('en', 'eyebrow', event.target.value)}
                />
              </label>
              <label className="admin-grid__full">
                <span>Hero title (EN)</span>
                <input
                  type="text"
                  value={draft.hero.en.title}
                  onChange={(event) => updateHero('en', 'title', event.target.value)}
                />
              </label>
              <label className="admin-grid__full">
                <span>Hero highlight (EN)</span>
                <input
                  type="text"
                  value={draft.hero.en.highlight}
                  onChange={(event) => updateHero('en', 'highlight', event.target.value)}
                />
              </label>
              <label className="admin-grid__full">
                <span>Hero description (EN)</span>
                <textarea
                  rows={3}
                  value={draft.hero.en.description}
                  onChange={(event) => updateHero('en', 'description', event.target.value)}
                />
              </label>

              <label className="admin-grid__full">
                <span>Hero eyebrow (ZH)</span>
                <input
                  type="text"
                  value={draft.hero.zh.eyebrow}
                  onChange={(event) => updateHero('zh', 'eyebrow', event.target.value)}
                />
              </label>
              <label className="admin-grid__full">
                <span>Hero title (ZH)</span>
                <input
                  type="text"
                  value={draft.hero.zh.title}
                  onChange={(event) => updateHero('zh', 'title', event.target.value)}
                />
              </label>
              <label className="admin-grid__full">
                <span>Hero highlight (ZH)</span>
                <input
                  type="text"
                  value={draft.hero.zh.highlight}
                  onChange={(event) => updateHero('zh', 'highlight', event.target.value)}
                />
              </label>
              <label className="admin-grid__full">
                <span>Hero description (ZH)</span>
                <textarea
                  rows={3}
                  value={draft.hero.zh.description}
                  onChange={(event) => updateHero('zh', 'description', event.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="admin-section">
            <div className="admin-section__header">
              <h2>Market watch cards</h2>
              <button className="btn btn--secondary" type="button" onClick={addMarketWatch}>
                Add card
              </button>
            </div>

            <div className="admin-card-list">
              {(draft.marketWatch ?? []).map((item, index) => (
                <article className="glass-card admin-market-card" key={`${item.address}-${index}`}>
                  <div className="admin-section__header">
                    <h3>Card {index + 1}</h3>
                    <button
                      className="btn btn--secondary"
                      type="button"
                      onClick={() => removeMarketWatch(index)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="admin-grid">
                    <label>
                      <span>Address</span>
                      <input
                        type="text"
                        value={item.address}
                        onChange={(event) =>
                          updateMarketWatch(index, (current) => ({
                            ...current,
                            address: event.target.value,
                          }))
                        }
                      />
                    </label>
                    <label>
                      <span>Price</span>
                      <input
                        type="text"
                        value={item.price}
                        onChange={(event) =>
                          updateMarketWatch(index, (current) => ({
                            ...current,
                            price: event.target.value,
                          }))
                        }
                      />
                    </label>
                    <label>
                      <span>Source</span>
                      <input
                        type="text"
                        value={item.source}
                        onChange={(event) =>
                          updateMarketWatch(index, (current) => ({
                            ...current,
                            source: event.target.value,
                          }))
                        }
                      />
                    </label>
                    <label>
                      <span>Source URL</span>
                      <input
                        type="url"
                        value={item.sourceUrl}
                        onChange={(event) =>
                          updateMarketWatch(index, (current) => ({
                            ...current,
                            sourceUrl: event.target.value,
                          }))
                        }
                      />
                    </label>
                    <label>
                      <span>Visual tag</span>
                      <input
                        type="text"
                        value={item.visualTag}
                        onChange={(event) =>
                          updateMarketWatch(index, (current) => ({
                            ...current,
                            visualTag: event.target.value,
                          }))
                        }
                      />
                    </label>
                    <label>
                      <span>Image URL</span>
                      <input
                        type="url"
                        value={item.image}
                        onChange={(event) =>
                          updateMarketWatch(index, (current) => ({
                            ...current,
                            image: event.target.value,
                          }))
                        }
                      />
                    </label>

                    <label className="admin-grid__full">
                      <span>Region (EN)</span>
                      <input
                        type="text"
                        value={item.region.en}
                        onChange={(event) =>
                          updateMarketWatch(index, (current) => ({
                            ...current,
                            region: { ...current.region, en: event.target.value },
                          }))
                        }
                      />
                    </label>
                    <label className="admin-grid__full">
                      <span>Region (ZH)</span>
                      <input
                        type="text"
                        value={item.region.zh}
                        onChange={(event) =>
                          updateMarketWatch(index, (current) => ({
                            ...current,
                            region: { ...current.region, zh: event.target.value },
                          }))
                        }
                      />
                    </label>

                    {item.specs.map((spec, specIndex) => (
                      <label key={`${item.address}-spec-${specIndex}`}>
                        <span>Spec {specIndex + 1}</span>
                        <input
                          type="text"
                          value={spec}
                          onChange={(event) =>
                            updateMarketWatch(index, (current) => {
                              const nextSpecs = [...current.specs]
                              nextSpecs[specIndex] = event.target.value
                              return {
                                ...current,
                                specs: nextSpecs,
                              }
                            })
                          }
                        />
                      </label>
                    ))}

                    <label className="admin-grid__full">
                      <span>Status (EN)</span>
                      <input
                        type="text"
                        value={item.status.en}
                        onChange={(event) =>
                          updateMarketWatch(index, (current) => ({
                            ...current,
                            status: { ...current.status, en: event.target.value },
                          }))
                        }
                      />
                    </label>
                    <label className="admin-grid__full">
                      <span>Status (ZH)</span>
                      <input
                        type="text"
                        value={item.status.zh}
                        onChange={(event) =>
                          updateMarketWatch(index, (current) => ({
                            ...current,
                            status: { ...current.status, zh: event.target.value },
                          }))
                        }
                      />
                    </label>

                    <label className="admin-grid__full">
                      <span>Summary (EN)</span>
                      <textarea
                        rows={3}
                        value={item.summary.en}
                        onChange={(event) =>
                          updateMarketWatch(index, (current) => ({
                            ...current,
                            summary: { ...current.summary, en: event.target.value },
                          }))
                        }
                      />
                    </label>
                    <label className="admin-grid__full">
                      <span>Summary (ZH)</span>
                      <textarea
                        rows={3}
                        value={item.summary.zh}
                        onChange={(event) =>
                          updateMarketWatch(index, (current) => ({
                            ...current,
                            summary: { ...current.summary, zh: event.target.value },
                          }))
                        }
                      />
                    </label>

                    <label className="admin-grid__full">
                      <span>Investment angle (EN)</span>
                      <textarea
                        rows={3}
                        value={item.investmentAngle.en}
                        onChange={(event) =>
                          updateMarketWatch(index, (current) => ({
                            ...current,
                            investmentAngle: {
                              ...current.investmentAngle,
                              en: event.target.value,
                            },
                          }))
                        }
                      />
                    </label>
                    <label className="admin-grid__full">
                      <span>Investment angle (ZH)</span>
                      <textarea
                        rows={3}
                        value={item.investmentAngle.zh}
                        onChange={(event) =>
                          updateMarketWatch(index, (current) => ({
                            ...current,
                            investmentAngle: {
                              ...current.investmentAngle,
                              zh: event.target.value,
                            },
                          }))
                        }
                      />
                    </label>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button className="btn btn--primary" type="submit" disabled={status === 'saving'}>
              {status === 'saving' ? 'Saving...' : 'Save settings'}
            </button>
            <button className="btn btn--secondary" type="button" onClick={handleLogout}>
              Log out
            </button>
            {message ? <p className={`form-message form-message--${status}`}>{message}</p> : null}
          </div>
        </form>

        <div className="glass-card admin-inquiries">
          <h2>Investor inquiries</h2>
          <p className="market-note">{inquiryRows.length} submissions captured</p>
          <div className="admin-inquiry-list">
            {inquiryRows.map((item) => (
              <article className="admin-inquiry-card" key={item.id}>
                <div className="admin-inquiry-top">
                  <strong>{item.name}</strong>
                  <span>{new Date(item.submittedAt).toLocaleString()}</span>
                </div>
                <p>{item.email}</p>
                <p>{item.budget}</p>
                <p>{item.location}</p>
                <p>{item.goals}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminPage

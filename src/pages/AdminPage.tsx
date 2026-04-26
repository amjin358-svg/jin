import { FormEvent, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchAdminDashboard, updateSiteConfig } from '../lib/adminApi'
import type { AdminDashboardResponse, SiteConfigFile } from '../types'

type AdminPageProps = {
  onConfigSaved: (config: SiteConfigFile) => void
}

function AdminPage({ onConfigSaved }: AdminPageProps) {
  const [searchParams] = useSearchParams()
  const adminKey = searchParams.get('key') ?? ''
  const [payload, setPayload] = useState<AdminDashboardResponse | null>(null)
  const [draft, setDraft] = useState<SiteConfigFile | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'saving' | 'error' | 'success'>('idle')
  const [message, setMessage] = useState('')

  useEffect(() => {
    let active = true

    async function load() {
      if (!adminKey) {
        setStatus('error')
        setMessage('Admin key is required in the URL, e.g. /admin?key=YOUR_KEY')
        return
      }

      setStatus('loading')
      try {
        const nextPayload = await fetchAdminDashboard(adminKey)
        if (!active) return
        setPayload(nextPayload)
        setDraft(nextPayload.config)
        setStatus('idle')
      } catch (error) {
        if (!active) return
        setStatus('error')
        setMessage(error instanceof Error ? error.message : 'Unable to load admin data.')
      }
    }

    void load()

    return () => {
      active = false
    }
  }, [adminKey])

  const inquiryRows = useMemo(() => payload?.inquiries ?? [], [payload])

  function updateField<T extends keyof SiteConfigFile>(key: T, value: SiteConfigFile[T]) {
    setDraft((current) => (current ? { ...current, [key]: value } : current))
  }

  async function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!draft) return

    setStatus('saving')
    setMessage('')

    try {
      const result = await updateSiteConfig(adminKey, draft)
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

  if (!adminKey) {
    return (
      <section className="section page-section">
        <div className="glass-card">
          <h1 className="page-title">Admin access</h1>
          <p>Add an admin key in the URL query string, for example: /admin?key=YOUR_KEY</p>
        </div>
      </section>
    )
  }

  if (!draft) {
    return (
      <section className="section page-section">
        <div className="glass-card">
          <h1 className="page-title">Admin dashboard</h1>
          <p>{status === 'error' ? message : 'Loading admin data...'}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="section page-section admin-page">
      <div className="section-intro">
        <div>
          <div className="section-label">Admin</div>
          <h1 className="page-title">Brand, contact, and inquiry management</h1>
        </div>
        <p>Update public branding settings and review inbound investor inquiries from one place.</p>
      </div>

      <div className="admin-layout">
        <form className="glass-card admin-form" onSubmit={handleSave}>
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

          <div className="form-actions">
            <button className="btn btn--primary" type="submit" disabled={status === 'saving'}>
              {status === 'saving' ? 'Saving...' : 'Save settings'}
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

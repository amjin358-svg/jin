import { FormEvent, useState } from 'react'
import type { ContactFieldSet, Language, SiteContent } from '../types'

type InquiryFormProps = {
  content: SiteContent['contact']
  language: Language
}

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error'

const initialForm: ContactFieldSet = {
  name: '',
  company: '',
  email: '',
  phone: '',
  budget: '',
  location: '',
  timeline: '',
  goals: '',
}

function InquiryForm({ content, language }: InquiryFormProps) {
  const [form, setForm] = useState<ContactFieldSet>(initialForm)
  const [status, setStatus] = useState<SubmissionState>('idle')
  const [message, setMessage] = useState('')

  function updateField<K extends keyof ContactFieldSet>(key: K, value: ContactFieldSet[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setMessage('')

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          language,
        }),
      })

      const payload = (await response.json()) as { message?: string }
      if (!response.ok) {
        throw new Error(payload.message ?? content.feedback.error)
      }

      setStatus('success')
      setMessage(payload.message ?? content.feedback.success)
      setForm(initialForm)
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : content.feedback.error)
    }
  }

  return (
    <form className="inquiry-form glass-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>{content.formLabels.name}</span>
          <input
            required
            type="text"
            value={form.name}
            placeholder={content.placeholders.name}
            onChange={(event) => updateField('name', event.target.value)}
          />
        </label>

        <label>
          <span>{content.formLabels.company}</span>
          <input
            type="text"
            value={form.company}
            placeholder={content.placeholders.company}
            onChange={(event) => updateField('company', event.target.value)}
          />
        </label>

        <label>
          <span>{content.formLabels.email}</span>
          <input
            required
            type="email"
            value={form.email}
            placeholder={content.placeholders.email}
            onChange={(event) => updateField('email', event.target.value)}
          />
        </label>

        <label>
          <span>{content.formLabels.phone}</span>
          <input
            type="tel"
            value={form.phone}
            placeholder={content.placeholders.phone}
            onChange={(event) => updateField('phone', event.target.value)}
          />
        </label>

        <label>
          <span>{content.formLabels.budget}</span>
          <input
            required
            type="text"
            value={form.budget}
            placeholder={content.placeholders.budget}
            onChange={(event) => updateField('budget', event.target.value)}
          />
        </label>

        <label>
          <span>{content.formLabels.location}</span>
          <input
            type="text"
            value={form.location}
            placeholder={content.placeholders.location}
            onChange={(event) => updateField('location', event.target.value)}
          />
        </label>

        <label className="form-grid__full">
          <span>{content.formLabels.timeline}</span>
          <input
            type="text"
            value={form.timeline}
            placeholder={content.placeholders.timeline}
            onChange={(event) => updateField('timeline', event.target.value)}
          />
        </label>

        <label className="form-grid__full">
          <span>{content.formLabels.goals}</span>
          <textarea
            required
            rows={5}
            value={form.goals}
            placeholder={content.placeholders.goals}
            onChange={(event) => updateField('goals', event.target.value)}
          />
        </label>
      </div>

      <div className="form-actions">
        <button className="btn btn--primary" disabled={status === 'submitting'} type="submit">
          {status === 'submitting' ? content.submitting : content.submit}
        </button>
        {message ? <p className={`form-message form-message--${status}`}>{message}</p> : null}
      </div>
    </form>
  )
}

export default InquiryForm

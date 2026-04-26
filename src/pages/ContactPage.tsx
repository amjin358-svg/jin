import InquiryForm from '../components/InquiryForm'
import type { Language, SiteContent } from '../types'

type ContactPageProps = {
  content: SiteContent
  language: Language
}

function ContactPage({ content, language }: ContactPageProps) {
  return (
    <section className="section page-section">
      <div className="section-intro">
        <div>
          <div className="section-label">{content.contact.label}</div>
          <h1 className="page-title">{content.contact.heading}</h1>
        </div>
        <p>{content.contact.body}</p>
      </div>

      <div className="contact-layout">
        <div className="glass-card contact-copy-card">
          <h3>{content.contact.directTitle}</h3>
          <div className="contact-copy-stack">
            {content.contact.directItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        <InquiryForm content={content.contact} language={language} />
      </div>
    </section>
  )
}

export default ContactPage

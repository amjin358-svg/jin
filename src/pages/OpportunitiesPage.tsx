import { Link } from 'react-router-dom'
import type { SiteContent } from '../types'

type OpportunitiesPageProps = {
  content: SiteContent
}

function OpportunitiesPage({ content }: OpportunitiesPageProps) {
  return (
    <div className="page-shell__content">
      <section className="section section-page-hero">
        <div className="section-intro">
          <div>
            <div className="section-label">{content.opportunities.label}</div>
            <h1 className="page-title">{content.opportunities.title}</h1>
          </div>
          <p>{content.opportunities.description}</p>
        </div>
      </section>

      <section className="section portfolio">
        <div className="listing-grid">
          {content.marketWatch.map((property) => (
            <article className="listing-card" key={property.address}>
              <div
                className="listing-image"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(9, 11, 15, 0.15), rgba(9, 11, 15, 0.62)), url("${property.image}")`,
                }}
              >
                <span className="listing-badge">{property.visualTag}</span>
                <span className="listing-price">{property.price}</span>
              </div>
              <div className="listing-body">
                <h3>{property.address}</h3>
                <p className="listing-subtitle">
                  {property.region} · {property.status}
                </p>
                <p className="listing-summary">{property.summary}</p>
                <p className="listing-angle">{property.investmentAngle}</p>
                <div className="listing-details">
                  {property.specs.map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </div>
                <a
                  className="inline-link"
                  href={property.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.common.sourceLabel}: {property.source}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta">
        <div className="cta-card">
          <div>
            <div className="section-label">{content.opportunities.noteTitle}</div>
            <h2>{content.opportunities.title}</h2>
            <p>{content.opportunities.noteBody}</p>
          </div>
          <Link className="btn btn--primary" to="/contact">
            {content.common.requestBriefing}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default OpportunitiesPage

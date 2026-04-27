import { Link, useParams } from 'react-router-dom'
import { copyText, getListingById, getZipListings, laZipOverviews } from '../content/laZipMarket'
import type { Language } from '../types'

type PropertyDetailPageProps = {
  language: Language
}

function formatDescription(description: string) {
  return description
    .split('. ')
    .map((sentence) => sentence.trim())
    .filter(Boolean)
}

function PropertyDetailPage({ language }: PropertyDetailPageProps) {
  const { zipCode, propertyId } = useParams()
  const property = propertyId ? getListingById(propertyId) : undefined

  if (!property) {
    return (
      <section className="section page-section">
        <div className="glass-card">
          <div className="section-label">Listing not found</div>
          <h1 className="page-title">The requested property could not be located.</h1>
          <p className="market-note">
            The listing may have been removed from the L.A. ZIP explorer or the URL may be incorrect.
          </p>
          <Link className="btn btn--primary" to="/la-zip-market">
            Return to L.A. ZIP Explorer
          </Link>
        </div>
      </section>
    )
  }

  const market = laZipOverviews.find((item) => item.zip === (zipCode ?? property.zip))
  const descriptionBlocks = formatDescription(copyText(language, property.description))
  const relatedListings = getZipListings(property.zip).filter((item) => item.id !== property.id).slice(0, 2)

  return (
    <>
      <section className="section section-page-hero">
        <div className="section-intro">
          <div>
            <div className="section-label">Property details</div>
            <h1 className="page-title">{property.address}</h1>
          </div>
          <p>
            Zillow-style detail view for a selected Los Angeles property, combining pricing, ZIP
            market context, and deal positioning in one page.
          </p>
        </div>
      </section>

      <section className="section property-detail-layout">
        <article className="property-detail-card">
          <div
            className="property-detail-hero"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(3, 9, 28, 0.12), rgba(3, 9, 28, 0.68)), url("${property.image}")`,
            }}
          >
            <div className="property-detail-pill-row">
              <span className="listing-badge">{copyText(language, property.propertyType)}</span>
              <span className="listing-price">{property.price}</span>
            </div>
            <div className="property-detail-address">
              <strong>{copyText(language, market?.district ?? { en: property.zip, zh: property.zip })}</strong>
              <span>{property.zip}</span>
            </div>
          </div>

          <div className="property-detail-body">
            <div className="property-detail-stats">
              <div className="glass-card">
                <span className="detail-stat-label">Bedrooms</span>
                <strong>{property.beds}</strong>
              </div>
              <div className="glass-card">
                <span className="detail-stat-label">Bathrooms</span>
                <strong>{property.baths}</strong>
              </div>
              <div className="glass-card">
                <span className="detail-stat-label">Living area</span>
                <strong>{property.interior}</strong>
              </div>
              <div className="glass-card">
                <span className="detail-stat-label">Est. $ / Sq Ft</span>
                <strong>{property.pricePerSqft}</strong>
              </div>
            </div>

            <div className="property-detail-section">
              <div className="section-label">Overview</div>
              <h2>{copyText(language, property.title)}</h2>
              <div className="property-detail-copy">
                {descriptionBlocks.map((block) => (
                  <p key={block}>{block.endsWith('.') ? block : `${block}.`}</p>
                ))}
              </div>
            </div>

            <div className="property-detail-section">
              <div className="section-label">Highlights</div>
              <div className="detail-chip-grid">
                {property.highlights.map((highlight) => (
                  <span key={`${property.id}-${copyText(language, highlight)}`} className="detail-chip">
                    {copyText(language, highlight)}
                  </span>
                ))}
              </div>
            </div>

            <div className="property-detail-section">
              <div className="section-label">Property snapshot</div>
              <div className="detail-chip-grid">
                <span className="detail-chip">{property.lot}</span>
                <span className="detail-chip">{property.yearBuilt}</span>
                <span className="detail-chip">{property.hoa}</span>
                <span className="detail-chip">{copyText(language, property.status)}</span>
              </div>
            </div>
          </div>
        </article>

        <aside className="property-detail-sidebar">
          <div className="glass-card detail-sidebar-card">
            <div className="section-label">ZIP market context</div>
            <h3>
              {property.zip} · {copyText(language, market?.district ?? { en: property.zip, zh: property.zip })}
            </h3>
            <p>{market ? copyText(language, market.overview) : 'Market summary is currently unavailable.'}</p>
            <div className="detail-kpi-stack">
              <div>
                <span className="detail-stat-label">Average price / Sq Ft</span>
                <strong>{market?.averagePricePerSqft ?? property.pricePerSqft}</strong>
              </div>
              <div>
                <span className="detail-stat-label">Median listing price</span>
                <strong>{market?.averageListPrice ?? property.price}</strong>
              </div>
              <div>
                <span className="detail-stat-label">Active listings</span>
                <strong>{market?.activeListings ?? 'N/A'}</strong>
              </div>
            </div>
          </div>

          <div className="glass-card detail-sidebar-card">
            <div className="section-label">Deal angle</div>
            <p>{copyText(language, property.summary)}</p>
          </div>

          <div className="glass-card detail-sidebar-card">
            <div className="section-label">Next step</div>
            <p>
              Request a BlueRock underwriting note to compare this asset against nearby ZIP-level
              pricing, rental profile, and hold strategy fit.
            </p>
            <div className="detail-sidebar-actions">
              <Link className="btn btn--primary" to="/contact">
                Request underwriting note
              </Link>
              <Link className="btn btn--secondary" to="/la-zip-market">
                Back to L.A. ZIP Explorer
              </Link>
            </div>
          </div>

          {relatedListings.length ? (
            <div className="glass-card detail-sidebar-card">
              <div className="section-label">More in this ZIP</div>
              <div className="detail-related-list">
                {relatedListings.map((item) => (
                  <Link key={item.id} className="detail-related-link" to={`/la-zip-market/${item.zip}/${item.id}`}>
                    <strong>{copyText(language, item.title)}</strong>
                    <span>{item.price}</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </aside>
      </section>
    </>
  )
}

export default PropertyDetailPage

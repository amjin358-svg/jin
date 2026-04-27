import { Link } from 'react-router-dom'
import { copyText, laZipListings, laZipOverviews } from '../content/laZipMarket'
import type { Language } from '../types'

type LaZipMarketPageProps = {
  language: Language
}

function LaZipMarketPage({ language }: LaZipMarketPageProps) {
  return (
    <>
      <section className="section page-hero">
        <div className="section-intro">
          <div>
            <div className="section-label">L.A. ZIP Explorer</div>
            <h1 className="page-title">Los Angeles ZIP-level pricing and Zillow-style property browsing.</h1>
          </div>
          <p>
            Review average pricing by ZIP code, compare neighborhood positioning, and
            click into listings for a deeper property-level view.
          </p>
        </div>
      </section>

      <section className="section zip-market-page">
        <div className="zip-market-layout">
          <aside className="glass-card zip-market-sidebar">
            <div className="section-label">L.A. ZIP average pricing</div>
            <div className="zip-metric-list">
              {laZipOverviews.map((metric) => (
                <article className="zip-metric-card" key={metric.zip}>
                  <div className="zip-metric-top">
                    <strong>{metric.zip}</strong>
                    <span>{copyText(language, metric.district)}</span>
                  </div>
                  <p>{copyText(language, metric.overview)}</p>
                  <div className="zip-stat-row">
                    <div>
                      <span>Avg $ / Sq Ft</span>
                      <strong>{metric.averagePricePerSqft}</strong>
                    </div>
                    <div>
                      <span>Avg list price</span>
                      <strong>{metric.averageListPrice}</strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </aside>

          <div className="zip-listing-panel">
            <div className="zip-listing-grid">
              {laZipListings.map((listing) => (
                <article className="zip-listing-card" key={listing.id}>
                  <Link className="zip-listing-image-link" to={`/la-zip-market/${listing.zip}/${listing.id}`}>
                    <div
                      className="zip-listing-image"
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(5, 17, 43, 0.10), rgba(5, 17, 43, 0.72)), url("${listing.image}")`,
                      }}
                    >
                      <span className="listing-badge">{listing.zip}</span>
                      <span className="listing-price">{listing.price}</span>
                    </div>
                  </Link>
                  <div className="zip-listing-body">
                    <div className="zip-listing-topline">
                      <strong>{listing.address}</strong>
                      <span>{listing.zip}</span>
                    </div>
                    <p className="listing-summary">{copyText(language, listing.summary)}</p>
                    <div className="listing-details">
                      <span>{listing.beds} bd</span>
                      <span>{listing.baths} ba</span>
                      <span>{listing.interior}</span>
                      <span>{listing.pricePerSqft}</span>
                    </div>
                    <div className="zip-listing-footer">
                      <span className="zip-listing-type">{copyText(language, listing.propertyType)}</span>
                      <Link className="inline-link" to={`/la-zip-market/${listing.zip}/${listing.id}`}>
                        View details
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LaZipMarketPage

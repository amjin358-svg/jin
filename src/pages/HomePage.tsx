import { Link } from 'react-router-dom'
import type { SiteContent } from '../types'

type HomePageProps = {
  content: SiteContent
}

function HomePage({ content }: HomePageProps) {
  const previewItems = content.marketWatch.slice(0, 2)

  return (
    <>
      <section className="section hero">
        <div>
          <div className="eyebrow">{content.home.hero.eyebrow}</div>
          <h1>
            {content.home.hero.title}
            <span>{content.home.hero.highlight}</span>
          </h1>
          <p>{content.home.hero.description}</p>

          <div className="hero-actions">
            <Link className="btn btn--primary" to="/opportunities">
              {content.home.hero.primaryCta}
            </Link>
            <Link className="btn btn--secondary" to="/contact">
              {content.home.hero.secondaryCta}
            </Link>
          </div>

          <div className="hero-metrics">
            {content.home.hero.metrics.map((item) => (
              <article className="metric-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-panel">
          <div className="hero-visual">
            <div className="floating-card">
              <p>{content.home.hero.heroCardTop.label}</p>
              <strong>{content.home.hero.heroCardTop.value}</strong>
            </div>

            <div className="location-card">
              <p>{content.home.hero.heroCardBottom.label}</p>
              <strong>{content.home.hero.heroCardBottom.value}</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="section thesis">
        <div className="section-intro">
          <div>
            <div className="section-label">{content.home.thesis.label}</div>
            <h2>{content.home.thesis.title}</h2>
          </div>
          <p>{content.home.thesis.description}</p>
        </div>

        <div className="thesis-grid">
          {content.home.thesis.items.map((item) => (
            <article className="glass-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section portfolio">
        <div className="section-intro">
          <div>
            <div className="section-label">{content.home.watchPreview.label}</div>
            <h2>{content.home.watchPreview.title}</h2>
          </div>
          <p>{content.home.watchPreview.description}</p>
        </div>

        <div className="listing-grid">
          {previewItems.map((property) => (
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
                <h3>{property.region}</h3>
                <p className="listing-subtitle">{property.address}</p>
                <p className="listing-summary">{property.summary}</p>
                <div className="listing-details">
                  {property.specs.map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section services">
        <div className="services-layout">
          <div className="services-stack">
            {content.servicePillars.map((pillar) => (
              <article className="glass-card service-card" key={pillar.title}>
                <strong>{pillar.eyebrow}</strong>
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
              </article>
            ))}
          </div>

          <aside className="services-visual">
            <div>
              <div className="section-label">{content.home.servicePreview.label}</div>
              <h3>{content.home.servicePreview.title}</h3>
            </div>
            <p>{content.home.servicePreview.description}</p>
            <Link className="btn btn--secondary" to="/services">
              {content.common.requestConsultation}
            </Link>
          </aside>
        </div>
      </section>

      <section className="section cta">
        <div className="cta-card">
          <div>
            <div className="section-label">{content.home.cta.label}</div>
            <h2>{content.home.cta.title}</h2>
            <p>{content.home.cta.description}</p>
          </div>
          <Link className="btn btn--primary" to="/contact">
            {content.home.cta.button}
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage

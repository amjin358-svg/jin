import type { SiteContent } from '../types'

type ServicesPageProps = {
  content: SiteContent
}

function ServicesPage({ content }: ServicesPageProps) {
  return (
    <>
      <section className="section page-hero">
        <div className="section-intro">
          <div>
            <div className="section-label">{content.services.label}</div>
            <h1 className="page-title">{content.services.title}</h1>
          </div>
          <p>{content.services.description}</p>
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
              <div className="section-label">{content.services.advisoryTitle}</div>
              <h3>{content.services.advisoryHeading}</h3>
            </div>
            <p>{content.services.advisoryCopy}</p>
          </aside>
        </div>
      </section>

      <section className="section timeline">
        <div className="section-intro">
          <div>
            <div className="section-label">{content.services.processLabel}</div>
            <h2>{content.services.processTitle}</h2>
          </div>
          <p>{content.services.processDescription}</p>
        </div>

        <div className="timeline-grid">
          {content.services.processSteps.map((item, index) => (
            <article className="glass-card timeline-card" key={item}>
              <span className="timeline-step">0{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesPage

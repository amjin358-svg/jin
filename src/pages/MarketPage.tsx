import type { SiteContent } from '../types'

type MarketPageProps = {
  content: SiteContent
}

function MarketPage({ content }: MarketPageProps) {
  return (
    <>
      <section className="section page-hero">
        <div className="section-intro">
          <div>
            <div className="section-label">{content.market.label}</div>
            <h1 className="page-title">{content.market.title}</h1>
          </div>
          <p>{content.market.description}</p>
        </div>
      </section>

      <section className="section market-page-grid">
        <div className="glass-card">
          <div className="section-label">{content.market.signalsLabel}</div>
          <div className="market-bars">
            {content.market.signals.map((signal) => (
              <div className="bar-group" key={signal.name}>
                <span>
                  <span>{signal.name}</span>
                  <strong>{signal.score}</strong>
                </span>
                <p className="signal-copy">{signal.profile}</p>
                <div className="bar-track" aria-hidden="true">
                  <div className="bar-fill" style={{ width: signal.score }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <div className="section-label">{content.market.insightsLabel}</div>
          <h2 className="market-insights-title">{content.market.insightsTitle}</h2>
          <p className="market-note">{content.market.insightsDescription}</p>
          <div className="insight-stack">
            {content.market.insights.map((insight) => (
              <article className="insight-card" key={insight.title}>
                <h3>{insight.title}</h3>
                <p>{insight.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default MarketPage

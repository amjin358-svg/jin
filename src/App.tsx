const heroMetrics = [
  { value: 'USD $2.5M-$12M', label: 'Typical luxury ticket size' },
  { value: 'Mandarin + English', label: 'Investor communication' },
  { value: '28 target enclaves', label: 'Prime SoCal neighborhoods tracked' },
]

const investmentThesis = [
  {
    title: 'Wealth preservation through scarcity',
    copy:
      'We prioritize submarkets with ocean frontage, top-tier school districts, and constrained luxury supply where capital retains prestige and pricing power.',
  },
  {
    title: 'Lifestyle plus income optionality',
    copy:
      'Assets are selected to work as family residences, executive rentals, or long-duration holds without sacrificing design quality or neighborhood status.',
  },
  {
    title: 'Cross-border execution confidence',
    copy:
      'Taiwan-based principals receive bilingual guidance on escrow, financing introductions, tax coordination, and ownership structuring from start to finish.',
  },
  {
    title: 'Private-market sourcing discipline',
    copy:
      'Beyond public listings, we package conviction opportunities with underwriting logic, management pathways, and a portfolio-fit recommendation.',
  },
]

const featuredProperties = [
  {
    title: 'Newport Coast Panorama Villa',
    subtitle: 'Orange County | Guard-gated ocean-view estate',
    price: '$8.6M',
    summary:
      'A statement residence for capital preservation, seasonal family stays, and ultra-prime coastal exposure minutes from Pelican Hill and Crystal Cove.',
    details: ['7,200 Sq Ft', '6 Bed / 7 Bath', 'Projected 4.9% income option'],
    badge: 'Coastal flagship',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Pasadena Heritage Compound',
    subtitle: 'San Gabriel Valley | Legacy family acquisition',
    price: '$5.2M',
    summary:
      'Architectural compound near elite schools and research corridors, structured for appreciation-minded buyers seeking educational access and elegant grounds.',
    details: ['0.63 Acre Lot', 'ADU Potential', '5.4% stabilized yield'],
    badge: 'Family office fit',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Irvine Executive Residences',
    subtitle: 'Irvine Spectrum | Class A multi-asset strategy',
    price: '$3.4M',
    summary:
      'A curated luxury cluster positioned for professional tenant demand, offering efficient management, clean finishes, and durable leasing fundamentals.',
    details: ['3 Assets', 'Institutional tenant demand', '6.1% blended strategy'],
    badge: 'Income-oriented',
    image:
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
  },
]

const servicePillars = [
  {
    eyebrow: 'Acquisition strategy',
    title: 'Neighborhood, asset, and pricing selection',
    copy:
      'We align each acquisition to return expectations, family usage plans, school access, and expected hold duration before a tour list is even assembled.',
  },
  {
    eyebrow: 'Cross-border coordination',
    title: 'Escrow, financing, and tax advisory alignment',
    copy:
      'Our process integrates trusted lender introductions, legal and tax coordination, and bilingual transaction management for low-friction closings.',
  },
  {
    eyebrow: 'Asset stewardship',
    title: 'Operations after the keys are delivered',
    copy:
      'Furnishing, renovations, leasing oversight, and recurring portfolio reviews keep each residence performing as both a luxury asset and strategic allocation.',
  },
]

const processTimeline = [
  'Private briefing on budget, preferred holding structure, lifestyle priorities, and location thesis.',
  'Curated sourcing across Orange County, Irvine, San Gabriel Valley, and selective Westside opportunities.',
  'Offer strategy, due diligence, escrow management, and local advisor coordination.',
  'Post-close setup covering furnishing, operations, leasing, and quarterly review reporting.',
]

const marketSignals = [
  { label: 'Orange County trophy demand', value: '91%' },
  { label: 'School-district driven resilience', value: '87%' },
  { label: 'Executive rental absorption', value: '84%' },
  { label: 'Long-hold capital retention bias', value: '93%' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="section site-header__inner">
          <div className="brand">
            <div className="brand__mark">PC</div>
            <div className="brand__text">
              <span className="brand__name">Pacific Crest Capital</span>
              <span className="brand__subline">Southern California Luxury Investments</span>
            </div>
          </div>

          <nav className="site-nav" aria-label="Primary">
            <a href="#thesis">Thesis</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#services">Services</a>
            <a href="#market">Market</a>
            <a className="header-cta" href="#contact">
              Schedule Briefing
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="section hero" id="contact">
          <div>
            <div className="eyebrow">Curated for Taiwanese investors entering Southern California</div>
            <h1>
              Acquire premium California real estate with
              <span>private-office precision.</span>
            </h1>
            <p>
              A luxury investment platform built for families, founders, and principals in
              Taiwan seeking prestige residences, defensive hard assets, and disciplined
              long-hold exposure across Southern California&apos;s most resilient neighborhoods.
            </p>

            <div className="hero-actions">
              <a className="btn btn--primary" href="#portfolio">
                View Featured Assets
              </a>
              <a className="btn btn--secondary" href="#services">
                Explore Advisory Model
              </a>
            </div>

            <div className="hero-metrics">
              {heroMetrics.map((item) => (
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
                <p>Private acquisition desk</p>
                <strong>Luxury sourcing + cross-border execution</strong>
              </div>

              <div className="location-card">
                <p>Focus markets</p>
                <strong>Newport Coast, Irvine, Pasadena, Arcadia, Westside LA</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="section thesis" id="thesis">
          <div className="section-intro">
            <div>
              <div className="section-label">Investment thesis</div>
              <h2>Luxury design language supported by a disciplined cross-border acquisition strategy.</h2>
            </div>
            <p>
              We present Southern California not as generic overseas property, but as a
              curated portfolio of scarce, dollar-denominated assets aligned to family
              mobility, education access, and long-term wealth protection.
            </p>
          </div>

          <div className="thesis-grid">
            {investmentThesis.map((item) => (
              <article className="glass-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section portfolio" id="portfolio">
          <div className="section-intro">
            <div>
              <div className="section-label">Featured opportunities</div>
              <h2>High-conviction assets across coastal prestige, family enclaves, and executive rental corridors.</h2>
            </div>
            <p>
              Each listing is framed through use case, holding thesis, and operational
              optionality so investors can assess fit beyond the listing brochure.
            </p>
          </div>

          <div className="listing-grid">
            {featuredProperties.map((property) => (
              <article className="listing-card" key={property.title}>
                <div
                  className="listing-image"
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(9, 11, 15, 0.15), rgba(9, 11, 15, 0.62)), url("${property.image}")` }}
                >
                  <span className="listing-badge">{property.badge}</span>
                  <span className="listing-price">{property.price}</span>
                </div>
                <div className="listing-body">
                  <h3>{property.title}</h3>
                  <p className="listing-subtitle">{property.subtitle}</p>
                  <p className="listing-summary">{property.summary}</p>
                  <div className="listing-details">
                    {property.details.map((detail) => (
                      <span key={detail}>{detail}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section services" id="services">
          <div className="services-layout">
            <div className="services-stack">
              {servicePillars.map((pillar) => (
                <article className="glass-card service-card" key={pillar.title}>
                  <strong>{pillar.eyebrow}</strong>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.copy}</p>
                </article>
              ))}
            </div>

            <aside className="services-visual">
              <div>
                <div className="section-label">Private advisory model</div>
                <h3>From first inquiry in Taiwan to stabilized ownership in California.</h3>
              </div>
              <p>
                A discreet service stack covering underwriting, offer strategy, escrow
                coordination, tax and entity alignment, renovation oversight, and leasing
                support when income generation is part of the plan.
              </p>
            </aside>
          </div>
        </section>

        <section className="section timeline">
          <div className="section-intro">
            <div>
              <div className="section-label">Execution path</div>
              <h2>A four-step framework built for overseas principals who value precision and clarity.</h2>
            </div>
            <p>
              Our workflow reduces friction, compresses decision cycles, and keeps every
              participant aligned across Taiwan and California.
            </p>
          </div>

          <div className="timeline-grid">
            {processTimeline.map((item, index) => (
              <article className="glass-card timeline-card" key={item}>
                <span className="timeline-step">0{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section market" id="market">
          <div className="market-layout">
            <div>
              <div className="section-label">Market conviction</div>
              <h2>Submarkets selected for prestige, rental defensiveness, and multi-year hold resilience.</h2>
              <p className="market-note">
                Our emphasis remains on neighborhoods where luxury appeal intersects with
                durable family demand, executive mobility, and internationally legible brand value.
              </p>
            </div>

            <div className="glass-card market-bars">
              {marketSignals.map((signal) => (
                <div className="bar-group" key={signal.label}>
                  <span>
                    <span>{signal.label}</span>
                    <strong>{signal.value}</strong>
                  </span>
                  <div className="bar-track" aria-hidden="true">
                    <div className="bar-fill" style={{ width: signal.value }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta">
          <div className="cta-card">
            <div>
              <div className="section-label">Private consultation</div>
              <h2>Request a confidential Southern California investment briefing.</h2>
              <p>
                Receive a tailored market overview, shortlisted opportunities, and a recommended
                acquisition path based on your budget, preferred hold structure, and family priorities.
              </p>
            </div>
            <a className="btn btn--primary" href="mailto:invest@pacificcrestcapital.com">
              invest@pacificcrestcapital.com
            </a>
          </div>
        </section>
      </main>

      <footer className="section footer">
        <div className="footer__inner">
          <span>Pacific Crest Capital</span>
          <span>Luxury Southern California acquisitions for Taiwanese investors.</span>
        </div>
      </footer>
    </div>
  )
}

export default App

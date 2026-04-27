import { Link } from 'react-router-dom'
import { copyText, laZipListings, laZipOverviews } from '../content/laZipMarket'
import type { Language, SiteContent } from '../types'

type HomePageProps = {
  content: SiteContent
  language: Language
}

const copy = {
  en: {
    heroTitle: 'BlueRock $1M Growth Platform',
    heroBody:
      'Luxury Brokerage, L.A. ZIP intelligence, investor workflows, and automated deal visibility in one BlueRock operating platform.',
    heroPrimary: 'Start Buying',
    heroSecondary: 'Investor Portal',
    searchLabel: 'MLS Property Search',
    searchBody:
      'Use a Zillow-style search flow to scan city, ZIP, pricing, and bedroom filters before moving into deeper underwriting.',
    searchPlaceholders: ['City / ZIP', 'Price Range', 'Beds', 'Baths'],
    searchButton: 'Search',
    mapLabel: 'Map Search (Zillow Style)',
    mapBody:
      'Explore ZIP clusters, compare average pricing, and move into school-zone-driven market review using the BlueRock L.A. ZIP Explorer.',
    mapButton: 'Open L.A. ZIP Explorer',
    listingsLabel: 'Live MLS Listings',
    listingsBody:
      'Featured westside and prime Los Angeles inventory shown in a more transactional, Zillow-inspired browsing format.',
    estimateLabel: 'AI Zestimate Engine',
    estimateBody:
      'Generate a BlueRock-style pricing checkpoint before a full underwriting memo, especially for Taiwanese principals comparing hold scenarios.',
    estimatePlaceholder: 'Enter Address',
    estimateButton: 'Get Estimate',
    dashboardLabel: 'Operator Dashboard',
    dashboardCards: [
      { value: 'IRR 17.8%', label: 'Target modeled return' },
      { value: 'Equity 2.3x', label: 'Portfolio equity multiple' },
      { value: 'Active Deals 8', label: 'Currently reviewed deals' },
    ],
    dealsLabel: 'Active Investment Offerings',
    dealsBody:
      'Current L.A. ZIP opportunities presented like operator-facing offerings rather than brochure listings.',
    dealsButton: 'Review all ZIP opportunities',
    bookingLabel: 'Book Showing / Consultation',
    bookingBody:
      'Move from inquiry to showing, acquisition strategy call, or investor briefing with a single BlueRock contact flow.',
    bookingPlaceholders: ['Name', 'Phone', 'Email'],
    bookingButton: 'Schedule',
    engineLabel: '$1M Revenue Engine',
    engineCards: [
      'Buyer leads funnel',
      'Seller appointments',
      'Property management recurring',
      'Investor capital raises',
    ],
    operationsLabel: 'Operations Center',
    operationsCards: [
      { value: 'Leads Today 120', label: 'Inbound activity' },
      { value: 'Showings 22', label: 'Tours scheduled' },
      { value: 'Closings MTD 7', label: 'Month-to-date closings' },
      { value: 'Managed Units 84', label: 'Managed portfolio count' },
    ],
    ctaLabel: 'BlueRock advisory',
    ctaTitle: 'Move from browsing to disciplined acquisition with a platform built for cross-border capital.',
    ctaBody:
      'Whether you are buying a prestige home, underwriting a Westside hold, or evaluating long-term family mobility, BlueRock packages the full operating stack.',
  },
  zh: {
    heroTitle: 'BlueRock 千萬美元成長平台',
    heroBody:
      '整合精品經紀、L.A. ZIP 市場情報、投資人工作流與交易可視化，打造 BlueRock 的不動產營運平台。',
    heroPrimary: '開始找房',
    heroSecondary: '投資人入口',
    searchLabel: 'MLS 物件搜尋',
    searchBody:
      '用類 Zillow 的搜尋流程快速篩選城市、ZIP、價格與房型，再進一步進入 BlueRock 的投資判讀。',
    searchPlaceholders: ['城市 / ZIP', '價格區間', '房間數', '衛浴數'],
    searchButton: '搜尋',
    mapLabel: '地圖找房（Zillow 模式）',
    mapBody:
      '透過地圖與 ZIP 分區檢視平均單價、學區邏輯與區域定位，再進入 BlueRock 的市場比較流程。',
    mapButton: '進入 L.A. ZIP Explorer',
    listingsLabel: 'Live MLS Listings',
    listingsBody:
      '以更接近交易平台的方式呈現 Westside 與洛杉磯核心房源，而非一般型錄式展示。',
    estimateLabel: 'AI Zestimate Engine',
    estimateBody:
      '在正式 underwriting memo 前，先取得 BlueRock 式的價格檢查點，適合跨境買方快速比較持有情境。',
    estimatePlaceholder: '輸入地址',
    estimateButton: '取得估值',
    dashboardLabel: '營運儀表板',
    dashboardCards: [
      { value: 'IRR 17.8%', label: '目標模型報酬' },
      { value: 'Equity 2.3x', label: '權益倍數' },
      { value: 'Active Deals 8', label: '目前檢視中的案件' },
    ],
    dealsLabel: '當前投資機會',
    dealsBody:
      '把 L.A. ZIP 區塊機會以 operator-facing offering 的方式呈現，而不只是房源文案。',
    dealsButton: '查看全部 ZIP 機會',
    bookingLabel: '預約帶看 / 顧問諮詢',
    bookingBody:
      '從初步詢問、帶看安排，到 acquisition strategy call 與投資人簡報，統一走進 BlueRock 流程。',
    bookingPlaceholders: ['姓名', '電話', 'Email'],
    bookingButton: '預約',
    engineLabel: '百萬美元營收引擎',
    engineCards: [
      '買方名單漏斗',
      '賣方約訪',
      '物業管理循環收入',
      '投資人資金募集',
    ],
    operationsLabel: '營運中心',
    operationsCards: [
      { value: 'Leads Today 120', label: '今日潛在客戶' },
      { value: 'Showings 22', label: '已安排帶看' },
      { value: 'Closings MTD 7', label: '本月成交' },
      { value: 'Managed Units 84', label: '管理中的單位數' },
    ],
    ctaLabel: 'BlueRock 顧問平台',
    ctaTitle: '把瀏覽行為轉化為有紀律的收購決策，建立專為跨境資本設計的平台流程。',
    ctaBody:
      '無論是購買地位型豪宅、評估 Westside 長期持有，或為家庭未來移動做資產配置，BlueRock 都把整套營運能力整合在同一頁面。',
  },
} as const

function HomePage({ content, language }: HomePageProps) {
  const ui = copy[language]
  const liveListings = laZipListings.slice(0, 3)
  const deals = laZipOverviews.slice(0, 3)

  return (
    <>
      <section className="platform-hero">
        <div className="platform-hero__overlay" />
        <div className="section platform-hero__content">
          <div className="platform-hero__eyebrow">{content.brand.name}</div>
          <h1>{ui.heroTitle}</h1>
          <p>{ui.heroBody}</p>
          <div className="platform-hero__actions">
            <Link className="btn btn--primary" to="/la-zip-market">
              {ui.heroPrimary}
            </Link>
            <Link className="btn btn--secondary" to="/contact">
              {ui.heroSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="platform-section platform-section--light">
        <div className="section">
          <div className="platform-section__intro">
            <div className="section-label">{ui.searchLabel}</div>
            <h2>{ui.searchLabel}</h2>
            <p>{ui.searchBody}</p>
          </div>
          <div className="platform-search-grid">
            {ui.searchPlaceholders.map((placeholder) => (
              <input key={placeholder} className="platform-input" placeholder={placeholder} />
            ))}
            <button className="platform-search-button" type="button">
              {ui.searchButton}
            </button>
          </div>
        </div>
      </section>

      <section className="platform-section platform-section--map">
        <div className="section">
          <div className="platform-section__intro">
            <div className="section-label">{ui.mapLabel}</div>
            <h2>{ui.mapLabel}</h2>
            <p>{ui.mapBody}</p>
          </div>
          <div className="platform-map-card">
            <div className="platform-map-card__label">L.A. ZIP / School Zone / Pricing Layers</div>
            <Link className="btn btn--primary" to="/la-zip-market">
              {ui.mapButton}
            </Link>
          </div>
        </div>
      </section>

      <section className="platform-section platform-section--light">
        <div className="section">
          <div className="platform-section__intro">
            <div className="section-label">{ui.listingsLabel}</div>
            <h2>{ui.listingsLabel}</h2>
            <p>{ui.listingsBody}</p>
          </div>
          <div className="platform-listing-grid">
            {liveListings.map((listing) => (
              <Link
                className="platform-listing-card"
                key={listing.id}
                to={`/la-zip-market/${listing.zip}/${listing.id}`}
              >
                <div
                  className="platform-listing-card__image"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(3, 17, 33, 0.12), rgba(3, 17, 33, 0.66)), url("${listing.image}")`,
                  }}
                />
                <div className="platform-listing-card__body">
                  <strong>{listing.price}</strong>
                  <div>{listing.address}</div>
                  <span>
                    {listing.beds} bd • {listing.baths} ba • {listing.interior}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="platform-section platform-section--dark">
        <div className="section">
          <div className="platform-section__intro platform-section__intro--light">
            <div className="section-label">{ui.estimateLabel}</div>
            <h2>{ui.estimateLabel}</h2>
            <p>{ui.estimateBody}</p>
          </div>
          <div className="platform-estimate-box">
            <input className="platform-input platform-input--dark" placeholder={ui.estimatePlaceholder} />
            <button className="btn btn--primary" type="button">
              {ui.estimateButton}
            </button>
          </div>
        </div>
      </section>

      <section className="platform-section platform-section--dashboard">
        <div className="section">
          <div className="platform-section__intro platform-section__intro--light">
            <div className="section-label">{ui.dashboardLabel}</div>
            <h2>{ui.dashboardLabel}</h2>
          </div>
          <div className="platform-mini-grid">
            {ui.dashboardCards.map((card) => (
              <article className="platform-mini-card" key={card.label}>
                <strong>{card.value}</strong>
                <span>{card.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="platform-section platform-section--light">
        <div className="section">
          <div className="platform-section__intro">
            <div className="section-label">{ui.dealsLabel}</div>
            <h2>{ui.dealsLabel}</h2>
            <p>{ui.dealsBody}</p>
          </div>
          <div className="platform-deal-grid">
            {deals.map((deal) => (
              <article className="platform-deal-card" key={deal.zip}>
                <div className="platform-deal-card__title">
                  <strong>{copyText(language, deal.district)}</strong>
                  <span>{deal.zip}</span>
                </div>
                <p>{copyText(language, deal.overview)}</p>
                <div className="platform-deal-card__meta">
                  <span>{deal.averageListPrice}</span>
                  <span>{deal.averagePricePerSqft}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="platform-inline-action">
            <Link className="btn btn--secondary" to="/la-zip-market">
              {ui.dealsButton}
            </Link>
          </div>
        </div>
      </section>

      <section className="platform-section platform-section--soft">
        <div className="section">
          <div className="platform-section__intro">
            <div className="section-label">{ui.bookingLabel}</div>
            <h2>{ui.bookingLabel}</h2>
            <p>{ui.bookingBody}</p>
          </div>
          <div className="platform-search-grid">
            {ui.bookingPlaceholders.map((placeholder) => (
              <input key={placeholder} className="platform-input" placeholder={placeholder} />
            ))}
            <Link className="platform-search-button platform-search-button--link" to="/contact">
              {ui.bookingButton}
            </Link>
          </div>
        </div>
      </section>

      <section className="platform-section platform-section--engine">
        <div className="section">
          <div className="platform-section__intro platform-section__intro--light">
            <div className="section-label">{ui.engineLabel}</div>
            <h2>{ui.engineLabel}</h2>
          </div>
          <div className="platform-engine-grid">
            {ui.engineCards.map((item) => (
              <article className="platform-engine-card" key={item}>
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="platform-section platform-section--dark">
        <div className="section">
          <div className="platform-section__intro platform-section__intro--light">
            <div className="section-label">{ui.operationsLabel}</div>
            <h2>{ui.operationsLabel}</h2>
          </div>
          <div className="platform-mini-grid">
            {ui.operationsCards.map((card) => (
              <article className="platform-mini-card platform-mini-card--dark" key={card.label}>
                <strong>{card.value}</strong>
                <span>{card.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="platform-section platform-section--cta">
        <div className="section">
          <aside className="platform-cta-card">
            <div>
              <div className="section-label">{ui.ctaLabel}</div>
              <h2>{ui.ctaTitle}</h2>
              <p>{ui.ctaBody}</p>
            </div>
            <div className="platform-cta-card__actions">
              <Link className="btn btn--primary" to="/contact">
                {content.common.requestConsultation}
              </Link>
              <Link className="btn btn--secondary" to="/la-zip-market">
                L.A. ZIP Explorer
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export default HomePage

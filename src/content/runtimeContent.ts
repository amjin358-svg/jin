import type {
  InsightCard,
  Language,
  LocalizedText,
  MarketWatchItem,
  ServicePillar,
  SiteContent,
  SiteRuntimeConfig,
  SubmarketSignal,
} from '../types'

const text = (en: string, zh: string): LocalizedText => ({ en, zh })

const fallbackConfig: SiteRuntimeConfig = {
  brand: {
    name: 'Formosa Pacific Advisory',
    tagline: text(
      'Luxury Southern California property strategy for Taiwanese investors',
      '專為台灣投資人打造的南加州精品不動產策略顧問',
    ),
    legalName: 'Formosa Pacific Advisory LLC',
    logoMark: 'FP',
  },
  contact: {
    email: 'invest@formosapacific.com',
    phone: '+1 (949) 555-0188',
    whatsapp: '+886 900 000 000',
    line: '@formosapacific',
    location: text('Orange County and Greater Los Angeles, California', '加州橘郡與大洛杉磯地區'),
  },
  seo: {
    siteUrl: 'https://formosapacificadvisory.com',
    defaultTitle: text(
      'Formosa Pacific Advisory | Luxury Southern California Property Strategy',
      'Formosa Pacific Advisory | 南加州精品不動產策略顧問',
    ),
    defaultDescription: text(
      'Bilingual luxury real estate advisory for Taiwanese investors acquiring Southern California property across Orange County, Arcadia, Irvine, and South Bay.',
      '為台灣投資人提供雙語南加州精品不動產顧問服務，涵蓋橘郡、Arcadia、Irvine 與 South Bay。',
    ),
    defaultOgImage:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80',
    keywords: [
      'taiwanese real estate investors',
      'southern california luxury property',
      'orange county investment homes',
      'irvine luxury real estate',
      'arcadia school district homes',
    ],
  },
  analytics: {
    googleAnalyticsId: '',
    metaPixelId: '',
  },
  media: {
    heroImage:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80',
    serviceImage:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
  },
  notifications: {
    inquiryNotificationEmail: 'invest@formosapacific.com',
  },
  hero: {
    en: {
      eyebrow: 'Bilingual acquisition platform for Taiwanese capital entering Southern California',
      title: 'Acquire prestige California real estate with institutional clarity.',
      highlight: 'Luxury homes, disciplined underwriting, cross-border execution.',
      description:
        'We help Taiwanese families, founders, and private investors buy Southern California properties through a premium advisory model that combines market selection, transaction coordination, and post-close stewardship.',
    },
    zh: {
      eyebrow: '專為台灣資本進入南加州而設計的雙語收購平台',
      title: '用機構級判斷，配置具地位感的加州不動產。',
      highlight: '精品住宅、嚴謹投資評估、跨境成交執行。',
      description:
        '我們協助台灣家庭、企業主與高資產投資人，以精品顧問模式進入南加州房地產市場，整合區域選擇、交易協調與交屋後資產管理。',
    },
  },
  marketWatch: [
    {
      region: text('Newport Coast, Orange County', '橘郡 Newport Coast'),
      address: '7 Sailview, Newport Coast, CA 92657',
      price: '$49,998,000',
      specs: ['7 Bed', '10 Bath', '10,700 Sq Ft'],
      source: 'Compass',
      sourceUrl: 'https://www.compass.com/homedetails/7-Sailview-Newport-Coast-CA-92657/1KMTVT_pid/',
      status: text('Public market watch snapshot', '公開市場觀測快照'),
      summary: text(
        'Pelican Hill enclave estate with ocean and Catalina views, representing the trophy end of Orange County luxury inventory.',
        '位於 Pelican Hill 圈層、具海景與 Catalina 視野的頂級豪宅，代表橘郡精品住宅最具象徵性的價格帶。',
      ),
      investmentAngle: text(
        'Useful benchmark for ultra-prime coastal pricing and scarcity.',
        '適合作為超高端海岸線資產稀缺性與價格天花板的觀察樣本。',
      ),
      visualTag: 'Coastal trophy',
      image:
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
    },
    {
      region: text('Arcadia, San Gabriel Valley', 'San Gabriel Valley Arcadia'),
      address: '627 W Palm Dr, Arcadia, CA 91007',
      price: '$4,580,000',
      specs: ['6 Bed', '7 Bath', '8,164 Sq Ft'],
      source: 'Compass',
      sourceUrl: 'https://www.compass.com/listing/627-west-palm-drive-arcadia-ca-91007/1780512974933849697/',
      status: text('Public market watch snapshot', '公開市場觀測快照'),
      summary: text(
        'A large-format Arcadia Unified district home with guest-house positioning, relevant for buyers prioritizing school access and family occupancy.',
        '位於 Arcadia Unified 學區、具主宅與客屋配置的大坪數住宅，適合重視學區與家庭居住機能的買方。',
      ),
      investmentAngle: text(
        'Highlights the family-office profile of SGV education-driven acquisition demand.',
        '反映 San Gabriel Valley 以教育資源為核心的家庭型購屋需求。',
      ),
      visualTag: 'Education-led',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    },
    {
      region: text('Irvine, Orange County', '橘郡 Irvine'),
      address: '409 Mila, Irvine, CA 92618',
      price: '$2,687,000',
      specs: ['5 Bed', '5 Bath', '3,485 Sq Ft'],
      source: 'Redfin',
      sourceUrl: 'https://www.redfin.com/CA/Irvine/409-Mila-92618/home/199765881',
      status: text('Public market watch snapshot', '公開市場觀測快照'),
      summary: text(
        'Modern Irvine inventory showing the executive-family segment where design efficiency, school adjacency, and leasing depth matter.',
        '代表 Irvine 現代住宅供給的樣本，呈現企業家庭買方重視的機能設計、學區鄰近性與租賃深度。',
      ),
      investmentAngle: text(
        'Relevant for investors balancing livability, liquidity, and future rental demand.',
        '適合觀察兼顧自住流動性與未來租賃需求的配置型產品。',
      ),
      visualTag: 'Executive family',
      image:
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80',
    },
    {
      region: text('Manhattan Beach, Los Angeles County', '洛杉磯郡 Manhattan Beach'),
      address: '316 32nd St, Manhattan Beach, CA 90266',
      price: '$10,395,000',
      specs: ['5 Bed', '7 Bath', '4,322 Sq Ft'],
      source: 'Compass',
      sourceUrl: 'https://www.compass.com/homedetails/316-32nd-St-Manhattan-Beach-CA-90266/1I8EDX_pid/',
      status: text('Public market watch snapshot', '公開市場觀測快照'),
      summary: text(
        'New-construction ocean-view product illustrating South Bay coastal pricing and design-led buyer demand.',
        '具新建、海景與設計導向特色的高端住宅，反映 South Bay 海岸帶的高價位與產品美學需求。',
      ),
      investmentAngle: text(
        'A benchmark for coastal lifestyle acquisitions with enduring brand value.',
        '可作為兼具生活品質與長期品牌價值的海岸型配置參考。',
      ),
      visualTag: 'Design-led coast',
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    },
  ],
}

const servicePillarsSource = [
  {
    eyebrow: text('Acquisition strategy', '收購策略'),
    title: text('Market selection before tours begin', '先定市場，再安排看屋'),
    copy: text(
      'We filter opportunities by school quality, buyer liquidity, neighborhood prestige, and expected hold profile before a shortlist is sent.',
      '在送出 shortlist 之前，我們先以學區品質、買盤流動性、社區地位與持有週期篩選市場。',
    ),
  },
  {
    eyebrow: text('Transaction coordination', '交易協調'),
    title: text('Escrow, financing, and advisory alignment', 'Escrow、融資與顧問整合'),
    copy: text(
      'Our bilingual workflow coordinates escrow milestones, lender introductions, ownership structures, and tax conversations across Taiwan and California.',
      '以雙語流程協調 escrow 節點、貸款對接、持有架構與台美兩地稅務討論。',
    ),
  },
  {
    eyebrow: text('Asset stewardship', '資產管理'),
    title: text('Operate elegantly after closing', '交屋後持續優雅管理'),
    copy: text(
      'For homes intended for part-time use or leasing, we support furnishing, maintenance oversight, renovations, and recurring portfolio check-ins.',
      '若物件將用於部分自住或出租，我們可銜接家具配置、維運監督、裝修協調與定期資產回顧。',
    ),
  },
]

const homeThesisSource = [
  {
    title: text('Prestige backed by scarcity', '稀缺性支撐的資產地位'),
    copy: text(
      'We concentrate on school-driven, coastal, and internationally recognized neighborhoods where luxury demand remains legible across market cycles.',
      '我們聚焦於學區驅動、濱海與國際辨識度高的區域，這些市場在景氣循環中仍維持清晰的精品需求。',
    ),
  },
  {
    title: text('Capital preservation with lifestyle upside', '兼顧保值與生活升級'),
    copy: text(
      'Target assets are evaluated for family use, executive rental potential, and long-hold resilience instead of pure speculation.',
      '標的評估不只看短線價格波動，而是同時考慮自住、企業高管租賃與中長期持有韌性。',
    ),
  },
  {
    title: text('Cross-border execution confidence', '跨境成交的執行信心'),
    copy: text(
      'From escrow to entity and tax coordination, we structure every stage for overseas buyers who need clarity and discretion.',
      '從 escrow 到公司架構與稅務協調，每一步都為海外買方設計成清楚且低摩擦的流程。',
    ),
  },
]

const processStepsSource = [
  text(
    'Private intake on budget, family goals, holding structure, and timing.',
    '先進行私密訪談，釐清預算、家庭目標、持有架構與時間規劃。',
  ),
  text(
    'Curated market watch and high-fit opportunity shortlist tailored to your strategy.',
    '依據策略提供客製化市場觀測與高適配機會清單。',
  ),
  text(
    'Offer strategy, due diligence, escrow management, and documentation coordination.',
    '進入出價策略、盡職調查、escrow 管理與文件協調。',
  ),
  text(
    'Post-close setup for occupancy, leasing, furnishing, or renovation execution.',
    '成交後接續入住、出租、軟裝或整修執行安排。',
  ),
]

const signalSource = [
  {
    name: text('Newport Coast / Crystal Cove', 'Newport Coast / Crystal Cove'),
    profile: text('Ultra-prime coastal scarcity, lifestyle prestige, low inventory.', '超高端海岸線稀缺供給，生活地位高、庫存有限。'),
    score: '93%',
  },
  {
    name: text('Irvine / Great Park / Spectrum', 'Irvine / Great Park / Spectrum'),
    profile: text('Executive-family demand, school adjacency, strong leasing depth.', '企業家庭需求穩定、學區鄰近、租賃深度佳。'),
    score: '88%',
  },
  {
    name: text('Arcadia / San Gabriel Valley', 'Arcadia / San Gabriel Valley'),
    profile: text('Education-driven family capital and larger residential footprints.', '教育導向家庭資本活躍，住宅坪數與庭院尺度較大。'),
    score: '86%',
  },
  {
    name: text('Manhattan Beach / South Bay', 'Manhattan Beach / South Bay'),
    profile: text('Design-led coastal luxury with long-term brand value.', '以設計感與海岸生活為核心的高端住宅，長期品牌價值強。'),
    score: '90%',
  },
]

const marketInsightsSource = [
  {
    title: text('School access remains a major purchase driver', '學區資源仍是核心購買驅動因子'),
    copy: text(
      'For Taiwanese families relocating children or preserving optionality for future study, Arcadia and Irvine continue to stand out.',
      '對規劃子女就學或保留未來教育彈性的台灣家庭而言，Arcadia 與 Irvine 依然具高度吸引力。',
    ),
  },
  {
    title: text('Coastal homes function as both brand and balance sheet assets', '海岸住宅同時是身份象徵與資產配置'),
    copy: text(
      'Newport Coast and Manhattan Beach often attract buyers who care as much about prestige and capital storage as daily living quality.',
      'Newport Coast 與 Manhattan Beach 常吸引同時重視地位感、資產停泊與日常生活品質的買方。',
    ),
  },
  {
    title: text('Execution discipline matters more than raw listing volume', '真正關鍵的是執行紀律，而不是單純看案量'),
    copy: text(
      'Cross-border buyers benefit from clear underwriting, advisor coordination, and post-close planning more than browsing public portals alone.',
      '跨境買方真正受益的是清楚的投資判斷、顧問整合與交屋後規劃，而不只是瀏覽公開網站案源。',
    ),
  },
]

function pick(language: Language, value: LocalizedText) {
  return value[language]
}

function localizeWatch(language: Language, config: SiteRuntimeConfig): MarketWatchItem[] {
  return (config.marketWatch ?? []).map((item) => ({
    region: pick(language, item.region),
    address: item.address,
    price: item.price,
    specs: item.specs,
    source: item.source,
    sourceUrl: item.sourceUrl,
    status: pick(language, item.status),
    summary: pick(language, item.summary),
    investmentAngle: pick(language, item.investmentAngle),
    visualTag: item.visualTag,
    image: item.image,
  }))
}

function localizePillars(language: Language): ServicePillar[] {
  return servicePillarsSource.map((item) => ({
    eyebrow: pick(language, item.eyebrow),
    title: pick(language, item.title),
    copy: pick(language, item.copy),
  }))
}

function localizeInsights(language: Language, items: { title: LocalizedText; copy: LocalizedText }[]): InsightCard[] {
  return items.map((item) => ({
    title: pick(language, item.title),
    copy: pick(language, item.copy),
  }))
}

function localizeSignals(language: Language): SubmarketSignal[] {
  return signalSource.map((item) => ({
    name: pick(language, item.name),
    profile: pick(language, item.profile),
    score: item.score,
  }))
}

export function buildRuntimeContent(
  language: Language,
  config: SiteRuntimeConfig = fallbackConfig,
): SiteContent {
  const servicePillars = localizePillars(language)
  const marketWatch = localizeWatch(language, config)
  const lineLabel =
    config.contact.line
      ? `LINE: ${config.contact.line}`
      : language === 'en'
        ? 'LINE available on request'
        : 'LINE 可另行提供'
  const heroContent = config.hero[language]

  return {
    brand: {
      name: config.brand.name,
      mark: config.brand.logoMark,
      tagline: pick(language, config.brand.tagline),
    },
    site: {
      contactEmail: config.contact.email,
      contactPhone: config.contact.phone,
      lineId: config.contact.line,
      baseUrl: config.seo.siteUrl,
    },
    assets: {
      ogImage: config.seo.defaultOgImage,
      heroImage: config.seo.defaultOgImage,
      serviceImage: config.seo.defaultOgImage,
    },
    tracking: {
      gaMeasurementId: config.analytics.googleAnalyticsId,
      metaPixelId: config.analytics.metaPixelId,
    },
    nav: [
      { to: '/', label: language === 'en' ? 'Home' : '首頁' },
      { to: '/opportunities', label: language === 'en' ? 'Opportunities' : '市場機會' },
      { to: '/services', label: language === 'en' ? 'Services' : '顧問服務' },
      { to: '/market', label: language === 'en' ? 'Market' : '市場觀點' },
      { to: '/contact', label: language === 'en' ? 'Contact' : '聯絡我們' },
      { to: '/admin', label: language === 'en' ? 'Admin' : '管理後台' },
    ],
    navCta: language === 'en' ? 'Book consultation' : '預約諮詢',
    footer:
      language === 'en'
        ? `${config.brand.legalName} | Bilingual luxury acquisition strategy for Taiwanese investors buying Southern California property.`
        : `${config.brand.legalName} | 為台灣投資人提供雙語南加州精品不動產收購策略。`,
    common: {
      sourceLabel: language === 'en' ? 'Source' : '來源',
      requestBriefing: language === 'en' ? 'Request briefing' : '索取簡報',
      requestConsultation: language === 'en' ? 'Request consultation' : '預約顧問諮詢',
      publicSnapshotNote:
        language === 'en'
          ? 'Public listing snapshot used as a market reference. Pricing and availability may change.'
          : '此為公開案源市場快照，價格與可售狀態可能隨時變動。',
    },
    home: {
      hero: {
        eyebrow: heroContent.eyebrow,
        title: heroContent.title,
        highlight: heroContent.highlight,
        description: heroContent.description,
        primaryCta: language === 'en' ? 'Review market watch' : '查看市場觀測',
        secondaryCta: language === 'en' ? 'Book a consultation' : '預約諮詢',
        heroCardTop: {
          label: language === 'en' ? 'Private market desk' : '私密市場顧問桌',
          value: language === 'en' ? 'Luxury sourcing + cross-border execution' : '精品物件搜尋 + 跨境成交執行',
        },
        heroCardBottom: {
          label: language === 'en' ? 'Focus corridors' : '核心觀察帶',
          value: language === 'en' ? 'Newport Coast, Irvine, Arcadia, Manhattan Beach' : 'Newport Coast、Irvine、Arcadia、Manhattan Beach',
        },
        metrics: [
          {
            value: 'USD $2.5M-$50M',
            label: language === 'en' ? 'Observed luxury pricing range' : '觀察中的精品住宅價格帶',
          },
          {
            value: 'Mandarin + English',
            label: language === 'en' ? 'Client communication' : '客戶溝通語言',
          },
          {
            value: '4 core corridors',
            label: language === 'en' ? 'Priority SoCal submarkets' : '核心南加州觀察帶',
          },
        ],
      },
      thesis: {
        label: language === 'en' ? 'Investment thesis' : '投資論點',
        title:
          language === 'en'
            ? 'Luxury design language supported by a disciplined cross-border acquisition strategy.'
            : '以精品設計語彙包裝，並以嚴謹跨境收購策略支撐。',
        description:
          language === 'en'
            ? 'We present Southern California not as generic overseas property, but as a curated portfolio of scarce, dollar-denominated assets aligned to family mobility, education access, and long-term wealth protection.'
            : '我們把南加州視為稀缺、美元計價、可支撐家庭移動與長期財富保全的資產組合，而非一般海外房產。',
        items: localizeInsights(language, homeThesisSource),
      },
      watchPreview: {
        label: language === 'en' ? 'Public market watch' : '公開市場觀測',
        title:
          language === 'en'
            ? 'Real listings re-framed as investment context, not generic brochure inventory.'
            : '把公開案源轉化為投資脈絡，而非一般型錄式房源展示。',
        description:
          language === 'en'
            ? 'Each card below references a public listing and explains why it matters to Taiwanese buyers thinking about prestige, schooling, or long-hold value.'
            : '下方每張卡片皆引用公開案源，並解釋其對重視地位感、教育與長期配置的台灣買方有何意義。',
      },
      servicePreview: {
        label: language === 'en' ? 'Advisory model' : '顧問服務模式',
        title: language === 'en' ? 'We sit between sourcing, execution, and post-close operations.' : '我們串接物件搜尋、交易執行與成交後管理。',
        description:
          language === 'en'
            ? 'Clients receive a premium, bilingual workflow instead of piecing together brokers, vendors, and tax conversations on their own.'
            : '客戶得到的是完整的雙語高端服務流程，而不是自行拼湊經紀人、供應商與稅務顧問。',
      },
      cta: {
        label: language === 'en' ? 'Private consultation' : '私密諮詢',
        title: language === 'en' ? 'Request a confidential Southern California investment briefing.' : '預約一場南加州不動產配置私密簡報。',
        description:
          language === 'en'
            ? 'Share your budget, preferred submarkets, and intended use. We will reply with a bilingual next-step recommendation.'
            : '請提供您的預算、偏好區域與資產用途，我們將以雙語回覆適合的下一步建議。',
        button: language === 'en' ? 'Go to contact page' : '前往聯絡頁',
      },
    },
    opportunities: {
      label: language === 'en' ? 'Public market watch' : '公開市場觀測',
      title:
        language === 'en'
          ? 'Southern California luxury listings used as real market references'
          : '以真實公開案源作為南加州精品住宅市場參考',
      description:
        language === 'en'
          ? 'These are public listing snapshots used as benchmarks for pricing, product type, and buyer positioning. They are not represented as exclusive inventory.'
          : '以下皆為公開案源快照，用來觀察價格、產品類型與買方定位；並非宣稱為獨家代理物件。',
      noteTitle: language === 'en' ? 'How to read these cards' : '如何閱讀這些卡片',
      noteBody:
        language === 'en'
          ? 'We use public listings to frame conversations around coastal prestige, family schooling, leasing defensiveness, and brand value. Final recommendations depend on your mandate.'
          : '我們用公開案源來說明海岸地位型、家庭學區型、租賃防禦型與品牌價值型資產差異；真正建議仍會依您的配置目標調整。',
    },
    services: {
      label: language === 'en' ? 'Advisory services' : '顧問服務',
      title: language === 'en' ? 'A premium service model for overseas buyers who need precision' : '專為海外買方設計的高端精準服務模式',
      description:
        language === 'en'
          ? 'We sit between property sourcing, execution, and post-close operations so clients can move with clarity rather than assembling separate vendors alone.'
          : '我們串接物件搜尋、交易執行與成交後管理，讓客戶能以更清楚的節奏完成配置，而非自行整合多方供應商。',
      advisoryTitle: language === 'en' ? 'Private advisory desk' : '私密顧問平台',
      advisoryHeading: language === 'en' ? 'From first inquiry in Taiwan to stabilized ownership in California.' : '從台灣端初次洽詢，到加州端資產穩定持有。',
      advisoryCopy:
        language === 'en'
          ? 'Our workflow can extend into lender introductions, entity planning, furnishing, leasing support, renovation oversight, and recurring portfolio reviews.'
          : '服務流程可延伸至貸款對接、持有架構規劃、家具配置、出租支持、整修監督與定期資產回顧。',
      processLabel: language === 'en' ? 'Execution path' : '執行流程',
      processTitle: language === 'en' ? 'A four-step framework built for overseas principals who value clarity.' : '為重視清晰度與效率的海外買方設計的四步框架。',
      processDescription:
        language === 'en'
          ? 'The goal is to reduce friction, compress decision cycles, and keep Taiwan- and California-based stakeholders aligned.'
          : '目標是降低跨境摩擦、縮短決策時間，並讓台灣與加州兩地參與者維持一致節奏。',
      processSteps: processStepsSource.map((step) => pick(language, step)),
    },
    market: {
      label: language === 'en' ? 'Market perspective' : '市場觀點',
      title: language === 'en' ? 'Where Taiwanese investors most often find fit in Southern California' : '台灣投資人最常在南加州找到匹配度的區域',
      description:
        language === 'en'
          ? 'Different corridors serve different mandates: school access, prestige coastal living, executive leasing, or future family mobility.'
          : '不同走廊對應不同目標：學區、自住地位、企業租賃，或未來家庭移動彈性。',
      signalsLabel: language === 'en' ? 'Priority corridors' : '重點走廊',
      insightsLabel: language === 'en' ? 'What we are seeing' : '目前觀察',
      insightsTitle:
        language === 'en'
          ? 'The strongest fit usually comes from matching the right submarket to the right family mandate.'
          : '真正的高匹配度，通常來自把正確子市場對應到正確家庭目標。',
      insightsDescription:
        language === 'en'
          ? 'Pricing alone is not the decision. School access, prestige signaling, rental defensiveness, and future mobility all shape the right recommendation.'
          : '價格從來不是唯一決策因素，學區、地位感、租賃防禦性與未來家庭移動性都會改變最終建議。',
      signals: localizeSignals(language),
      insights: localizeInsights(language, marketInsightsSource),
    },
    contact: {
      label: language === 'en' ? 'Contact' : '聯絡我們',
      heading: language === 'en' ? 'Request a confidential consultation' : '預約一場私密顧問諮詢',
      body:
        language === 'en'
          ? 'Share your budget, preferred submarkets, and intended use. We will reply with a bilingual next-step recommendation.'
          : '請提供您的預算、偏好區域與資產用途，我們將以雙語回覆適合的下一步建議。',
      directTitle: language === 'en' ? 'Direct contact' : '直接聯繫',
      directDescription:
        language === 'en'
          ? 'You may also contact us directly through the channels below.'
          : '您也可以透過以下方式直接聯繫我們。',
      directItems: [
        config.contact.email,
        config.contact.phone,
        lineLabel,
        pick(language, config.contact.location),
      ],
      formLabels: {
        name: language === 'en' ? 'Investor name' : '投資人姓名',
        company: language === 'en' ? 'Company / family office' : '公司 / 家族辦公室',
        email: 'Email',
        phone: language === 'en' ? 'Phone / WhatsApp / LINE' : '電話 / WhatsApp / LINE',
        budget: language === 'en' ? 'Budget range' : '預算範圍',
        location: language === 'en' ? 'Preferred submarkets' : '偏好區域',
        timeline: language === 'en' ? 'Decision timeline' : '預計決策時間',
        goals: language === 'en' ? 'Investment goals' : '投資目標',
      },
      placeholders: {
        name: language === 'en' ? 'Your name' : '您的姓名',
        company: language === 'en' ? 'Optional' : '選填',
        email: 'name@example.com',
        phone: language === 'en' ? 'Optional' : '選填',
        budget: language === 'en' ? 'e.g. USD 3M - 8M' : '例如 USD 300萬 - 800萬',
        location: language === 'en' ? 'e.g. Irvine, Newport Coast, Arcadia' : '例如 Irvine、Newport Coast、Arcadia',
        timeline: language === 'en' ? 'e.g. Within 6 months' : '例如 6 個月內',
        goals:
          language === 'en'
            ? 'Lifestyle home, rental strategy, school access, or wealth preservation goals'
            : '自住、出租策略、學區需求或資產保值目標',
      },
      submit: language === 'en' ? 'Send inquiry' : '送出諮詢',
      submitting: language === 'en' ? 'Sending...' : '送出中...',
      feedback: {
        success: language === 'en' ? 'Your inquiry has been received. We will respond shortly.' : '已收到您的諮詢，我們將盡快回覆。',
        error: language === 'en' ? 'Unable to send right now. Please try again shortly.' : '目前無法送出，請稍後再試。',
      },
    },
    marketWatch,
    servicePillars,
  }
}

export const defaultSiteConfig = fallbackConfig

export const defaultSiteContent: Record<Language, SiteContent> = {
  en: buildRuntimeContent('en', fallbackConfig),
  zh: buildRuntimeContent('zh', fallbackConfig),
}

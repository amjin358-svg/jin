export type Language = 'en' | 'zh'

export type LocalizedText = Record<Language, string>

export type NavItem = {
  to: string
  label: string
}

export type Metric = {
  value: string
  label: string
}

export type InsightCard = {
  title: string
  copy: string
}

export type MarketWatchItem = {
  region: string
  address: string
  price: string
  specs: string[]
  source: string
  sourceUrl: string
  status: string
  summary: string
  investmentAngle: string
  visualTag: string
  image: string
}

export type ServicePillar = {
  eyebrow: string
  title: string
  copy: string
}

export type SubmarketSignal = {
  name: string
  profile: string
  score: string
}

export type ContactFieldSet = {
  name: string
  company: string
  email: string
  phone: string
  budget: string
  location: string
  timeline: string
  goals: string
}

export type SiteContent = {
  brand: {
    name: string
    tagline: string
  }
  nav: NavItem[]
  navCta: string
  footer: string
  common: {
    sourceLabel: string
    requestBriefing: string
    requestConsultation: string
    publicSnapshotNote: string
  }
  home: {
    hero: {
      eyebrow: string
      title: string
      highlight: string
      description: string
      primaryCta: string
      secondaryCta: string
      heroCardTop: {
        label: string
        value: string
      }
      heroCardBottom: {
        label: string
        value: string
      }
      metrics: Metric[]
    }
    thesis: {
      label: string
      title: string
      description: string
      items: InsightCard[]
    }
    watchPreview: {
      label: string
      title: string
      description: string
    }
    servicePreview: {
      label: string
      title: string
      description: string
    }
    cta: {
      label: string
      title: string
      description: string
      button: string
    }
  }
  opportunities: {
    label: string
    title: string
    description: string
    noteTitle: string
    noteBody: string
  }
  services: {
    label: string
    title: string
    description: string
    advisoryTitle: string
    advisoryHeading: string
    advisoryCopy: string
    processLabel: string
    processTitle: string
    processDescription: string
    processSteps: string[]
  }
  market: {
    label: string
    title: string
    description: string
    signalsLabel: string
    insightsLabel: string
    insightsTitle: string
    insightsDescription: string
    signals: SubmarketSignal[]
    insights: InsightCard[]
  }
  contact: {
    label: string
    heading: string
    body: string
    directTitle: string
    directItems: string[]
    directDescription: string
    formLabels: ContactFieldSet
    placeholders: ContactFieldSet
    submit: string
    submitting: string
    feedback: {
      success: string
      error: string
    }
  }
  marketWatch: MarketWatchItem[]
  servicePillars: ServicePillar[]
}

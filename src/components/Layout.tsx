import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import type { Language, SiteContent } from '../types'

type LayoutProps = {
  children: ReactNode
  content: SiteContent
  language: Language
  onToggleLanguage: () => void
}

const CONTACT_EMAIL = 'invest@formosapacific.com'

export function Layout({ children, content, language, onToggleLanguage }: LayoutProps) {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="section site-header__inner">
          <Link className="brand" to="/">
            <div className="brand__mark">PC</div>
            <div className="brand__text">
              <span className="brand__name">{content.brand.name}</span>
              <span className="brand__subline">{content.brand.tagline}</span>
            </div>
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {content.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
            <button className="lang-toggle" type="button" onClick={onToggleLanguage}>
              {language === 'en' ? '中文' : 'EN'}
            </button>
            <a className="header-cta" href={`mailto:${CONTACT_EMAIL}`}>
              {content.navCta}
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="section footer">
        <div className="footer__inner">
          <span>{content.brand.name}</span>
          <span>{content.footer}</span>
        </div>
      </footer>
    </div>
  )
}

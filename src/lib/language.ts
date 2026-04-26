export const languages = ['en', 'zh'] as const

export type Language = (typeof languages)[number]

const STORAGE_KEY = 'pacific-crest-language'

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language)
}

export function getStoredLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'zh'
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && isLanguage(stored)) {
    return stored
  }

  const browserLanguage = window.navigator.language
  return browserLanguage.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export function persistLanguage(language: Language) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, language)
  }
}

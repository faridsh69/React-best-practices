import i18next from 'i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'

import { initReactI18next } from 'react-i18next'

import de from 'src/locales/de.json'
import en from 'src/locales/en.json'

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources: {
      en: {
        translation: en,
      },
      de: {
        translation: de,
      },
    },
    fallbackLng: 'en',
    debug: false,
  })

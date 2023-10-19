import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'

import deLocales from 'src/locales/de.json'
import enLocales from 'src/locales/en.json'
import { EN_LANGUAGE } from 'src/configs/theme'

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources: {
      en: {
        translation: enLocales,
      },
      de: {
        translation: deLocales,
      },
    },
    fallbackLng: EN_LANGUAGE,
    debug: false,
  })

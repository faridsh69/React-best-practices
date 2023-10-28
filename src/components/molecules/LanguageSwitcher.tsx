import { useTranslation } from 'react-i18next'
import { FormControl, Select, MenuItem } from '@mui/material'

import { DE_LANGUAGE, EN_LANGUAGE, FLAG_LOCALES } from 'src/configs/locale'

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === EN_LANGUAGE ? DE_LANGUAGE : EN_LANGUAGE)
  }

  return (
    <FormControl size='small' variant='filled'>
      <Select value={i18n.language} onChange={changeLanguage}>
        {Object.keys(FLAG_LOCALES).map(locale => (
          <MenuItem value={locale} key={locale}>
            {/* @ts-ignore */}
            <img src={FLAG_LOCALES[locale]} alt={locale} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

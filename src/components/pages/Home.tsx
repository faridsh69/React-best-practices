import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const Home = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')
  }
  return (
    <div>
      <button onClick={changeLanguage}>test change language</button>
      {t('hello wolrd')}
      <br />
      <Link to='admin'>admin </Link>
    </div>
  )
}

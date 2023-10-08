import { useAtom } from 'jotai'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { testContext } from 'src/contexts/testContext'

export const Home = () => {
  const { t, i18n } = useTranslation()

  const [text, setText] = useAtom(testContext)

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')
  }
  return (
    <div>
      <button onClick={() => setText(text + 1)}>test state management</button>
      <button onClick={changeLanguage}>test change language</button>
      {t('hello wolrd')} {text}
      <br />
      <Link to='admin'>admin </Link>
    </div>
  )
}

import { useAtom } from 'jotai'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
import Container from '@mui/material/Container'

import { themeAtom } from 'src/contexts/themeAtom'
import { DARK_THEME_NAME, LIGHT_THEME_NAME } from 'src/configs/constants'

export const Home = () => {
  const { t, i18n } = useTranslation()

  const [theme, setTheme] = useAtom(themeAtom)

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')
  }

  const changeTheme = () => {
    setTheme(theme === DARK_THEME_NAME ? LIGHT_THEME_NAME : DARK_THEME_NAME)
  }

  return (
    <Container component='main' maxWidth='xl'>
      <Button variant='contained' onClick={changeLanguage}>
        Change Language
      </Button>
      <Button variant='outlined' onClick={changeTheme}>
        Change Theme
      </Button>
      {t('hello wolrd')}
      <br />
      <Link to='admin'>admin </Link>
    </Container>
  )
}

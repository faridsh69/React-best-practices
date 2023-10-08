import { useAtom } from 'jotai'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
import Container from '@mui/material/Container'

import { DARK_THEME_NAME, LIGHT_THEME_NAME } from 'src/configs/constants'
import { themeAtom } from 'src/contexts/themeAtom'
import { useCrud } from 'src/hooks/useCrud'

export const Home = () => {
  const { t, i18n } = useTranslation()

  const [theme, setTheme] = useAtom(themeAtom)

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')
  }

  const changeTheme = () => {
    setTheme(theme === DARK_THEME_NAME ? LIGHT_THEME_NAME : DARK_THEME_NAME)
  }

  const { item } = useCrud('orders', {
    orderNumber: '0000RTAB1',
    zipCode: '60156',
  })
  console.log('1 item', item)

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
      <Link to='admin'>Admin</Link>
    </Container>
  )
}

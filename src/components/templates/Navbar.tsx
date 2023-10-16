import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'
import { useTranslation } from 'react-i18next'
import { useAtom } from 'jotai'
import { themeAtom } from 'src/contexts/themeAtom'
import { useAuth } from 'src/hooks/useAuth'
import { getToken } from 'src/helpers/auth'
import { DARK_THEME_NAME, LIGHT_THEME_NAME } from 'src/configs/constants'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [theme, setTheme] = useAtom(themeAtom)
  const { i18n } = useTranslation()
  const { handleLogout } = useAuth()

  const accessToken = getToken()

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')
  }

  const changeTheme = () => {
    setTheme(theme === DARK_THEME_NAME ? LIGHT_THEME_NAME : DARK_THEME_NAME)
  }

  return (
    <AppBar position='static'>
      {/* {renderMobileMenu}
      {renderMenu} */}
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='open drawer'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          MUI
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
            <Badge badgeContent={4} color='error'>
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
            <Badge badgeContent={17} color='error'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size='large'
            edge='end'
            aria-label='account of current user'
            // aria-controls={menuId}
            aria-haspopup='true'
            // onClick={handleProfileMenuOpen}
            color='inherit'
          >
            <AccountCircle />
          </IconButton>
          <Button variant='contained' onClick={changeLanguage}>
            Change Language
          </Button>
          <Button variant='contained' onClick={changeTheme}>
            Change Theme
          </Button>
          {accessToken && <Link to='/admin'>Admin</Link>}

          {accessToken && (
            <Button variant='contained' onClick={handleLogout}>
              Logout
            </Button>
          )}
          {!accessToken && <Link to='/login'>Login</Link>}
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size='large'
            aria-label='show more'
            // aria-controls={mobileMenuId}
            aria-haspopup='true'
            // onClick={handleMobileMenuOpen}
            color='inherit'
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

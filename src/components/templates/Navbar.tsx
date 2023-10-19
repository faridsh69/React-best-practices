import { useAtom } from 'jotai'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Menu,
  Badge,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MoreIcon from '@mui/icons-material/MoreVert'
import AccountCircle from '@mui/icons-material/AccountCircle'
import NotificationsIcon from '@mui/icons-material/Notifications'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

import { themeAtom } from 'src/contexts/themeAtom'
import { useAuth } from 'src/hooks/useAuth'
import { getToken } from 'src/helpers/auth'
import {
  DARK_THEME_NAME,
  DE_LANGUAGE,
  EN_LANGUAGE,
  LIGHT_THEME_NAME,
  FLAG_LOCALES,
} from 'src/configs/theme'
import { useState } from 'react'

export const Navbar = () => {
  const [theme, setTheme] = useAtom(themeAtom)
  const { i18n } = useTranslation()
  const { handleLogout } = useAuth()

  const accessToken = getToken()

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === EN_LANGUAGE ? DE_LANGUAGE : EN_LANGUAGE)
  }

  const changeTheme = () => {
    setTheme(theme === DARK_THEME_NAME ? LIGHT_THEME_NAME : DARK_THEME_NAME)
  }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position='static' sx={{ zIndex: '1111111111' }}>
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
        <IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <FormControl>
          <InputLabel id='demo-simple-select-label' htmlFor='open-select' />
          <Select
            label='label'
            labelId='demo-simple-select-label'
            value={i18n.language}
            name='language'
            onChange={changeLanguage}
            inputProps={{
              id: 'open-select',
            }}
          >
            {Object.keys(FLAG_LOCALES).map(locale => (
              <MenuItem value={locale} key={locale}>
                {/* @ts-ignore */}
                <img src={FLAG_LOCALES[locale]} alt={locale} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <IconButton
          sx={{ fontSize: '1rem' }}
          onClick={changeTheme}
          color='inherit'
          disableTouchRipple
          disableRipple
        >
          {theme === DARK_THEME_NAME ? (
            <LightModeIcon sx={{ color: 'yellow' }} />
          ) : (
            <DarkModeIcon sx={{ color: 'black' }} />
          )}
        </IconButton>
        {!accessToken && <Link to='/login'>Login</Link>}
        {accessToken && (
          <IconButton
            size='large'
            edge='end'
            aria-label='account of current user'
            aria-haspopup='true'
            onClick={handleProfileMenuOpen}
            color='inherit'
          >
            <AccountCircle />
          </IconButton>
        )}

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton size='large' aria-label='show more' aria-haspopup='true' color='inherit'>
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id='primary-search-account-menu'
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

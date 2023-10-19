import { Link } from 'react-router-dom'
import {
  AppBar,
  Box,
  IconButton,
  Button,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  Badge,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MoreIcon from '@mui/icons-material/MoreVert'
import AccountCircle from '@mui/icons-material/AccountCircle'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useAuth } from 'src/hooks/useAuth'
import { getToken } from 'src/helpers/auth'
import { useState } from 'react'
import { ThemeSwitcher } from '../molecules/ThemeSwitcher'
import { LanguageSwitcher } from '../molecules/LanguageSwitcher'
import LogoutIcon from '@mui/icons-material/Logout'
import BadgeIcon from '@mui/icons-material/Badge'

export const Navbar = () => {
  const { handleLogout } = useAuth()

  const accessToken = getToken()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position='static' sx={{ zIndex: 1201 }}>
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
          Digital Menu
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <LanguageSwitcher />
        <ThemeSwitcher />
        {!accessToken && (
          <Button color='inherit' component={Link} to='/login'>
            Login
          </Button>
        )}
        {accessToken && (
          <IconButton size='large' onClick={handleProfileMenuOpen} color='inherit'>
            <AccountCircle />
          </IconButton>
        )}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton size='large' color='inherit'>
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Menu
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ zIndex: 1201 }}
      >
        <MenuItem onClick={handleMenuClose} sx={{ gap: 2 }}>
          <BadgeIcon />
          Profile
        </MenuItem>
        <MenuItem onClick={handleLogout} sx={{ gap: 2 }}>
          <LogoutIcon /> Logout
        </MenuItem>
      </Menu>
    </AppBar>
  )
}

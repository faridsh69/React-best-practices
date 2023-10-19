import { useAtom } from 'jotai'
import { IconButton } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

import { DARK_THEME_NAME, LIGHT_THEME_NAME } from 'src/configs/theme'
import { themeAtom } from 'src/contexts/themeAtom'

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useAtom(themeAtom)

  const changeTheme = () => {
    setTheme(theme === DARK_THEME_NAME ? LIGHT_THEME_NAME : DARK_THEME_NAME)
  }

  return (
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
  )
}

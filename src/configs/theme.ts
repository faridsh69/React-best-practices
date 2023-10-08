import { createTheme } from '@mui/material'
import { green, orange } from '@mui/material/colors'

export const LIGHT_THEME = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
})

export const DARK_THEME = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
})

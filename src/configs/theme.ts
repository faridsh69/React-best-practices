import { enUS, deDE } from '@mui/material/locale'

export const EN_LANGUAGE = 'en'
export const DE_LANGUAGE = 'de'

export const LOCALES = {
  [EN_LANGUAGE]: enUS,
  [DE_LANGUAGE]: deDE,
}

export const LIGHT_THEME_NAME = 'light'
export const DARK_THEME_NAME = 'dark'

export const LIGHT_THEME = {
  palette: {
    mode: 'light',
    // primary: {
    //   main: orange[500],
    // },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: '0px',
        },
      },
    },
  },
}

export const DARK_THEME = {
  palette: {
    mode: 'dark',
    // primary: {
    //   main: green[500],
    // },
  },
}

export const THEMES = {
  [LIGHT_THEME_NAME]: LIGHT_THEME,
  [DARK_THEME_NAME]: DARK_THEME,
}

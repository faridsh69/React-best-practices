export const LIGHT_THEME = {
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {},
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: '0px',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {},
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {},
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {},
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {},
        outlined: {},
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {},
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // margin: '0px',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,

      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
      bigDesktop: 1800,
    },
  },
  palette: {
    mode: 'light',
    // primary: {
    //   main: '#f00',
    // },
    // secondary: {
    //   main: '#0f0',
    // },
  },
}

export const LIGHT_THEME_NAME = 'light'
export const DARK_THEME_NAME = 'dark'

export const THEMES = {
  [LIGHT_THEME_NAME]: LIGHT_THEME,
  [DARK_THEME_NAME]: {
    ...LIGHT_THEME,
    palette: {
      mode: 'dark',
    },
  },
}

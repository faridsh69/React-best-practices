import { useMemo } from 'react'
import { useAtom } from 'jotai'
import { QueryClientProvider } from 'react-query'
import { useTranslation } from 'react-i18next'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

import { useInternetConnection } from 'src/hooks/useInternetConnection'
import { REACT_QUERY_CLIENT } from 'src/configs/service'
import { MUI_LOCALES } from 'src/configs/locale'
import { themeAtom } from 'src/contexts/themeAtom'
import { MetaTags } from 'src/components/templates/MetaTags'
import { THEMES } from 'src/configs/theme'
import { Router } from 'src/configs/router'
import 'src/configs/locale'
import 'src/configs/styles'

export const App = () => {
  const [theme] = useAtom(themeAtom)
  const { i18n } = useTranslation()

  useInternetConnection()

  const themeWithLocale = useMemo(
    // @ts-ignore
    () => createTheme(THEMES[theme], MUI_LOCALES[i18n.language]),
    [i18n.language, theme],
  )

  return (
    <ThemeProvider theme={themeWithLocale}>
      <CssBaseline />
      <MetaTags />
      <ToastContainer pauseOnFocusLoss={false} position='bottom-right' />
      <QueryClientProvider client={REACT_QUERY_CLIENT}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

import { useAtom } from 'jotai'
import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'

import { Router } from 'src/configs/router'
import { themeAtom } from 'src/contexts/themeAtom'
import { MetaTags } from 'src/components/templates/MetaTags'
import { THEMES } from './configs/constants'
import { REACT_QUERY_CLIENT } from 'src/configs/service'
import { ToastContainer } from 'react-toastify'
import { useInternetConnection } from './hooks/useInternetConnection'
import 'src/configs/locale'
import 'src/configs/styles'

export const App = () => {
  const [theme] = useAtom(themeAtom)

  useInternetConnection()

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <CssBaseline />
      <MetaTags />
      <ToastContainer pauseOnFocusLoss={false} />
      <QueryClientProvider client={REACT_QUERY_CLIENT}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

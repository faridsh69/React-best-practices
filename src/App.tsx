import { useAtom } from 'jotai'
import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'

import { ROUTES } from 'src/configs/router'
import { themeAtom } from 'src/contexts/themeAtom'
import { SharedHeaders } from 'src/components/organisms/SharedHeaders'
import 'src/configs/locale'
import { THEMES } from './configs/constants'
import { REACT_QUERY_CLIENT } from 'src/configs/service'

export const App = () => {
  const [theme] = useAtom(themeAtom)

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <QueryClientProvider client={REACT_QUERY_CLIENT}>
        <SharedHeaders />
        <RouterProvider router={ROUTES} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

import { useAtom } from 'jotai'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'

import { ROUTES } from 'src/configs/router'
import { themeAtom } from 'src/contexts/themeAtom'
import { SharedHeaders } from 'src/components/organisms/SharedHeaders'
import 'src/configs/locale'
import { THEMES } from './configs/constants'

export const App = () => {
  const [theme] = useAtom(themeAtom)

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <SharedHeaders />
      <RouterProvider router={ROUTES} />
    </ThemeProvider>
  )
}

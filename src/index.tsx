import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { router } from 'src/configs/router'
import 'src/configs/locale'
import { SharedHeaders } from 'src/components/molecules/SharedHeaders'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SharedHeaders />
    <RouterProvider router={router} />
  </React.StrictMode>,
)

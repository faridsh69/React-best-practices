import { createBrowserRouter } from 'react-router-dom'

import { Suspender } from 'src/components/molecules/Suspender'
import { ErrorPage } from 'src/components/molecules/ErrorPage'
import { Home } from 'src/components/pages/Home'

export const ROUTES = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'admin',
    element: <Suspender pageName='AdminLayout' />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ':model',
        element: <Suspender pageName='AdminModelList' />,
      },
      {
        path: ':model/create',
        element: <Suspender pageName='AdminModelForm' />,
      },
      {
        path: ':model/:id',
        element: <Suspender pageName='AdminModelShow' />,
      },
      {
        path: ':model/:id/edit',
        element: <Suspender pageName='AdminModelForm' />,
      },
    ],
  },
])

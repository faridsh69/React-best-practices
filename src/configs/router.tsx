import { createBrowserRouter } from 'react-router-dom'

import { Suspender } from 'src/components/molecules/Suspender'
import { ErrorPage } from 'src/components/molecules/ErrorPage'
import { Home } from 'src/components/pages/Home'
import { RoutesType } from 'src/interfaces'

const ROUTES: RoutesType = [
  {
    name: 'home',
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    name: 'admin',
    path: 'admin',
    element: <Suspender pageName='AdminLayout' />,
    errorElement: <ErrorPage />,
    children: [
      {
        name: 'admin-list',
        path: ':model',
        element: <Suspender pageName='AdminModelList' />,
      },
      {
        name: 'admin-form',
        path: ':model/create',
        element: <Suspender pageName='AdminModelForm' />,
      },
      {
        name: 'admin-show',
        path: ':model/:id',
        element: <Suspender pageName='AdminModelShow' />,
      },
      {
        name: 'admin-edit',
        path: ':model/:id/edit',
        element: <Suspender pageName='AdminModelForm' />,
      },
    ],
  },
]

export const Router = createBrowserRouter(ROUTES)

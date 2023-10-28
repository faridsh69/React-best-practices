import { createBrowserRouter } from 'react-router-dom'

import { Home } from 'src/components/pages/Home'
import { Suspender } from 'src/components/organisms/Suspender'
import { ErrorPage } from 'src/components/molecules/ErrorPage'
import { RoutesType } from 'src/interfaces'

const ROUTES: RoutesType = [
  {
    name: 'home',
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    name: 'login',
    path: '/login',
    element: <Suspender pageName='Login' guest />,
    errorElement: <ErrorPage />,
  },
  {
    name: 'admin',
    path: 'admin',
    element: <Suspender pageName='AdminLayout' auth />,
    errorElement: <ErrorPage />,
    children: [
      {
        name: 'admin-list',
        path: ':model',
        element: <Suspender pageName='AdminList' auth />,
      },
      {
        name: 'admin-profile',
        path: 'profile',
        element: <Suspender pageName='AdminProfile' auth />,
      },
      {
        name: 'admin-form',
        path: ':model/create',
        element: <Suspender pageName='AdminForm' auth />,
      },
      {
        name: 'admin-show',
        path: ':model/:id',
        element: <Suspender pageName='AdminShow' auth />,
      },
      {
        name: 'admin-edit',
        path: ':model/:id/edit',
        element: <Suspender pageName='AdminForm' auth />,
      },
    ],
  },
]

export const Router = createBrowserRouter(ROUTES)

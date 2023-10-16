import { Suspense, lazy } from 'react'
import { Navigate } from 'react-router-dom'

import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from 'src/configs/constants'
import { getLocalstorage } from 'src/helpers/common'
import { Loading } from 'src/components/molecules/Loading'
import { TypeSuspenderComponent } from 'src/interfaces'

export const Suspender: TypeSuspenderComponent = props => {
  const { pageName = 'AdminLayout', auth = false, guest = false } = props
  const accessToken = getLocalstorage(LOCAL_STORAGE_ACCESS_TOKEN_KEY)

  if (auth && !accessToken) {
    return <Navigate to='/login' replace={true} />
  }

  if (guest && accessToken) {
    return <Navigate to='/admin' replace={true} />
  }

  const LazyComponent = lazy(() => import(`../pages/${pageName}.tsx`))

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <LazyComponent />{' '}
      </Suspense>
    </div>
  )
}

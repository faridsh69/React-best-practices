import { Suspense, lazy } from 'react'

export const Suspender = props => {
  const { pageName = 'AdminLayout' } = props
  const LazyComponent = lazy(() => import(`../pages/${pageName}.tsx`))

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />{' '}
      </Suspense>
    </div>
  )
}

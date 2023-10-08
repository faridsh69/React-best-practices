import React, { Suspense } from 'react'

export const Suspender = props => {
  const { pageName } = props
  const LazyComponent = React.lazy(() => import(`../pages/${pageName}`))

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />{' '}
      </Suspense>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()
  console.error('***ErrorPage***', error)
  // @TODO add sentry to project or collect errors

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <pre>{error.statusText || error.message}</pre>
      <Link to=''>Go Home</Link>
    </div>
  )
}

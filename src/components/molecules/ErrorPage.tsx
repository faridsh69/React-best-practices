import { Link } from 'react-router-dom'
import { useRouteError } from 'react-router-dom'
import { errorHandler } from 'src/helpers/errorHandler'

export const ErrorPage = () => {
  const error = useRouteError()

  errorHandler(error)

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <pre>{error.statusText || error.message}</pre>
      <Link to=''>Go Home</Link>
    </div>
  )
}

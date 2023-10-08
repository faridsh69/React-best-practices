import { Helmet } from 'react-helmet'

export const SharedHeaders = () => {
  return (
    <Helmet>
      <title>My Title</title>
      <meta name='description' content='Helmet application' />
    </Helmet>
  )
}

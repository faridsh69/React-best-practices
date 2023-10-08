import i18next from 'i18next'
import { ToastContainer } from 'react-toastify'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import 'react-toastify/dist/ReactToastify.css'

import { META_TAGS } from 'src/configs/constants'
import { useInternetConnection } from 'src/hooks/useInternetConnection'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export const SharedHeaders = () => {
  const { title, description, keywords, image, author, domain } = META_TAGS

  useInternetConnection()

  return (
    <div>
      <ToastContainer pauseOnFocusLoss={false} />
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>

          <meta name='keywords' content={keywords} />
          <meta name='description' content={description} />
          <meta name='image' content={image} />
          <meta name='author' content={author} />

          <meta itemProp='name' content={title} />
          <meta itemProp='description' content={description} />
          <meta itemProp='image' content={image} />

          <meta property='og:title' content={title} />
          <meta property='og:description' content={description} />
          <meta property='og:type' content='website' />
          <meta property='og:locale' content={i18next.language} />
          <meta property='og:locale:alternate' content={i18next.language} />
          <meta property='og:image' content={image} />
          <meta property='og:site_name' content={domain} />

          <meta property='twitter:card' content='summary' />
          <meta property='twitter:site' content={domain} />
          <meta property='twitter:title' content={title} />
          <meta property='twitter:description' content={description} />
          <meta property='twitter:creator' content={author} />
          <meta property='twitter:image' content={image} />
        </Helmet>
      </HelmetProvider>
    </div>
  )
}

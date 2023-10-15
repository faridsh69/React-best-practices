import i18next from 'i18next'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { META_TAGS } from 'src/configs/constants'

export const MetaTags = () => {
  const { title, description, keywords, image, author, domain } = META_TAGS

  return (
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
  )
}

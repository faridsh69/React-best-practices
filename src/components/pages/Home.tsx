import { useTranslation } from 'react-i18next'

import { PageLayout } from 'src/components/templates/PageLayout'

export const Home = () => {
  const { t } = useTranslation()

  return <PageLayout>{t('hello wolrd')}</PageLayout>
}

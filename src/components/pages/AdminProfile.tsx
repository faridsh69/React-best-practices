import { useTranslation } from 'react-i18next'

import { PROFILE_SCHEMA } from 'src/configs/schemas'
import { FormMui } from 'src/components/organisms/FormMui'
import { RadioController } from '../organisms/controllers/RadioController'

const AdminProfile = () => {
  const { t } = useTranslation()

  const onSubmit = data => {
    console.log('1 data', data)
  }

  const user = {}

  return (
    <div>
      <FormMui
        schema={PROFILE_SCHEMA}
        onSubmit={onSubmit}
        submitText={t('Update')}
        defaultValues={user}
        inputs={[
          {
            name: 'first_name',
          },
          {
            name: 'last_name',
          },
          {
            name: 'birth_date',
          },
          {
            component: RadioController,
            name: 'gender',
            options: [
              {
                value: 'female',
                label: 'female',
              },
              {
                value: 'male',
                label: 'male',
              },
              {
                value: 'other',
                label: 'other',
              },
            ],
          },
        ]}
      />
    </div>
  )
}

export default AdminProfile

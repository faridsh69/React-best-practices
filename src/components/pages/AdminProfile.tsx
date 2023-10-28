import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { useCrud } from 'src/hooks/useCrud'
import { getLocalstorage } from 'src/helpers/common'
import { PROFILE_SCHEMA } from 'src/configs/schemas'
import { LOCAL_STORAGE_AUTH_USER_EMAIL } from 'src/configs/constants'
import { FormMui } from 'src/components/organisms/FormMui'
import { Loading } from 'src/components/molecules/Loading'
import { RadioController } from 'src/components/organisms/controllers/RadioController'
import { DateController } from 'src/components/organisms/controllers/DateController'
import { CheckBoxController } from 'src/components/organisms/controllers/CheckboxController'

const AdminProfile = () => {
  const { t } = useTranslation()
  const { list: users, updateMutation } = useCrud('user')
  const authEmail = getLocalstorage(LOCAL_STORAGE_AUTH_USER_EMAIL)
  const authUser = useMemo(() => users.find(u => u.email == authEmail), [users, authEmail])

  const onSubmit = data => {
    delete data.name
    updateMutation.mutate(data)
  }

  if (authEmail && !authUser) return <Loading />

  return (
    <div>
      <FormMui
        schema={PROFILE_SCHEMA}
        onSubmit={onSubmit}
        submitText={t('Update')}
        defaultValues={authUser}
        inputs={[
          {
            name: 'first_name',
          },
          {
            name: 'last_name',
          },
          {
            component: CheckBoxController,
            name: 'activated',
          },
          {
            component: RadioController,
            name: 'gender',
            options: [
              {
                value: '1',
                label: 'male',
              },
              {
                value: '0',
                label: 'female',
              },
            ],
          },

          {
            component: DateController,
            name: 'birth_date',
          },
        ]}
      />
    </div>
  )
}

export default AdminProfile

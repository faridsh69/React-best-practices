import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { FOOD_SCHEMA } from 'src/configs/schemas'
import { useCrud } from 'src/hooks/useCrud'
import { CheckBoxController } from 'src/components/organisms/controllers/CheckboxController'
import { FormMui } from 'src/components/organisms/FormMui'
import { Loading } from 'src/components/molecules/Loading'
import { TextEditorController } from '../organisms/controllers/TextEditorController'

const AdminModelForm = () => {
  const { t } = useTranslation()

  const { model, id } = useParams()
  const { list, createMutation, updateMutation } = useCrud(model)

  const modelObject = useMemo(() => list.find(item => item.id == id), [list, id])

  const onSubmit = data => {
    if (id) {
      updateMutation.mutate(data)
    } else {
      createMutation.mutate(data)
    }
  }

  if (id && !modelObject) return <Loading />

  return (
    <div>
      <FormMui
        schema={FOOD_SCHEMA}
        onSubmit={onSubmit}
        submitText={id ? t('Update') : t('Create')}
        defaultValues={modelObject}
        inputs={[
          {
            name: 'title',
          },
          {
            name: 'url',
            label: 'URL',
          },
          {
            name: 'price',
            type: 'number',
          },
          {
            name: 'discount_price',
            type: 'number',
          },
          {
            name: 'description',
            multiline: true,
            rows: 3,
          },
          {
            component: CheckBoxController,
            name: 'activated',
            label: t('Available'),
          },
          {
            name: 'calorie',
            type: 'number',
          },
          {
            component: TextEditorController,
            name: 'content',
          },
        ]}
      />

      {/* category_id dropdown */}
      {/* tags, relateds multi-dropdown */}
      {/* image */}
      {/* video */}
      {/* order ?! */}
    </div>
  )
}

export default AdminModelForm

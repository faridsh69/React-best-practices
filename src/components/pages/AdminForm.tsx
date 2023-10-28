import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { FOOD_SCHEMA } from 'src/configs/schemas'
import { toFormalCase } from 'src/helpers/common'
import { useCrud } from 'src/hooks/useCrud'
import { CheckBoxController } from 'src/components/organisms/controllers/CheckboxController'
import { EditorController } from 'src/components/organisms/controllers/EditorController'
import { SelectController } from 'src/components/organisms/controllers/SelectController'
import { FormMui } from 'src/components/organisms/FormMui'
import { Loading } from 'src/components/molecules/Loading'

const AdminForm = () => {
  const { t } = useTranslation()

  const { model, id } = useParams()

  const modelId = +id

  const { list, createMutation, updateMutation } = useCrud(model)

  const modelObject = useMemo(() => list.find(item => item.id === modelId), [list, modelId])

  const { list: categories } = useCrud('category')
  const { list: tags } = useCrud('tag')

  const categoryOptions = useMemo(() => {
    return categories
      .filter(c => c.type === toFormalCase(model))
      .map(c => ({
        value: c.id,
        label: c.title,
      }))
  }, [categories, model])

  const tagOptions = useMemo(() => {
    return tags
      .filter(t => t.type === toFormalCase(model))
      .map(t => ({
        value: t.id,
        label: t.title,
      }))
  }, [tags, model])

  const relatedOptions = useMemo(() => {
    return list
      .filter(item => item.id !== modelId)
      .map(t => ({
        value: t.id,
        label: t.title,
      }))
  }, [list, modelId])

  const onSubmit = data => {
    if (id) {
      updateMutation.mutate(data)
    } else {
      createMutation.mutate(data)
    }
  }

  if (id && !modelObject) return <Loading />

  // images, videos, order

  return (
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
          name: 'category_id',
          component: SelectController,
          options: categoryOptions,
        },
        {
          name: 'tags',
          component: SelectController,
          options: tagOptions,
          multiple: true,
        },
        {
          name: 'relateds',
          component: SelectController,
          options: relatedOptions,
          multiple: true,
        },
        {
          name: 'url',
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
        },
        {
          name: 'calorie',
          type: 'number',
        },
        {
          name: 'content',
          component: EditorController,
        },
      ]}
    />
  )
}

export default AdminForm

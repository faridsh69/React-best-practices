import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button } from '@mui/material'

import { FOOD_SCHEMA } from 'src/configs/schemas'
import { InputController } from '../organisms/controllers/InputController'
import { CheckBoxController } from '../organisms/controllers/CheckboxController'
import { useParams } from 'react-router-dom'
import { useCrud } from 'src/hooks/useCrud'

const AdminModelForm = () => {
  const { t } = useTranslation()

  const { model, id } = useParams()
  const { list, updateMutation } = useCrud(model as string)

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(FOOD_SCHEMA),
    defaultValues: list.find(item => item.id == id),
    mode: 'onTouched',
  })

  const onSubmitFoodForm = data => {
    delete data.avatar
    updateMutation.mutate(data)
  }

  return (
    <div>
      <Box component='form' onSubmit={handleSubmit(onSubmitFoodForm)} sx={{ mt: 1 }}>
        <InputController control={control} name='title' />
        <InputController control={control} name='url' label='URL' />
        <InputController control={control} name='price' type='number' />
        <InputController control={control} name='discount_price' type='number' />
        <InputController control={control} name='description' multiline rows={3} />
        <CheckBoxController control={control} name='activated' label={t('Available')} />
        <InputController control={control} name='calorie' type='number' />

        {/* content ckeditor */}
        {/* category_id dropdown */}
        {/* tags, relateds multi-dropdown */}

        {/* image */}
        {/* video */}

        {/* order ?! */}

        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
          {t('Save')}
        </Button>
      </Box>
    </div>
  )
}

export default AdminModelForm

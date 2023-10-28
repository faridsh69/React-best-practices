import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button } from '@mui/material'

import { InputController } from './controllers/InputController'

// @ts-ignore
export const FormMui = props => {
  const { inputs, defaultValues, schema, onSubmit, submitText } = props

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    defaultValues,
  })

  const onGeneralSubmit = useCallback(
    // @ts-ignore
    data => {
      delete data.avatar
      delete data.name
      delete data.images
      delete data.videos
      delete data.audios
      delete data.documents
      delete data.likes
      delete data.category

      console.log('1 data', data)

      onSubmit(data)
    },
    [onSubmit],
  )

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onGeneralSubmit)}
      sx={{ mt: 1, display: 'flex', flexDirection: 'column', minWidth: '333px' }}
    >
      {/* @ts-ignore */}
      {inputs.map(input => {
        const { component: InputComponent = InputController, name, ...rest } = input

        return <InputComponent control={control} name={name} {...rest} key={name} />
      })}
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 1, mb: 2 }}>
        {submitText}
      </Button>
    </Box>
  )
}

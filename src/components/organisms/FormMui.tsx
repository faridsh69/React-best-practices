import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button } from '@mui/material'
import { InputController } from './controllers/InputController'

export const FormMui = props => {
  const { inputs, defaultValues, schema, onSubmit, submitText } = props

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    defaultValues,
  })

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
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

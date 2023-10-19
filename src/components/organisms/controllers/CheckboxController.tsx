import { Controller } from 'react-hook-form'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText } from '@mui/material'
import { capitalizeFirstLetter } from 'src/helpers/common'

export const CheckBoxController = props => {
  const { control, name, label } = props

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, ...field }, fieldState: { error } }) => {
        return (
          <FormControl error={!!error}>
            <FormGroup row>
              <FormControlLabel
                label={label || capitalizeFirstLetter(name)}
                control={<Checkbox checked={!!value} />}
                {...field}
              />
            </FormGroup>
            {error && <FormHelperText>{error?.message}</FormHelperText>}
          </FormControl>
        )
      }}
    />
  )
}

import { Controller } from 'react-hook-form'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText } from '@mui/material'

import { capitalizeFirstLetter, toBool } from 'src/helpers/common'

export const CheckBoxController = props => {
  const { control, name, label } = props

  const inputLabel = label || capitalizeFirstLetter(name)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <FormControl error={toBool(error)}>
            <FormGroup row>
              <FormControlLabel
                label={inputLabel}
                control={<Checkbox checked={toBool(value)} />}
                onChange={onChange}
              />
            </FormGroup>
            {toBool(error) && <FormHelperText>{error?.message}</FormHelperText>}
          </FormControl>
        )
      }}
    />
  )
}

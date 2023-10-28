import { Controller } from 'react-hook-form'
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material'

import { toFormalCase, toBool } from 'src/helpers/common'

export const CheckBoxController = props => {
  const { control, name, label } = props

  const inputLabel = label || toFormalCase(name)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <FormControl error={toBool(error)}>
            <FormControlLabel
              label={inputLabel}
              control={<Checkbox checked={toBool(value)} />}
              onChange={onChange}
            />
            <FormHelperText>{toFormalCase(error?.message)}</FormHelperText>
          </FormControl>
        )
      }}
    />
  )
}

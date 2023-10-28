import { Controller } from 'react-hook-form'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
  FormControlLabel,
} from '@mui/material'

import { toFormalCase, toBool } from 'src/helpers/common'

export const RadioController = props => {
  const { control, name, label, options = [] } = props

  const inputLabel = label || toFormalCase(name)

  // const handleChange = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
  //     onChange(e.target.value)
  //   },
  //   [name],
  // )

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <FormControl error={toBool(error)} sx={{ my: 2 }}>
            <FormLabel>{inputLabel}</FormLabel>
            <RadioGroup value={value} name={name} defaultChecked={value} onChange={onChange}>
              {options.map(option => {
                return (
                  <FormControlLabel
                    label={option.label}
                    value={option.value}
                    key={option.value.toString()}
                    control={<Radio />}
                  />
                )
              })}
            </RadioGroup>
            <FormHelperText>{toFormalCase(error?.message)}</FormHelperText>
          </FormControl>
        )
      }}
    />
  )
}

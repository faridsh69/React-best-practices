import { Controller } from 'react-hook-form'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import { convertNullToEmptyString, toBool, toFormalCase } from 'src/helpers/common'

export const SelectController = props => {
  const { control, name, label, options, multiple = false, ...rest } = props

  const inputLabel = label || toFormalCase(name)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <FormControl variant='standard' error={toBool(error)}>
            <InputLabel>{inputLabel}</InputLabel>
            <Select
              label={label}
              onChange={data => {
                onChange(data)
                console.log(data)
              }}
              value={!multiple ? convertNullToEmptyString(value) : value || []}
              multiple={multiple}
              {...rest}
            >
              {options.map(option => (
                <MenuItem value={option.value} key={option.value} disabled={value === option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{toFormalCase(error?.message)}</FormHelperText>
          </FormControl>
        )
      }}
    />
  )
}

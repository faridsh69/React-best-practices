import React, { useCallback } from 'react'
import { Controller } from 'react-hook-form'
import { TextField } from '@mui/material'

import { capitalizeFirstLetter } from 'src/helpers/common'

export const InputController = props => {
  const { control, name, label, type = 'text', multiline = false, rows, ...rest } = props

  const handleOnChange = useCallback(
    (e, onChange) => {
      const newValue = type === 'number' ? +e.target.value : e.target.value
      onChange(newValue)
    },
    [type],
  )
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onBlur, onChange }, fieldState: { error } }) => (
        <TextField
          label={label || capitalizeFirstLetter(name)}
          type={type}
          multiline={multiline}
          rows={rows}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleOnChange(e, onBlur)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e, onChange)}
          error={!!error}
          helperText={capitalizeFirstLetter(error?.message)}
          {...rest}
        />
      )}
    />
  )
}

import React, { useCallback } from 'react'
import { Controller } from 'react-hook-form'
import { TextField } from '@mui/material'

import { toFormalCase, toBool } from 'src/helpers/common'

export const InputController = props => {
  const { control, name, label, type, ...rest } = props

  const inputType =
    type || (name === 'email' ? 'email' : '') || (name === 'password' ? 'password' : '') || 'text'

  const inputLabel = label || toFormalCase(name)

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
      render={({ field: { value = '', onChange }, fieldState: { error } }) => {
        return (
          <TextField
            label={inputLabel}
            type={inputType}
            value={value === null ? '' : value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e, onChange)}
            error={toBool(error)}
            helperText={toFormalCase(error?.message)}
            margin='normal'
            {...rest}
          />
        )
      }}
    />
  )
}

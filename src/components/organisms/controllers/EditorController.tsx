import ReactQuill from 'react-quill'
import { Controller } from 'react-hook-form'
import { FormLabel, FormControl, FormHelperText } from '@mui/material'

import { toFormalCase, toBool } from 'src/helpers/common'
import { TEXT_EDITOR_FORMATS, TEXT_EDITOR_MODULES } from 'src/configs/textEditor'

export const EditorController = props => {
  const { control, name, label } = props

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <FormControl error={toBool(error)} style={{ height: '250px' }}>
          <FormLabel>{label || toFormalCase(name)}</FormLabel>
          <ReactQuill
            value={value}
            onChange={onChange}
            modules={TEXT_EDITOR_MODULES}
            formats={TEXT_EDITOR_FORMATS}
            theme='snow'
            style={{ height: '150px' }}
          />
          <FormHelperText sx={{ mt: 6 }}>{toFormalCase(error?.message)}</FormHelperText>
        </FormControl>
      )}
    />
  )
}

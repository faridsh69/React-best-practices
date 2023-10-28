import ReactQuill from 'react-quill'
import { Controller } from 'react-hook-form'
import { FormLabel, FormHelperText } from '@mui/material'
import { toFormalCase, toBool } from 'src/helpers/common'

export const TextEditorController = props => {
  const { control, name, label } = props

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
  }

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ]

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <>
          <FormLabel error={toBool(error)}>{label || toFormalCase(name)}</FormLabel>
          <ReactQuill
            value={value}
            onChange={onChange}
            modules={modules}
            formats={formats}
            theme='snow'
          />
          <FormHelperText error={toBool(error)}>{error?.message}</FormHelperText>
        </>
      )}
    />
  )
}

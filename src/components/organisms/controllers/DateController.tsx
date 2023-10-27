import { LocalizationProvider } from '@mui/x-date-pickers'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export const DateController = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label='Basic date picker' />
    </LocalizationProvider>
  )
}

import { toast } from 'react-toastify'

export const errorHandler = error => {
  console.log('1 errorHandler', error)
  toast.error(error)
}

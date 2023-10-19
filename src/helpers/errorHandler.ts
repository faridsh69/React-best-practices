import { toast } from 'react-toastify'

export const errorHandler = error => {
  console.log('XXX errorHandler', error)
  toast.error(error)
}

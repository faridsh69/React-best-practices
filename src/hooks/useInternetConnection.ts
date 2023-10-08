import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useEventListener } from 'src/hooks/useEventListner'

export const useInternetConnection = () => {
  const [internetConnectionStatus, setInternetConnectionStatus] = useState(true)

  useEffect(() => {
    if (!internetConnectionStatus) {
      toast.warn('You are offline!')
    }
  }, [internetConnectionStatus])

  useEventListener('offline', () => setInternetConnectionStatus(false))
  useEventListener('online', () => setInternetConnectionStatus(true))
}

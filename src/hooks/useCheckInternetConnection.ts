import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { toast } from 'react-toastify'

import { internetConnectionAtom } from 'src/contexts/internetConnectionAtom'
import { useEventListener } from 'src/hooks/useEventListner'

export const useCheckInternetConnection = () => {
  const [internetStatus, setStatus] = useAtom(internetConnectionAtom)

  useEffect(() => {
    if (!internetStatus) {
      toast.warn('You are offline!')
    }
  }, [internetStatus])

  useEventListener('offline', () => setStatus(false))
  useEventListener('online', () => setStatus(true))
}

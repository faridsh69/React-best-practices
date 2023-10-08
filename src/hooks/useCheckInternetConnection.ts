import { useAtom } from 'jotai'

import { internetConnectionAtom } from 'src/contexts/internetConnectionAtom'
import { useEventListener } from 'src/hooks/useEventListner'

export const useCheckInternetConnection = () => {
  const [status, setStatus] = useAtom(internetConnectionAtom)
  console.log('status', status)
  useEventListener('offline', () => setStatus(false))
  useEventListener('online', () => setStatus(true))
}

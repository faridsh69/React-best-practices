import { useEffect } from 'react'

export const useAddPageClassToBody = className => {
  useEffect(() => {
    document.body.className = className
  }, [])
}

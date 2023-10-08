import { useEffect } from 'react'

export const useEventListener = (eventName, action, dependencies = []) => {
  useEffect(() => {
    window.addEventListener(eventName, action)

    return () => {
      window.removeEventListener(eventName, action)
    }
  }, dependencies)
}

export const useEventListenerWithTimeout = (eventName, action, dependencies = [], timeout = 0) => {
  useEventListener(
    eventName,
    e => {
      setTimeout(() => {
        action(e)
      }, timeout)
    },
    dependencies,
  )
}

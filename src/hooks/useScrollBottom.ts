import { useEffect } from 'react'

export const useScrollBottom = (containerId, dependencies = [], timeout = 0) => {
  useEffect(() => {
    const container = document.getElementById(containerId)
    if (container) {
      setTimeout(() => {
        container.scrollTop = container.scrollHeight
      }, timeout)
    }
  }, dependencies)
}

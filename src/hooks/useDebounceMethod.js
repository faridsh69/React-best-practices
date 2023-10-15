import { useCallback } from 'react'
import { debounceMethod, debounceMethodWithPromise } from 'src/helpers/utils'

// eslint-disable-next-line react-hooks/exhaustive-deps
export const useDebounceMethod = method => useCallback(debounceMethod(method), [method])

export const useDebounceMethodWithPromise = (method, debounceTime = 500) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useCallback(debounceMethodWithPromise(method, debounceTime), [])

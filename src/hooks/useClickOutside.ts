import { useCallback, useEffect, useRef, useState } from 'react'

export const useClickOutside = () => {
  const [openBox, setOpenBox] = useState(false)

  const dropdownBlockRef = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleToggleOpenBox = useCallback(() => {
    setOpenBox(prev => !prev)
  }, [])

  const handleClickOutside = useCallback(({ target }) => {
    if (dropdownBlockRef.current && dropdownBlockRef.current.contains(target)) return

    setOpenBox(false)
  }, [])

  return [dropdownBlockRef, openBox, handleToggleOpenBox]
}

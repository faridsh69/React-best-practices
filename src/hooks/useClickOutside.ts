import { useCallback, useEffect, useRef, useState } from 'react'

export const useClickOutside = () => {
  const [openBox, setOpenBox] = useState(false)

  const dropdownBlockRef = useRef()

  const handleClickOutside = useCallback(({ target }) => {
    if (dropdownBlockRef.current && dropdownBlockRef.current.contains(target)) return

    setOpenBox(false)
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [handleClickOutside])

  const handleToggleOpenBox = useCallback(() => {
    setOpenBox(prev => !prev)
  }, [])

  return [dropdownBlockRef, openBox, handleToggleOpenBox]
}

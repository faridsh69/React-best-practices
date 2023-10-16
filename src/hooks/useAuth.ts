import { useCallback } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { removeToken, setToken } from 'src/helpers/auth'
import { postLogin } from 'src/services/apis'

export const useAuth = () => {
  const navigate = useNavigate()

  const loginMutation = useMutation(postLogin, {
    onSuccess: response => {
      setToken(response.access_token)
      navigate('/admin')
    },
    onError: error => {
      toast.error(error)
    },
  })

  const handleLogout = useCallback(() => {
    removeToken()
    navigate('/login')
  }, [navigate])

  return {
    loginMutation,
    handleLogout,
  }
}

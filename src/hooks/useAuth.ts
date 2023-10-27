import { useCallback } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LOCAL_STORAGE_AUTH_USER_EMAIL } from 'src/configs/constants'

import { removeToken, setToken } from 'src/helpers/auth'
import { setLocalsotrage } from 'src/helpers/common'
import { postLogin } from 'src/services/apis'

export const useAuth = () => {
  const navigate = useNavigate()

  const loginMutation = useMutation(postLogin, {
    onSuccess: (response, payload) => {
      setToken(response.access_token)
      navigate('/admin')
      toast.success('Logged in successfully!')
      setLocalsotrage(LOCAL_STORAGE_AUTH_USER_EMAIL, payload.username)
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

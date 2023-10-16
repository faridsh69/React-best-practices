// @ts-nocheck
import Container from '@mui/material/Container'

import { useCrud } from 'src/hooks/useCrud'
import { OAUTH_API_INFO } from 'src/configs/constants'

export const Login = () => {
  const { loginMutation } = useCrud('auth')

  const handleLogin = () => {
    const username = 'farid.sh69@gmail.com'
    const password = '123456'

    loginMutation.mutate({
      username,
      password,
      ...OAUTH_API_INFO,
    })
  }

  return (
    <Container component='main' maxWidth='xl'>
      <input type='email' />
      <input type='password' />
      <button onClick={handleLogin}>Login</button>
    </Container>
  )
}

export default Login

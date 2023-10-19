import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { yupResolver } from '@hookform/resolvers/yup'
import { Container, Avatar, Box, Button, Grid, Link, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

import { OAUTH_API_INFO } from 'src/configs/constants'
import { LOGIN_SCHEMA } from 'src/configs/schemas'
import { useAuth } from 'src/hooks/useAuth'
import { PageLayout } from 'src/components/templates/PageLayout'
import { InputController } from 'src/components/organisms/controllers/InputController'
import { CheckBoxController } from 'src/components/organisms/controllers/CheckboxController'

export const Login = () => {
  const { t } = useTranslation()

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(LOGIN_SCHEMA),
    mode: 'onTouched',
  })

  const { loginMutation } = useAuth()

  const onSubmitLoginForm = data => {
    loginMutation.mutate({
      username: data.email,
      password: data.password,
      ...OAUTH_API_INFO,
    })
  }

  return (
    <PageLayout>
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            {t('Sign in')}
          </Typography>
          <Box component='form' onSubmit={handleSubmit(onSubmitLoginForm)} sx={{ mt: 1 }}>
            <InputController
              control={control}
              name='email'
              label='Email Address'
              type='email'
              margin='normal'
              fullWidth
              autoComplete='email'
              autoFocus
            />
            <InputController
              control={control}
              name='password'
              type='password'
              margin='normal'
              fullWidth
              autoComplete='current-password'
            />
            <CheckBoxController control={control} name='remember' label={t('Remember me')} />

            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              {t('Sign In')}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  {t('Forgot password?')}
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {t('dont have an account')}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </PageLayout>
  )
}

export default Login

import { useTranslation } from 'react-i18next'
import { Container, Avatar, Box, Grid, Link, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

import { OAUTH_API_INFO } from 'src/configs/constants'
import { LOGIN_SCHEMA } from 'src/configs/schemas'
import { useAuth } from 'src/hooks/useAuth'
import { PageLayout } from 'src/components/templates/PageLayout'
import { InputController } from 'src/components/organisms/controllers/InputController'
import { CheckBoxController } from 'src/components/organisms/controllers/CheckboxController'
import { FormMui } from 'src/components/organisms/FormMui'

export const Login = () => {
  const { t } = useTranslation()

  const { loginMutation } = useAuth()

  const onSubmit = data => {
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
          <FormMui
            schema={LOGIN_SCHEMA}
            onSubmit={onSubmit}
            submitText={t('Sign In')}
            defaultValues={{}}
            inputs={[
              {
                component: InputController,
                name: 'email',
                label: 'Email Address',
                autoComplete: 'email',
                autoFocus: true,
              },
              {
                component: InputController,
                name: 'password',
                autoComplete: 'current-password',
              },
              {
                component: CheckBoxController,
                name: 'remember',
                label: t('Remember me'),
              },
            ]}
          />
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
      </Container>
    </PageLayout>
  )
}

export default Login

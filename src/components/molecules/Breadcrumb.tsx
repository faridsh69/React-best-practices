import { Link as RouterLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import { toFormalCase } from 'src/helpers/common'

export const Breadcrumb = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(r => r)

  return (
    <Breadcrumbs>
      {pathnames.map((_, index) => {
        const last = index === pathnames.length - 1
        const to = `/${pathnames.slice(0, index + 1).join('/')}`
        const name = toFormalCase(pathnames.slice(index, index + 1)[0])

        return last ? (
          <Typography color='text.primary' key={to}>
            {name}
          </Typography>
        ) : (
          <Link component={RouterLink} underline='hover' color='inherit' to={to} key={to}>
            {name}
          </Link>
        )
      })}
    </Breadcrumbs>
  )
}

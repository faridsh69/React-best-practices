import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { PageLayout } from 'src/components/templates/PageLayout'
import { AdminDrawer } from 'src/components/templates/AdminDrawer'

const AdminLayout = () => {
  const drawerWidth = 240

  return (
    <PageLayout>
      <Box sx={{ display: 'flex' }}>
        <AdminDrawer drawerWidth={drawerWidth} />
        <Box
          component='main'
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Outlet />
        </Box>
      </Box>
    </PageLayout>
  )
}

export default AdminLayout

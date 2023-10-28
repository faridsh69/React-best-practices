import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { PageLayout } from 'src/components/templates/PageLayout'
import { AdminSidebar } from 'src/components/templates/AdminSidebar'
import { Breadcrumb } from '../templates/Breadcrumb'

const AdminLayout = () => {
  const drawerWidth = 240

  return (
    <PageLayout>
      <Box sx={{ display: 'flex' }}>
        <AdminSidebar drawerWidth={drawerWidth} />
        <Box
          component='main'
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Breadcrumb />
          <Outlet />
        </Box>
      </Box>
    </PageLayout>
  )
}

export default AdminLayout

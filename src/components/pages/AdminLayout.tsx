import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { PageLayout } from 'src/components/templates/PageLayout'
import MemoAdminSidebar from 'src/components/templates/AdminSidebar'
import { Breadcrumb } from '../molecules/Breadcrumb'

const AdminLayout = () => {
  const drawerWidth = 240

  return (
    <PageLayout>
      <Box sx={{ display: 'flex' }}>
        <MemoAdminSidebar drawerWidth={drawerWidth} />
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

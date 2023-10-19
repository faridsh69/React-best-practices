import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining'

import { PageLayout } from 'src/components/templates/PageLayout'
import { AdminDrawer } from 'src/components/templates/AdminDrawer'

const AdminLayout = () => {
  const drawerWidth = 240

  const sidebarItems = [
    {
      title: 'Foods',
      icon: <FastfoodIcon />,
    },
    {
      title: 'Categories',
      icon: <RestaurantIcon />,
    },
    {
      title: 'Orders',
      icon: <DinnerDiningIcon />,
    },
  ]

  return (
    <PageLayout>
      <Box sx={{ display: 'flex' }}>
        <AdminDrawer sidebarItems={sidebarItems} drawerWidth={drawerWidth} />
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

import { useState } from 'react'
import {
  Box,
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining'
import { useNavigate } from 'react-router-dom'

export const AdminDrawer = props => {
  const { drawerWidth } = props

  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavigate = route => {
    navigate(route)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
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
        ].map(item => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton onClick={() => handleNavigate(item.title)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  )

  return (
    <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        // container={container}
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

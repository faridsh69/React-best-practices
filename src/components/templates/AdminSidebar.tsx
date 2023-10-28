import { useState } from 'react'
import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { ADMIN_SIDEBAR_ITEMS } from 'src/configs/constants'
import { toFormalCase } from 'src/helpers/common'

export const AdminSidebar = props => {
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
    <>
      <Toolbar />
      <List>
        {ADMIN_SIDEBAR_ITEMS.map(item => {
          const ItemIcon = item.icon
          return (
            <ListItem key={item.title} disablePadding>
              <ListItemButton onClick={() => handleNavigate(item.title)}>
                <ListItemIcon>
                  <ItemIcon />
                </ListItemIcon>
                <ListItemText primary={toFormalCase(item.title)} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </>
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

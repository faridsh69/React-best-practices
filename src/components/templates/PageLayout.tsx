import { Box } from '@mui/material'
import { Navbar } from './Navbar'

export const PageLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      {children}
    </Box>
  )
}

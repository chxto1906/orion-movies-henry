import { Box, Toolbar } from "@mui/material"
import { NavbarComponent, SideBarComponent } from "../components"

const drawerWidth = 240;

export const MovieLayout = ({ children, position }) => {
  return (
    <Box sx={{ display: 'flex' }}
      className="animate__animated animate__fadeIn animate__faster"
    >

        <NavbarComponent drawerWidth={ drawerWidth } />

        <SideBarComponent drawerWidth={ drawerWidth } position={ position } />

        <Box 
            component="main"
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar />

            { children }
        </Box>
    </Box>
  )
}

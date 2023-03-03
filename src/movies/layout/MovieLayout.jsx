import { Box, Toolbar } from "@mui/material"
import { NavbarComponent, SideBarComponent } from "../components"

const drawerWidth = 240;

export const MovieLayout = ({ children, position }) => {
  return (
    <Box sx={{ display: 'flex' }}>

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

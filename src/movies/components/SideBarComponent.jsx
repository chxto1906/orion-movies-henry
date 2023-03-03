import { LocalMovies, TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBarComponent = ({ drawerWidth = 240, position=1 }) => {
  return (
    <Box 
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer 
            variant='permanent'
            open
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } 
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>Henry Campoverde</Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['Movies'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton selected={position === 1}>
                                <ListItemIcon>
                                    <LocalMovies />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text } />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}

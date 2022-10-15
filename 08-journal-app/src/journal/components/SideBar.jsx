import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'
import React from 'react'

export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box 
        component='nav'
        sx={{width: { sm: drawerWidth }, flexShrink: {sm: 0}}}
        >
            {/* //open siempre va a ser true si la declaro. Hay mas prop a usar en la property ModalProps={{}} */}
            <Drawer 
                variant='permanent' 
                open 
                sx={{
                    display: {xs: 'block'},
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
                    }}> 

                    <Toolbar>
                        <Typography variant='h6' noWrap component='div'>Michael Williams</Typography>
                    </Toolbar>
                    <Divider />

                <List>
                    {['Enero','Febrero', 'Marzo', 'Abril'].map(text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'Lorem irure sint enim deserunt aliqua cillum commodo.'} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ) )}
                </List>
            </Drawer>

    </Box>
  )
}

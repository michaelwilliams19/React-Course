import React from 'react'
import {Box} from '@mui/system'
import { NavBar, SideBar } from '../components';
import { Toolbar } from '@mui/material';

//Creo esta constante para poder mandar a mis componentes el tamaño de mi menu lateral.
const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    // div = box
    <Box sx={{display: 'flex'}}>
         
        <NavBar drawerWidth={ drawerWidth } />
        <SideBar drawerWidth={ drawerWidth } />

        <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <Toolbar />

        {children}
        </Box>


    </Box>
    )
}

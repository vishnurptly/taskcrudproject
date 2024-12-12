import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
       <AppBar position="static" sx={{background:'#00308F'}}>
      <Toolbar>
        {/* Menu Button for smaller screens */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo or Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Company Name
        </Typography>

        {/* Navigation Links (or buttons) */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button sx={{'color':'inherit'}}  component={Link} to='/'>Home</Button>
          <Button color="inherit" component={Link} to='/product'>Product</Button>
          
        </Box>
      </Toolbar>
    </AppBar>


   
    </div>
  )
}

export default Header

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>TechLaunch</Typography>
      <Button color="inherit">Home</Button>
      <Button color="inherit">Products</Button>
      <Button color="inherit">Contact</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => (
  <Box sx={{ py: 3, textAlign: 'center', bgcolor: 'grey.200', mt: 5 }}>
    <Typography variant="body2" gutterBottom>© 2025 TechLaunch</Typography>
    <IconButton><Facebook /></IconButton>
    <IconButton><Twitter /></IconButton>
    <IconButton><LinkedIn /></IconButton>
  </Box>
);

export default Footer;

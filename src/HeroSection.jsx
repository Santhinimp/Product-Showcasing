import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';

const HeroSection = () => (
  <Grid container spacing={4} sx={{ minHeight: '60vh', alignItems: 'center' }}>
    <Grid item xs={12} md={6}>
      <Typography variant="h3">Discover Next-Gen Tech</Typography>
      <Typography variant="h6" sx={{ my: 2 }}>Powerful devices to elevate your productivity.</Typography>
      <Button variant="contained">Buy Now</Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <Box sx={{ bgcolor: 'grey.300', height: 200 }} />
    </Grid>
  </Grid>
);

export default HeroSection;

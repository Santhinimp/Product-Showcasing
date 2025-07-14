import React from 'react';
import { Grid, Paper, Typography, Avatar, Box } from '@mui/material';
import { testimonials } from './productData';

const Testimonials = () => (
  <Box sx={{ my: 5 }}>
    <Typography variant="h4" gutterBottom>What Our Customers Say</Typography>
    <Grid container spacing={4}>
      {testimonials.map(({ id, name, feedback }) => (
        <Grid item xs={12} sm={6} key={id}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar>{name[0]}</Avatar>
              </Grid>
              <Grid item xs>
                <Typography variant="body1">"{feedback}"</Typography>
                <Typography variant="caption">— {name}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Testimonials;

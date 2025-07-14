import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import * as Icons from '@mui/icons-material';
import { features } from './productData';

const Features = () => (
  <Box sx={{ my: 5 }}>
    <Typography variant="h4" gutterBottom>Features</Typography>
    <Grid container spacing={4}>
      {features.map(({ id, icon, title, description }) => {
        const Icon = Icons[icon];
        return (
          <Grid item xs={12} sm={6} md={3} key={id}>
            <Box textAlign="center">
              <Icon fontSize="large" color="primary" />
              <Typography variant="h6" sx={{ mt: 1 }}>{title}</Typography>
              <Typography variant="body2">{description}</Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  </Box>
);

export default Features;

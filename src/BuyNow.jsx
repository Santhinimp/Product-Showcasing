import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './productData';
import { Typography, TextField, Button, Box } from '@mui/material';

const BuyNow = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <Typography>Product not found</Typography>;

  return (
    <Box sx={{ mt: 5, maxWidth: 500 }}>
      <Typography variant="h4" gutterBottom>Buy: {product.name}</Typography>
      <TextField fullWidth label="Full Name" margin="normal" />
      <TextField fullWidth label="Shipping Address" margin="normal" />
      <TextField fullWidth label="Email" margin="normal" />
      <Button variant="contained" color="success" sx={{ mt: 2 }}>Place Order</Button>
    </Box>
  );
};

export default BuyNow;

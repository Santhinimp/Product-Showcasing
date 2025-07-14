import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from './productData';
import { Typography, Button, Box } from '@mui/material';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <Typography>Product not found</Typography>;

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>{product.name}</Typography>
      <img src={product.image} alt={product.name} style={{ width: '100%', maxWidth: 400, borderRadius: 8 }} />
      <Typography variant="body1" sx={{ mt: 2 }}>{product.description}</Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={() => navigate(`/buy/${product.id}`)}
      >
        Buy Now
      </Button>
    </Box>
  );
};

export default ProductDetail;

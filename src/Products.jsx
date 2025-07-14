import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid, Card, CardContent, Typography, Button, CardMedia
} from '@mui/material';
import Box from '@mui/material/Box';
import { products } from './productData';

const Products = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ my: 5 }}>
      <Typography variant="h4" gutterBottom>Our Products</Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                height: '100%',
                transition: '0.3s',
                '&:hover': { boxShadow: 6 }
              }}
            >
              {product.image && (
                <CardMedia component="img" height="140" image={product.image} alt={product.name} />
              )}
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" sx={{ my: 1 }}>{product.description}</Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;

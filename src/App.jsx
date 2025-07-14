import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Add this line
import { CssBaseline, Container } from '@mui/material';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Features from './Features';
import Products from './Products';
import Testimonials from './Testimonials';
import Footer from './Footer';
import ProductDetail from './ProductDetail'; // ✅ Required
import BuyNow from './BuyNow';               // ✅ Required

const App = () => (
  <>
    <CssBaseline />
    <Navbar />
    <Container maxWidth="lg">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Features />
              <Products />
              <Testimonials />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/buy/:id" element={<BuyNow />} />
      </Routes>
    </Container>
    <Footer />
  </>
);

export default App;

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Container, Grid } from '@mui/material';
import Header from '../NavBar/Header';
import LandingPage from './LandingPage/LandingPage';
import WhyUs from './LandingPage/WhyUs';

function HomePage() {
 

  return (
    <>
      <Box>
       <Header/>
       <LandingPage/>
       <WhyUs/>
      </Box>
    </>
  );
}

export default HomePage;

import React from 'react';
import { Box } from '@mui/material';
import Header from '../NavBar/Header';
import LandingPage from './LandingPage/LandingPage';
import WhyUs from './LandingPage/WhyUs';
import Services from './LandingPage/Services';


function HomePage() {
  return (
    <>
      <Box>
        {/* Header Component */}
        {/* <Header /> */}

        {/* LandingPage: Fixed Background */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '70vh', // Full height
            overflow: 'hidden', // Prevent extra scrolling from LandingPage
          }}
        >
          <LandingPage />
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1, // Ensure it scrolls over the LandingPage
            backgroundColor: '#ffffff', // White background for contrast
          }}
        >
          <WhyUs />
          <Services/>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;

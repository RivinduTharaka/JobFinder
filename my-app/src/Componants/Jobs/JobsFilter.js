import React from 'react';
import { Box, Typography } from '@mui/material';
import backgroundImg from '../../cmb.jpg'; // Replace with the path to your image

function JobsFilter() {
  return (
    <Box
      sx={{
        height: '100vh', // Full viewport height
        backgroundImage: `url(${backgroundImg})`, // Add the background image
        backgroundSize: 'cover', // Make the image cover the entire container
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
        display: 'flex', // Flexbox for centering content
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        color: 'white', // Default text color
        textAlign: 'center', // Center the text
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)', // Add text shadow for better visibility
        }}
      >
        Jobs Filter Page
      </Typography>
    </Box>
  );
}

export default JobsFilter;

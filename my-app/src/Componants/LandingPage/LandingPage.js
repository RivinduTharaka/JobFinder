import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Box, Typography, Button } from '@mui/material';
import cmbimg from '../../../src/cmb.jpg';

function LandingPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Box
      sx={{
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        width: '100%',
      }}
    >
      {/* Fixed Background Image */}
      <Box
        sx={{
          position: 'fixed', // Keep the background fixed
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh', // Full viewport height
          backgroundImage: `url(${cmbimg})`, // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1, // Keep it behind other elements
        }}
      />

      {/* Centered Content */}
      <Box
        sx={{
          position: 'relative', // Allow it to move with scrolling
          textAlign: 'center',
          color: '#fff',
          padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          width: { xs: '90%', sm: '80%', md: '60%', lg: '50%' }, // Responsive width
          margin: '0 auto', // Center horizontally
          marginTop: { xs: '20vh', sm: '25vh', md: '20vh' }, // Adjust initial vertical placement
          backgroundColor: 'rgba(255,255,255,0.1)', // Transparent background
          backdropFilter: 'blur(5px)', // Frosted glass effect
          borderRadius: 3, // Smooth rounded corners
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Subtle shadow
        }}
      >
        {/* Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            marginBottom: { xs: 2, md: 3 }, // Adjust bottom margin for mobile and larger views
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Responsive font size
            color: '#ffffff',
          }}
        >
          CONNECTING OPPORTUNITIES WITH AMBITIONS
        </Typography>

        {/* Buttons Section */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 2, sm: 3 }, // Adjust gap between buttons for small and larger views
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' }, // Stack buttons vertically on small screens
          }}
        >
          {/* Job Seekers Button */}
          <Button
            variant="contained"
            onClick={() => navigate('/filterjob')} // Navigate to /filterjob on click
            sx={{
              backgroundColor: '#014F86', // Teal blue color
              color: 'white',
              textTransform: 'none',
              fontWeight: '500',
              padding: { xs: '8px 16px', sm: '10px 20px' }, // Adjust padding for mobile and larger screens
              fontSize: { xs: '0.9rem', sm: '1rem' }, // Responsive font size
              '&:hover': { backgroundColor: '#2A6F97' }, // Hover color
            }}
          >
            JOB SEEKERS
          </Button>

          {/* Employers Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#61A5C2', // Teal blue color
              color: '#012A4A',
              textTransform: 'none',
              fontWeight: '500',
              padding: { xs: '8px 16px', sm: '10px 20px' }, // Adjust padding for mobile and larger screens
              fontSize: { xs: '0.9rem', sm: '1rem' }, // Responsive font size
              '&:hover': { backgroundColor: '#89C2D9' }, // Hover color
            }}
          >
            EMPLOYERS
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;

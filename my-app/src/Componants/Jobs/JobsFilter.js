import React from 'react';
import { Box, Typography, TextField, InputAdornment, Grid, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import ComputerIcon from '@mui/icons-material/Computer';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BarChartIcon from '@mui/icons-material/BarChart';
import TranslateIcon from '@mui/icons-material/Translate';
import AnimationIcon from '@mui/icons-material/Animation';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import backgroundImg from '../../cmb.jpg'; // Replace with the path to your image

// Trusted brands logo placeholders
const brands = ['LinkedIn', 'Indeed', 'Glassdoor', 'Monster', 'Upwork', 'Fiverr'];

// Category cards data
const categories = [
  { name: 'Tech Jobs', icon: <ComputerIcon sx={{ fontSize: 50 }} /> },
  { name: 'Creative & Design', icon: <DesignServicesIcon sx={{ fontSize: 50 }} /> },
  { name: 'Marketing & Sales', icon: <BarChartIcon sx={{ fontSize: 50 }} /> },
  { name: 'Language & Translation', icon: <TranslateIcon sx={{ fontSize: 50 }} /> },
  { name: 'Animation & Video', icon: <AnimationIcon sx={{ fontSize: 50 }} /> },
  { name: 'Music & Audio', icon: <MusicNoteIcon sx={{ fontSize: 50 }} /> },
  { name: 'Business Services', icon: <BusinessCenterIcon sx={{ fontSize: 50 }} /> },
  { name: 'Customer Support', icon: <SupportAgentIcon sx={{ fontSize: 50 }} /> },
  { name: 'General Jobs', icon: <WorkIcon sx={{ fontSize: 50 }} /> },
];

function JobsFilter() {
  const navigate = useNavigate(); // Initialize the navigation function

  const handleSearchClick = () => {
    navigate('/alljobs'); // Navigate to the AllJobs page
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        textAlign: 'center',
        paddingBottom: 1,
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: 10, sm: 10, md: 16 },
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a transparent overlay for better readability
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            color: 'white',
            marginTop: '20px',
            fontSize: { xs: '1.8rem', md: '2.3rem' },
          }}
        >
          Find your{' '}
          <Typography
            component="span"
            sx={{ fontStyle: 'italic', fontWeight: 'bold', color: '#b8ffb8' }}
            fontSize= {{ xs: '1.8rem', md: '3.1rem' }}
          >
            dream job
          </Typography>{' '}
          today
        </Typography>

        {/* Search Bar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '90%', sm: '60%', lg: '40%' },
            mt: 3,
            gap: 1, // Add spacing between the text field and the button
          }}
        >
          <TextField
            placeholder="Search for jobs, skills, or companies..."
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: 'white',
              borderRadius: '20px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#003300' }} />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#003300',
              color: 'white',
              borderRadius: '20px',
              height: '56px', // Match the height of the text field
              '&:hover': {
                backgroundColor: '#005500',
              },
            }}
            onClick={handleSearchClick} // Trigger navigation on button click
          >
            Search
          </Button>
        </Box>
      </Box>

      {/* Trusted Brands */}
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="body2"
          sx={{ color: '#b8ffb8', marginBottom: 2, fontSize: '1rem', fontWeight: 'bold' }}
        >
          Trusted by:
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          {brands.map((brand, index) => (
            <Typography key={index} variant="body2" sx={{ color: 'white', fontSize: '1rem' }}>
              {brand}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Categories */}
      <Grid container spacing={3} sx={{ mt: 4, px: { xs: 2, sm: 4, md: 8 } }}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent background for cards
                color: 'white',
                height: '150px',
                borderRadius: '10px',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <CardContent>
                {category.icon}
                <Typography variant="body1" sx={{ fontWeight: '500', marginTop: 1 }}>
                  {category.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default JobsFilter;

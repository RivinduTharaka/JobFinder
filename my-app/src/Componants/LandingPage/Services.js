import React from 'react';
import { Box, Grid, Typography, Card, CardContent, useTheme, Button } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SearchIcon from '@mui/icons-material/Search';
import CampaignIcon from '@mui/icons-material/Campaign';
import { styled, keyframes } from '@mui/system';


const services = [
  { title: 'Web Development', description: 'Build modern, responsive websites', icon: <WebIcon />, color: '#014F86' },
  { title: 'App Development', description: 'Create mobile applications for iOS and Android', icon: <PhoneAndroidIcon />, color: '#61A5C2' },
  { title: 'SEO Optimization', description: 'Improve search engine rankings', icon: <SearchIcon />, color: '#2A6F97' },
  { title: 'Digital Marketing', description: 'Promote your business online', icon: <CampaignIcon />, color: '#89C2D9' }
];

function Services() {
  const theme = useTheme();


  // Keyframe Animation for Title Fade-in
const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateY(-20px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

  return (
    <Box variant="h4"
    sx={{
      fontWeight: 'bold',
      marginBottom: 2,
      color: '#012A4A', // From the palette
      animation: `${fadeIn} 3s ease-in-out`,
      paddingLeft:6,
      paddingRight:6,
      paddingBottom:6
    }}>
      <Typography variant="h3" gutterBottom sx={{ color: '#014F86' }}>
        Our Premium Services
      </Typography>
      
      <hr style={{
        border: 'none',
        height: '2px',
        background: `linear-gradient(to right, #014F86, #61A5C2)`,
        margin: '20px auto',
        width: '50%'
      }} />

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{
              backgroundColor: 'rgb(0,0,0,0.1)',
              '&:hover': {
                transform: 'scale(1.05)',
              
              },
              transition: 'transform .3s ease-in-out, box-shadow .3s ease-in-out',
              borderRadius: '16px',
              color: 'white'
            }}>
              <CardContent sx={{
                minHeight: 200,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: 2,
                  '& svg': {
                    fontSize: '3rem',
                    color: '#012A4A'
                  },
                  
                }}>
                  {service.icon}
                </Box>
                <Typography variant="h6" component="div" align="center" sx={{
                  fontWeight: 'bold' , color: 'black'
                }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" align="center">
                  {service.description}
                </Typography>
                <Button variant="contained" sx={{
                  marginTop: 2,
                  backgroundColor: '#012A4A',
                  '&:hover': {
                    backgroundColor: '#2A6F97'
                  }
                }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;

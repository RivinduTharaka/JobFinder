import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, Box, Icon } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SearchIcon from '@mui/icons-material/Search';
import CampaignIcon from '@mui/icons-material/Campaign';

// Sample data for services with MUI Icons
const services = [
  { title: 'Web Development', description: 'Build modern, responsive websites', icon: <WebIcon /> },
  { title: 'App Development', description: 'Create mobile applications for iOS and Android', icon: <PhoneAndroidIcon /> },
  { title: 'SEO Optimization', description: 'Improve search engine rankings', icon: <SearchIcon /> },
  { title: 'Digital Marketing', description: 'Promote your business online', icon: <CampaignIcon /> }
];

function Services() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Our Services
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                  {service.icon}
                </Box>
                <Typography variant="h6" component="div" align="center">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;

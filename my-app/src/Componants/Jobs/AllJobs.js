import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Divider,
  FormControl,
  Select,
  MenuItem,
  Avatar,
  Rating,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Import images
import Image1 from '../../cmb.jpg';
import Image2 from '../../cmb.jpg';

const freelancersData = [
  {
    name: 'Rexsoft Inc',
    description: 'Custom web app solutions for businesses',
    rating: 5.0,
    reviews: 18,
    price: 3000,
    category: 'Web Application Development',
    service: 'Web Development',
    seller: 'Pro',
    delivery: '3 Days',
    image: Image1,
    ad: true,
  },
  {
    name: 'Stas Sorokin',
    description: 'Develop chatgpt AI app and AI SaaS solutions',
    rating: 4.6,
    reviews: 31,
    price: 1250,
    category: 'AI Development',
    service: 'Mobile Development',
    seller: 'Top Rated',
    delivery: '1 Day',
    image: Image2,
    ad: true,
  },
];

const AdLabel = styled('span')({
  backgroundColor: '#ffeb3b',
  color: '#000',
  padding: '2px 6px',
  borderRadius: '4px',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  position: 'absolute',
  top: '10px',
  left: '10px',
});

function AllJobs() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredFreelancers, setFilteredFreelancers] = useState(freelancersData);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleFilterSelect = (filterType, value) => {
    const newFilters = { ...selectedFilters, [filterType]: value };

    const filteredData = freelancersData.filter((freelancer) => {
      return Object.keys(newFilters).every((key) =>
        newFilters[key] ? freelancer[key] === newFilters[key] : true
      );
    });

    setSelectedFilters(newFilters);
    setFilteredFreelancers(filteredData);
  };

  const handleFilterRemove = (filterType) => {
    const updatedFilters = { ...selectedFilters, [filterType]: '' };

    const filteredData = freelancersData.filter((freelancer) => {
      return Object.keys(updatedFilters).every((key) =>
        updatedFilters[key] ? freelancer[key] === updatedFilters[key] : true
      );
    });

    setSelectedFilters(updatedFilters);
    setFilteredFreelancers(filteredData);
  };

  const handleOpenDialog = (job) => {
    setSelectedJob(job);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedJob(null);
    setOpenDialog(false);
  };

  return (
    <Box>
      {/* Filters Section */}
      <Box
        sx={{
          backgroundColor: 'rgba(1, 42, 74, 0.05)',
          padding: { xs: 4, md: 8 },
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, textAlign: 'left' }}>
          Results for{' '}
          <Typography component="span" variant="h4" sx={{ color: '#012a4a', fontWeight: 'bold' }}>
            software
          </Typography>
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select
              value={selectedFilters.category || ''}
              onChange={(e) => handleFilterSelect('category', e.target.value)}
              sx={{ backgroundColor: '#fff' }}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Category
              </MenuItem>
              <MenuItem value="Web Application Development">Web Application Development</MenuItem>
              <MenuItem value="Web Development">Web Development</MenuItem>
              <MenuItem value="AI Development">AI Development</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select
              value={selectedFilters.service || ''}
              onChange={(e) => handleFilterSelect('service', e.target.value)}
              sx={{ backgroundColor: '#fff' }}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Service options
              </MenuItem>
              <MenuItem value="Web Development">Web Development</MenuItem>
              <MenuItem value="Mobile Development">Mobile Development</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select
              value={selectedFilters.seller || ''}
              onChange={(e) => handleFilterSelect('seller', e.target.value)}
              sx={{ backgroundColor: '#fff' }}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Seller details
              </MenuItem>
              <MenuItem value="Pro">Pro</MenuItem>
              <MenuItem value="Top Rated">Top Rated</MenuItem>
              <MenuItem value="Level 2">Level 2</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select
              value={selectedFilters.delivery || ''}
              onChange={(e) => handleFilterSelect('delivery', e.target.value)}
              sx={{ backgroundColor: '#fff' }}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Delivery time
              </MenuItem>
              <MenuItem value="1 Day">1 Day</MenuItem>
              <MenuItem value="3 Days">3 Days</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
          {Object.keys(selectedFilters).map(
            (key) =>
              selectedFilters[key] && (
                <Chip
                  key={key}
                  label={`${key}: ${selectedFilters[key]}`}
                  onDelete={() => handleFilterRemove(key)}
                  sx={{ backgroundColor: '#e6f7ff', color: '#007BFF' }}
                />
              )
          )}
        </Box>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Freelancers List */}
      <Grid container spacing={3} sx={{ px: { xs: 2, md: 8 }, mb: 4 }}>
        {filteredFreelancers.map((freelancer, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                maxWidth: 300,
                borderRadius: 2,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                cursor: 'pointer',
              }}
              onClick={() => handleOpenDialog(freelancer)}
            >
              <CardMedia
                component="img"
                height="200"
                image={freelancer.image}
                alt={freelancer.name}
              />
              {freelancer.ad && <AdLabel>Ad</AdLabel>}
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Avatar sx={{ width: 32, height: 32, mr: 1 }}>
                    {freelancer.name.charAt(0)}
                  </Avatar>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {freelancer.name}
                  </Typography>
                  {freelancer.seller && (
                    <Chip
                      label={freelancer.seller}
                      size="small"
                      sx={{
                        backgroundColor: '#e6f7ff',
                        color: '#007BFF',
                        ml: 1,
                        fontSize: '0.7rem',
                      }}
                    />
                  )}
                </Box>
                <Typography variant="body2" sx={{ mb: 1, color: '#555' }}>
                  {freelancer.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating
                    name="read-only"
                    value={freelancer.rating}
                    readOnly
                    precision={0.1}
                    size="small"
                  />
                  <Typography variant="body2" sx={{ ml: 0.5 }}>
                    {freelancer.rating} ({freelancer.reviews})
                  </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
                  Starting at ${freelancer.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Popup Dialog */}
      {selectedJob && (
  <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="lg">
    <DialogContent>
      <Grid container spacing={2}>
        {/* Left Section */}
        <Grid item xs={12} md={8}>
          {/* Job Header */}
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
            {selectedJob.name} - {selectedJob.category}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {selectedJob.company} | Published on: {selectedJob.published}
          </Typography>

          {/* Social Media Share */}
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Button variant="contained" color="success" sx={{ textTransform: 'none' }}>
              Apply Now
            </Button>
            <Button
              variant="outlined"
              sx={{ textTransform: 'none', borderColor: 'green', color: 'green' }}
            >
              Browse jobs
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography>Share:</Typography>
              <Typography
                component="span"
                sx={{ color: '#1976d2', cursor: 'pointer' }}
              >
                Facebook
              </Typography>
              <Typography
                component="span"
                sx={{ color: '#1976d2', cursor: 'pointer' }}
              >
                Twitter
              </Typography>
              <Typography
                component="span"
                sx={{ color: '#1976d2', cursor: 'pointer' }}
              >
                WhatsApp
              </Typography>
            </Box>
          </Box>

          {/* Tabs Section */}
          <Box sx={{ mt: 4 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Typography
                component="span"
                sx={{
                  fontWeight: 'bold',
                  borderBottom: '2px solid green',
                  paddingBottom: '4px',
                  marginRight: '20px',
                  cursor: 'pointer',
                }}
              >
                Job details
              </Typography>
              <Typography
                component="span"
                sx={{ fontWeight: 'bold', cursor: 'pointer', color: 'gray' }}
              >
                Company overview
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                The Job
              </Typography>
              <ul>
                {selectedJob.description.map((detail, index) => (
                  <li key={index}>
                    <Typography variant="body2">{detail}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={4}>
          {/* Company Details */}
          <Box
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              p: 2,
              backgroundColor: '#f4f8f4',
              mb: 2,
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Company details
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar
                src={selectedJob.image}
                alt={selectedJob.company}
                sx={{ width: 56, height: 56 }}
              />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  {selectedJob.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedJob.location}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Job Overview */}
          <Box
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              p: 2,
              backgroundColor: '#f4f8f4',
              mb: 2,
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Job overview
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2">
              <strong>Published on:</strong> {selectedJob.published}
            </Typography>
            <Typography variant="body2">
              <strong>Application deadline:</strong> {selectedJob.deadline}
            </Typography>
            <Typography variant="body2">
              <strong>Salary (LKR):</strong> {selectedJob.salary}
            </Typography>
          </Box>

          {/* View All Jobs */}
          <Box
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              p: 2,
              backgroundColor: '#f4f8f4',
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              View all jobs in:
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Button
              variant="text"
              sx={{ textTransform: 'none', color: 'green', justifyContent: 'flex-start' }}
            >
              ➡️ {selectedJob.company}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleCloseDialog} variant="outlined" color="secondary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
)}

    </Box>
  );
}

export default AllJobs;

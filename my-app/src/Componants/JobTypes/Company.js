import React, { useState } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel, Select, MenuItem, TextField, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router-dom';
import image1 from "../../cmb.jpg"; // Ensure these imports match your file structure and naming

function Company() {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    company: '',
    title: ''
  });
  const [searchTerm, setSearchTerm] = useState("");

  const companies = ["Dialog", "Another Company", "Company Three, Data Insights"];
  const titles = [
    "Associate Lead Engineer – Network – IT Infrastructure Planning and Operations",
    "Senior Software Developer – Backend Systems",
    "Project Manager – Telecommunications Projects",
    "Customer Relations Manager – Northern Region",
    "Data Analyst – Market Research"
  ];
  

  const jobs = [
    {
      id: 1,
      title: "Associate Lead Engineer – Network – IT Infrastructure Planning and Operations",
      company: "Dialog",
      location: "Sri Lanka",
      date: "2024-12-24",
      description: "Responsible for the design and implementation of network infrastructure.",
      imageUrl: image1 // You should replace 'image1' with the actual image path or URL
    },
    {
      id: 2,
      title: "Senior Software Developer – Backend Systems",
      company: "Another Company",
      location: "Colombo, Sri Lanka",
      date: "2024-11-15",
      description: "Develop and maintain scalable server architectures.",
      imageUrl: image1 // Replace 'image2' with actual image path
    },
    {
      id: 3,
      title: "Project Manager – Telecommunications Projects",
      company: "Company Three",
      location: "Kandy, Sri Lanka",
      date: "2024-10-30",
      description: "Oversee large telecom projects ensuring timely completion within budget.",
      imageUrl: image1 // Replace 'image3' with actual image path
    },
    {
      id: 4,
      title: "Customer Relations Manager – Northern Region",
      company: "Dialog",
      location: "Jaffna, Sri Lanka",
      date: "2024-09-20",
      description: "Manage customer satisfaction and regional feedback operations.",
      imageUrl: image1 // Replace 'image4' with actual image path
    },
    {
      id: 5,
      title: "Data Analyst – Market Research",
      company: "Data Insights",
      location: "Galle, Sri Lanka",
      date: "2024-08-05",
      description: "Analyze market trends and provide insights to strategic planning teams.",
      imageUrl: image1 // Replace 'image5' with actual image path
    }
];


  const handleFilterSelect = (filterType, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredJobs = jobs.filter(job =>
    (filters.company === '' || job.company === filters.company) &&
    (filters.title === '' || job.title.includes(filters.title)) &&
    (searchTerm === "" || job.title.toLowerCase().includes(searchTerm) || job.company.toLowerCase().includes(searchTerm) || job.location.toLowerCase().includes(searchTerm))
  );

  const handleMoreClick = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const handleApplyNow = (jobId) => {
    navigate(`/apply/${jobId}`);
  };

  return (
    <Box sx={{ mt: 10, p: 5, backgroundColor: "rgba(0,0,0,0.1)" }}>
      <Typography variant="h6" sx={{ mb: 2, textAlign: 'left' }}>
        <Typography component="span" variant="h4" sx={{ color: '#012a4a', fontWeight: 'bold' }}>
          All Jobs
        </Typography>
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2, alignItems: 'center' }}>
        <FormControl variant="outlined" size="small" sx={{ minWidth: 120, flex: 1, marginX: 1 }}>
          <InputLabel>Company</InputLabel>
          <Select
            value={filters.company}
            onChange={(e) => handleFilterSelect('company', e.target.value)}
            label="Company"
          >
            <MenuItem value="">All Companies</MenuItem>
            {companies.map((company, index) => (
              <MenuItem key={index} value={company}>{company}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" size="small" sx={{ minWidth: 120, flex: 1, marginX: 1 }}>
          <InputLabel>Job Title</InputLabel>
          <Select
            value={filters.title}
            onChange={(e) => handleFilterSelect('title', e.target.value)}
            label="Job Title"
          >
            <MenuItem value="">All Titles</MenuItem>
            {titles.map(title => (
              <MenuItem key={title} value={title}>{title}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Search Jobs"
          variant="outlined"
          size="small"
          sx={{ minWidth: 120, flex: 1, marginX: 1 }}
          onChange={handleSearchChange}
        />
      </Box>

      <Grid container spacing={2} style={{ marginTop: 20 }}>
  {filteredJobs.map((job) => (
    <Grid item xs={12} sm={6} md={4} lg={4} key={job.id}> {/* Adjusted grid sizing for better responsiveness */}
      <Card sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        borderRadius: '10px', // Consistent border radius
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)' // Soft shadow for better UI
      }}>
        <CardMedia
          component="img"
          sx={{
            width: 100, // Fixed width for all sizes
            height: '92%', // Full height of the card
            objectFit: 'cover', // Ensures the image covers the area without distortion
            borderRadius: '20px', // Only round the left corners
            padding:1
          }}
          image={job.imageUrl}
          alt="Job image"
        />
        <CardContent sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
          padding: 2 // Reduced padding
        }}>
          <div>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', sm: '1rem' } }}>{job.title}</Typography>
            <Typography color="textSecondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
              {job.location} © {job.date}
            </Typography>
          </div>
          <Button variant="outlined" sx={{
            alignSelf: 'start',
            justifySelf: 'center',
            marginTop: 1, // Added margin top for spacing
            fontSize: '0.75rem' // Smaller font size for button
          }} onClick={() => handleMoreClick(job)}>More</Button>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>


      {selectedJob && (
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
          <DialogTitle sx={{ m: 0, p: 2 }}>
            <Typography variant="h6" color="textPrimary" sx={{ fontWeight: 'bold' }}>
              {selectedJob.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {selectedJob.company} | {selectedJob.date}
            </Typography>
            <div style={{ marginTop: 10, marginBottom: 10 }}>
              <IconButton size="small"><FacebookIcon fontSize="small" /></IconButton>
              <IconButton size="small"><TwitterIcon fontSize="small" /></IconButton>
              <IconButton size="small"><WhatsAppIcon fontSize="small" /></IconButton>
            </div>
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              {selectedJob.description}
            </Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'space-between', padding: '8px 24px' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                backgroundColor: '#4CAF50', // Green background
                color: 'white', // White text
                borderRadius: 20, // Rounded corners
                textTransform: 'none', // Removes uppercase styling
                '&:hover': {
                  backgroundColor: '#45a045' // Darker green on hover
                }
              }}
              onClick={() => handleApplyNow(selectedJob.id)}
            >
              Apply Now
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
}

export default Company;

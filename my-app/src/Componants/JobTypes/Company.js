import React, { useState } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Grid, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Chip, FormControl, InputLabel, Select, MenuItem, TextField ,IconButton} from '@mui/material';
import image1 from "../../cmb.jpg";
import image2 from "../../cmb.jpg";
import image3 from "../../cmb.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Company() {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate(); // Create the navigate function instance

  const [filters, setFilters] = useState({
    company: '',
    title: ''
  });
  const [searchTerm, setSearchTerm] = useState("");

  const companies = ["Dialog", "Another Company", "Company Three"];
  const titles = ["Associate Lead Engineer", "Account Manager", "Software Developer"];

  const jobs = [
    {
      id: 1,
      title: "Associate Lead Engineer – Network – IT Infrastructure Planning and Operations",
      company: "Dialog",
      location: "Sri Lanka",
      date: "2024-12-24",
      description: "Responsible for the design and implementation of network infrastructure.",
      imageUrl: image1
    },
    {
      id: 2,
      title: "Account Manager – Emerging Enterprise – Southern",
      company: "Another Company",
      location: "Sri Lanka",
      date: "2024-12-23",
      description: "Focus on managing client relationships and growing enterprise accounts.",
      imageUrl: image2
    },
    {
      id: 3,
      title: "Account Manager – Emerging Enterprise – Uva and Sabaragamuwa",
      company: "Dialog",
      location: "Sri Lanka",
      date: "2024-12-23",
      description: "Lead strategic planning and development for enterprise solutions.",
      imageUrl: image3
    },
    // Additional jobs here
  ];

  const handleFilterSelect = (filterType, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
  };

  const handleFilterRemove = (filterType) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterType]: '' }));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredJobs = jobs.filter(job => 
    (filters.company === '' || job.company === filters.company) &&
    (filters.title === '' || job.title.includes(filters.title)) &&
    (searchTerm === "" || job.title.toLowerCase().includes(searchTerm) || job.company.toLowerCase().includes(searchTerm) || job.location.toLowerCase().includes(searchTerm))
  );

  const handleApplyNow = (jobId) => {
    navigate(`/apply/${jobId}`); // Navigate to the apply form
  };


  return (
    <Box sx={{ mt: 6, p: 5 }}>
      <Typography variant="h6" sx={{ mb: 2, textAlign: 'left' }}>
        <Typography component="span" variant="h4" sx={{ color: '#012a4a', fontWeight: 'bold' }}>
          All Jobs
        </Typography>
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2, alignItems: 'center' }}>
        <FormControl size="small" sx={{ minWidth: 350 }}>
          <InputLabel>Company</InputLabel>
          <Select
            value={filters.company}
            onChange={(e) => handleFilterSelect('company', e.target.value)}
            displayEmpty
            sx={{ backgroundColor: '#fff' }}
          >
            <MenuItem value="">All Companies</MenuItem>
            {companies.map((company, index) => (
              <MenuItem key={index} value={company}>{company}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 350 }}>
          <InputLabel>Job Title</InputLabel>
          <Select
            value={filters.title}
            onChange={(e) => handleFilterSelect('title', e.target.value)}
            displayEmpty
            sx={{ backgroundColor: '#fff' }}
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
          sx={{ minWidth: 350 }}
          onChange={handleSearchChange}
        />
      </Box>

      <Grid container spacing={2} style={{ marginTop: 20 }}>
        {filteredJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card sx={{ display: 'flex', height: '100%' }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={job.imageUrl}
                alt="Job image"
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">{job.title}</Typography>
                <Typography color="textSecondary">{job.location} © {job.date}</Typography>
                <Button color="primary" onClick={() => { setSelectedJob(job); setOpen(true); }}> More</Button>
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

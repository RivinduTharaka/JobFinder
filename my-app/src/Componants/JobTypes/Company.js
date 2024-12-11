import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Avatar, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

function Company() {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [company, setCompany] = useState('');

  const companies = ["Dialog", "Another Company", "Company Three"]; // Dummy company list

  const jobs = [
    {
      id: 1,
      title: "Associate Lead Engineer – Network – IT Infrastructure Planning and Operations",
      company: "Dialog",
      location: "Sri Lanka",
      date: "2024-12-24",
      description: "Responsible for the design and implementation of network infrastructure."
    },
    {
      id: 2,
      title: "Account Manager – Emerging Enterprise – Southern",
      company: "Another Company",
      location: "Sri Lanka",
      date: "2024-12-23",
      description: "Focus on managing client relationships and growing enterprise accounts."
    },
    {
      id: 3,
      title: "Account Manager – Emerging Enterprise – Uva and Sabaragamuwa",
      company: "Dialog",
      location: "Sri Lanka",
      date: "2024-12-23",
      description: "Lead strategic planning and development for enterprise solutions."
    },
    // Additional jobs here
  ];

  const filteredJobs = jobs.filter(job => 
    (company === '' || job.company === company) && 
    (searchTerm === '' || job.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleClickOpen = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  return (
    <div style={{ marginTop: "70px", padding: "50px" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <FormControl style={{ width:"350px" }}>
            <InputLabel>Companies</InputLabel>
            <Select
              value={company}
              onChange={handleCompanyChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>All Companies</em>
              </MenuItem>
              {companies.map((company, index) => (
                <MenuItem key={index} value={company}>{company}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={5}>
          <TextField
            fullWidth
            label="Company name"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
        <Grid item xs={2} >
          <Button variant="contained" color="primary"  style={{ width:"300px" }} onClick={() => {}} >
            Search
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: 20 }}>
        {filteredJobs.length > 0 ? filteredJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card style={{ height: '150px' }}>
              <CardContent>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6">{job.title}</Typography>
                    <Typography color="textSecondary">{job.location} © {job.date}</Typography>
                    <Button color="primary" onClick={() => handleClickOpen(job)}>Learn More</Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        )) : (
          <Grid item xs={12}>
            <Typography>No jobs found matching the criteria.</Typography>
          </Grid>
        )}
      </Grid>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{selectedJob?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedJob?.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Company;

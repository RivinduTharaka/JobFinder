import React from 'react';
import { Container, Grid, TextField, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';

function ContactUs() {
  return (
    
    <Container maxWidth="lg"style={{ backgroundColor: 'rgb(0, 0, 0, 0.0.5)', marginTop: '140px',  }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} style={{ padding: '20px', borderRight: '2px solid black', }}>
          <Typography variant="h4" gutterBottom component="div">Contact Us</Typography>
          <form>
            <TextField fullWidth label="Name" variant="outlined" margin="normal" />
            <TextField fullWidth label="Email" type="email" variant="outlined" margin="normal" />
            <TextField fullWidth label="Message" multiline rows={4} variant="outlined" margin="normal" />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="I accept the Terms of Service"
            />
            <Button variant="contained" color="primary" style={{ backgroundColor: '#FFD700' }}>SUBMIT</Button>
          </form>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: '20px', borderRight: '2px solid black', }}>
          <Typography variant="h6" gutterBottom>CALL US</Typography>
          <Typography >1 (234) 567-891</Typography>
          <Typography>1 (234) 987-654</Typography>
          <Typography variant="h6" gutterBottom style={{ marginTop:"30px" }}>LOCATION</Typography>
          <Typography>121 Rock Street,<br/> 21 Avenue, New York,<br/>  NY 92103-9000</Typography>
          <Typography variant="h6" gutterBottom style={{ marginTop:"30px" }}>OUR TOP SERVICES</Typography>
          <Typography>Local transfers</Typography>
          <Typography>Airport Transfers</Typography>
          <Typography>Excursions and Tours</Typography>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: '20px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.974750233534!2d-74.00597238459412!3d40.71277597933003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a21fb011c85%3A0x37513b7f1821408b!2s21st+Ave%2C+New+York%2C+NY%2C+USA!5e0!3m2!1sen!2s!4v1663779348102!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactUs;

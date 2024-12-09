import React from 'react';
import { Box, Typography, Grid, Grow } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import PublicIcon from '@mui/icons-material/Public'; // Example icon for Market Leaders
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Example icon for Time Saving
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'; // Example icon for Reliability
import HandshakeIcon from '@mui/icons-material/Handshake'; // Example icon for Beyond Expectations

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

const StyledIconBox = styled(Box)({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto 10px',
  backgroundColor: 'rgba(0, 0, 0, 0.05)', // Light gray background for icons
});

function WhyUs() {
  return (
    <Box id="why-us" sx={{ padding: { xs: 2, sm: 4,md: 7, lg: 15 }, textAlign: 'center' , paddingRight: {lg: 20} , paddingLeft: {lg: 20}   }}>
      {/* Title Section */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          marginBottom: 2,
          color: '#012A4A', // From the palette
          animation: `${fadeIn} 3s ease-in-out`,
        }}
      >
        WHY YOU SHOULD SELECT SMART RECRUITER?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#555', // Light gray for subtitle
          marginBottom: 5,
          fontSize: { xs: '0.9rem', md: '1rem' },
          animation: `${fadeIn} 2s ease-in-out`,
        }}
      >
        How Our Consultancy Team Can Help You Grow
      </Typography>

      {/* Features Section */}
      <Grid container spacing={4}>
        {/* Feature 1 */}
        <Grow in timeout={1000}>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <StyledIconBox>
                <PublicIcon sx={{ fontSize: '40px', color: '#E57373' }} /> {/* Red icon */}
              </StyledIconBox>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#012A4A', // From the palette
                  marginBottom: 1,
                }}
              >
                CONNECTED WITH MARKET LEADERS
              </Typography>
              <Box
                sx={{
                  width: '50px',
                  height: '3px',
                  backgroundColor: '#E57373', // Red underline
                  margin: '0 auto 10px',
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: '#777', // Lighter gray for text
                  fontSize: '0.9rem',
                }}
              >
                We’re one of the largest and highly recognized resourcing solutions providers in Sri Lanka. We take care of
                all your resourcing requirements in a cost-effective and timely manner with perfectly matching candidates.
              </Typography>
            </Box>
          </Grid>
        </Grow>

        {/* Feature 2 */}
        <Grow in timeout={1200}>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <StyledIconBox>
                <AccessTimeIcon sx={{ fontSize: '40px', color: '#48B314' }} /> {/* Green icon */}
              </StyledIconBox>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#012A4A',
                  marginBottom: 1,
                }}
              >
                TIME SAVING AND COST EFFECTIVENESS
              </Typography>
              <Box
                sx={{
                  width: '50px',
                  height: '3px',
                  backgroundColor: '#48B314', // Green underline
                  margin: '0 auto 10px',
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: '#777',
                  fontSize: '0.9rem',
                }}
              >
                We ensure that only the cream of the crop meets our clients, conducting preliminary interviews for all
                positions. Hassle-free shortlisting and interview scheduling are done by us.
              </Typography>
            </Box>
          </Grid>
        </Grow>

        {/* Feature 3 */}
        <Grow in timeout={1400}>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <StyledIconBox>
                <VerifiedUserIcon sx={{ fontSize: '40px', color: '#014F86' }} /> {/* Blue icon */}
              </StyledIconBox>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#012A4A',
                  marginBottom: 1,
                }}
              >
                RELIABILITY GUARANTEED
              </Typography>
              <Box
                sx={{
                  width: '50px',
                  height: '3px',
                  backgroundColor: '#014F86', // Blue underline
                  margin: '0 auto 10px',
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: '#777',
                  fontSize: '0.9rem',
                }}
              >
                We do background checks of all shortlisted candidates and a comprehensive evaluation is conducted to ensure
                reliability.
              </Typography>
            </Box>
          </Grid>
        </Grow>

        {/* Feature 4 */}
        <Grow in timeout={1600}>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <StyledIconBox>
                <HandshakeIcon sx={{ fontSize: '40px', color: '#FBC02D' }} /> {/* Yellow icon */}
              </StyledIconBox>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#012A4A',
                  marginBottom: 1,
                }}
              >
                BEYOND LIMITS OF EXPECTATIONS
              </Typography>
              <Box
                sx={{
                  width: '50px',
                  height: '3px',
                  backgroundColor: '#FBC02D', // Yellow underline
                  margin: '0 auto 10px',
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: '#777',
                  fontSize: '0.9rem',
                }}
              >
                We closely follow up and keep the client up to date on the progress of the assignments. Value-added services
                are available on request.
              </Typography>
            </Box>
          </Grid>
        </Grow>
      </Grid>
    </Box>
  );
}

export default WhyUs;

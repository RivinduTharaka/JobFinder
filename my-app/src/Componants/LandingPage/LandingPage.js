import React from 'react';
import { Box, Typography, TextField, Button, Select, MenuItem } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import cmbimg from '../../../src/cmb.jpg';

function LandingPage() {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box
            sx={{
                position: 'relative',
                textAlign: 'center',
                color: 'white',
            }}
        >
            {/* Background Image */}
            <Box
                component="img"
                src={cmbimg} // Replace with your image path
                alt="Landing"
                sx={{
                    width: '100%',
                    height: { xs: '30vh', sm: '50vh', md: '40vh', lg: '50vh' },
                    objectFit: 'cover',
                }}
            />

            {/* Centered Content */}
            {/* Centered Content */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: '#fff',
                    padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding for small to large screens
                    width: { xs: '90%', sm: '80%', md: '60%', lg: '50%' }, // Responsive width
                    backgroundColor: 'rgba(255,255,255,0.1)', // Transparent background
                    backdropFilter: 'blur(5px)', // Frosted glass effect
                    borderRadius: 3, // Smooth rounded corners
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Subtle shadow for elevated appearance
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
                        fullWidth
                        sx={{
                            backgroundColor: '#014F86', // Teal blue color from palette
                            color: 'white', // Dark blue text
                            textTransform: 'none',
                            fontWeight: '500',
                            // borderRadius: '20px',
                            width:'200px',
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
                        fullWidth
                        sx={{
                            backgroundColor: '#61A5C2', // Teal blue color from palette
                            color: '#012A4A', // Dark blue text
                            textTransform: 'none',
                            fontWeight: '500',
                            // borderRadius: '20px',
                            width:'200px',
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

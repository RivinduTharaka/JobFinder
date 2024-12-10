import React, { useState } from 'react';
import {
    TextField, Button, Radio, RadioGroup, FormControlLabel,
    FormControl, FormLabel, Select, MenuItem, InputLabel,
    Typography, Box, Container, Stepper, Step, StepLabel
} from '@mui/material';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function ApplyForm() {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Enter Your Details', 'Answer HR Questions', 'Submit Application'];

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        currentlyWorking: '',
        noticePeriod: '',
        vaccinationStatus: '',
        workLocationPreference: '',
        cvFile: null
    });

    const handleNext = () => {
        if (isStepComplete()) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all required fields.',
            });
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            currentlyWorking: '',
            noticePeriod: '',
            vaccinationStatus: '',
            workLocationPreference: '',
            cvFile: null
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (event) => {
        setFormData({
            ...formData,
            cvFile: event.target.files[0],
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isStepComplete()) {
            console.log('Submitted Data:', formData);
            Swal.fire({
                icon: 'success',
                title: 'Submitted!',
                text: 'Your application has been submitted successfully.',
            }).then((result) => {
                if (result.isConfirmed || result.isDismissed) {
                    navigate('/'); // Redirect to the home page
                }
            });
            handleReset();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all required fields.',
            });
        }
    };

    const isStepComplete = () => {
        switch (activeStep) {
            case 0:
                return formData.firstName && formData.lastName && formData.email && formData.phone;
            case 1:
                return formData.currentlyWorking && formData.noticePeriod && formData.vaccinationStatus && formData.cvFile;
            case 2:
                return true; // No additional checks for the last step before submission
            default:
                return false;
        }
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <>
                        <TextField required fullWidth label="First Name" name="firstName" variant="outlined" margin="normal" value={formData.firstName} onChange={handleInputChange} />
                        <TextField required fullWidth label="Last Name" name="lastName" variant="outlined" margin="normal" value={formData.lastName} onChange={handleInputChange} />
                        <TextField required fullWidth label="E-mail" type="email" name="email" variant="outlined" margin="normal" value={formData.email} onChange={handleInputChange} />
                        <TextField required fullWidth label="Phone Number" type="tel" name="phone" variant="outlined" margin="normal" value={formData.phone} onChange={handleInputChange} />
                    </>
                );
            case 1:
                return (
                    <>
                        <FormControl required component="fieldset" fullWidth margin="normal">
                            <FormLabel component="legend">Are You Currently Working?</FormLabel>
                            <RadioGroup row name="currentlyWorking" value={formData.currentlyWorking} onChange={handleInputChange}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl required fullWidth margin="normal">
                            <InputLabel id="notice-period-label">Notice Period</InputLabel>
                            <Select labelId="notice-period-label" id="noticePeriod" name="noticePeriod" value={formData.noticePeriod} label="Notice Period" onChange={handleInputChange}>
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value="immediate">Immediate</MenuItem>
                                <MenuItem value="1 month">1 Month</MenuItem>
                                <MenuItem value="2 months">2 Months</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl required fullWidth margin="normal">
                            <InputLabel id="vaccination-status-label">Your Covid Vaccination Status</InputLabel>
                            <Select labelId="vaccination-status-label" id="vaccinationStatus" name="vaccinationStatus" value={formData.vaccinationStatus} label="Your Covid Vaccination Status" onChange={handleInputChange}>
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value="vaccinated">Vaccinated</MenuItem>
                                <MenuItem value="not vaccinated">Not Vaccinated</MenuItem>
                            </Select>
                        </FormControl>
                        <Typography variant="subtitle1" gutterBottom>
                            Upload your CV - PDF, DOC, DOCX
                        </Typography>
                        <TextField
                            required
                            type="file"
                            id="cvUpload"
                            name="cvFile"
                            InputLabelProps={{ shrink: true }}
                            onChange={handleFileChange}
                        />
                    </>
                );
            case 2:
                return (
                    <>
                        <Typography sx={{ mt: 4 }}>Review and Submit Your Application</Typography>
                        <Typography sx={{ mb: 4 }}>Please review all your information before submitting. Ensure that all the information provided is accurate and up to date.</Typography>
                    </>
                );
            default:
                return 'Unknown step';
        }
    };

    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: 20, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)', backgroundColor: 'background.paper', borderRadius: '8px', p: 3, overflow: 'hidden' }}>
            <Typography variant="h5" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
                Account Manager - Emerging Enterprise - Southern
            </Typography>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <form onSubmit={handleSubmit}>
                {activeStep === steps.length ? (
                    <>
                        <Button onClick={handleReset} sx={{ mr: 1 }}>
                            Reset
                        </Button>
                    </>
                ) : (
                    <>
                        {getStepContent(activeStep)}
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button
                                onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                                variant="contained"
                            >
                                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                            </Button>
                        </Box>
                    </>
                )}
            </form>
        </Container>
    );
}

export default ApplyForm;

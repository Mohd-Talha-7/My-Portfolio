import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';

const MotionBox = motion(Box);

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf'; // Make sure this path is correct inside your `public/` folder
    link.download = 'Mohd_Talha_Resume.pdf';
    link.click();
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{
        py: 8,
        px: 2,
        backgroundColor: '#fefefe',
        minHeight: '90vh',
      }}
    >
      <Container maxWidth="md" sx={{ mt: 10, pb: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" color="primary">
          My Resume
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          Click the button below to download my updated resume in PDF format.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<DownloadIcon />}
          onClick={handleDownload}
          sx={{ mt: 3 }}
        >
          Download Resume
        </Button>
      </Container>
    </MotionBox>
  );
};

export default Resume;

import React from 'react';
import { Container, Typography, Box, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionBox = motion(Box);

const Home = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: '#f9f9f9',
      }}
    >
      <Container maxWidth="md" sx={{ mt: 10, pb: 6 }}>
        <Typography
          variant="h3"
          component="h1"
          fontWeight="bold"
          gutterBottom
          color="primary"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          Hi, I'm Talha 👋
        </Typography>

        <Typography
          variant="h5"
          fontWeight="medium"
          color="text.secondary"
          gutterBottom
          sx={{
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.7rem' },
            px: { xs: 1, sm: 2, md: 0 },
          }}
        >
          Web Developer | AI & ML | Building Scalable & Smart Applications | Innovating with Data & Automation
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: 2,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            px: { xs: 1, sm: 2, md: 0 },
          }}
        >
          I'm a Web Developer passionate about crafting high-performance web applications
          with clean architecture and intelligent automation. My work blends modern frontend frameworks
          with robust backend systems, and I'm driven by solving real-world problems using AI, ML, and data-driven insights.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}  // Use Link component for navigation
            to="/projects"    // Specify the 'to' prop for the route
            sx={{ width: { xs: '100%', sm: 'auto' } }}
          >
          View My Work
        </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            component={Link}  // Use Link component for navigation
            to="/contact"     // Specify the 'to' prop for the route
            sx={{ width: { xs: '100%', sm: 'auto' } }}
          >
          Contact Me
        </Button>
        </Stack>
      </Container>
    </MotionBox>
  );
};

export default Home;

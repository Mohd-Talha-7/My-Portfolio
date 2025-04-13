import React from 'react';
import { Container, Typography, Box, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

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
        px: 2,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h1"
          fontWeight="bold"
          gutterBottom
          color="primary"
        >
          Hi, I'm Talha 👋
        </Typography>

        <Typography
          variant="h5"
          fontWeight="medium"
          color="text.secondary"
          gutterBottom
        >
          Web Developer | AI & ML | Building Scalable & Smart Applications | Innovating with Data & Automation
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 2 }}
        >
          I'm a Web Developer passionate about crafting high-performance web applications
          with clean architecture and intelligent automation. My work blends modern frontend frameworks
          with robust backend systems, and I'm driven by solving real-world problems using AI, ML, and data-driven insights.
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/projects"
          >
            View My Work
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href="/contact"
          >
            Contact Me
          </Button>
        </Stack>
      </Container>
    </MotionBox>
  );
};

export default Home;

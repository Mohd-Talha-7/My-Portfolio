import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        position: 'fixed', // ✅ Fixed at bottom
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #ddd',
        textAlign: 'center',
        zIndex: 999,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={3} mt={1}>
        <Link
          href="https://github.com/Mohd-Talha-7"
          target="_blank"
          underline="hover"
          color="inherit"
          display="flex"
          alignItems="center"
        >
          <GitHubIcon sx={{ mr: 0.5 }} /> GitHub
        </Link>

        <Link
          href="https://www.linkedin.com/in/mohdtalha123/"
          target="_blank"
          underline="hover"
          color="inherit"
          display="flex"
          alignItems="center"
        >
          <LinkedInIcon sx={{ mr: 0.5 }} /> LinkedIn
        </Link>

        <Link
          href="mailto:talhalko1@gmail.com"
          underline="hover"
          color="inherit"
          display="flex"
          alignItems="center"
        >
          <EmailIcon sx={{ mr: 0.5 }} /> Email
        </Link>

        <Link
          href="tel:+919198412545"
          underline="hover"
          color="inherit"
          display="flex"
          alignItems="center"
        >
          <PhoneIcon sx={{ mr: 0.5 }} /> Phone
        </Link>
      </Stack>
    </Box>
  );
};

export default Footer;

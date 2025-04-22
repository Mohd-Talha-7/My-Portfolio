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
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #ddd',
        textAlign: 'center',
        zIndex: 999,
        maxWidth: '100%',
        overflowX: 'auto',
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontSize: {
            xs: '0.75rem', // Small screen
            sm: '0.85rem',
            md: '1rem', // Medium and up
          },
        }}
      >
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </Typography>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        mt={1}
        sx={{
          flexWrap: 'wrap',
          px: 1,
        }}
      >
        {[
          {
            href: 'https://github.com/Mohd-Talha-7',
            icon: <GitHubIcon fontSize="small" sx={{ mr: 0.5 }} />,
            text: 'GitHub',
          },
          {
            href: 'https://www.linkedin.com/in/mohdtalha123/',
            icon: <LinkedInIcon fontSize="small" sx={{ mr: 0.5 }} />,
            text: 'LinkedIn',
          },
          {
            href: 'mailto:talhalko1@gmail.com',
            icon: <EmailIcon fontSize="small" sx={{ mr: 0.5 }} />,
            text: 'Email',
          },
          {
            href: 'tel:+919198412545',
            icon: <PhoneIcon fontSize="small" sx={{ mr: 0.5 }} />,
            text: 'Phone',
          },
        ].map(({ href, icon, text }) => (
          <Link
            key={text}
            href={href}
            target="_blank"
            underline="hover"
            color="inherit"
            display="flex"
            alignItems="center"
            sx={{
              fontSize: {
                xs: '0.75rem',
                sm: '0.85rem',
                md: '1rem',
              },
              whiteSpace: 'nowrap',
            }}
          >
            {icon}
            {text}
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default Footer;

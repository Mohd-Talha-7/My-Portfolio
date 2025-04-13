import React, { useRef } from 'react';
import { Container, Typography, Box, TextField, Button, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const MotionBox = motion(Box);

const Contact = () => {
  const formRef = useRef();
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = React.useState(false);

  const onSubmit = () => {
    emailjs
      .sendForm(
        'service_94bso8b',        // 🔁 Replace with your EmailJS Service ID
        'template_h65osqr',       // 🔁 Replace with your EmailJS Template ID
        formRef.current,
        'bt5XqtVvDuLLZtpw8'        // 🔁 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSuccess(true);
          reset();
        },
        (error) => {
          console.error('Email sending error:', error);
        }
      );
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
      <Container maxWidth="sm" sx={{ mt: 10, pb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" color="primary" textAlign="center">
          Contact Me
        </Typography>

        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Name"
            fullWidth
            {...register('user_name')}
            margin="normal"
            required
          />
          <TextField
            label="Email"
            fullWidth
            type="email"
            {...register('user_email')}
            margin="normal"
            required
          />
          <TextField
            label="Message"
            fullWidth
            multiline
            rows={4}
            {...register('message')}
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            fullWidth
          >
            Send Message
          </Button>
        </form>

        {success && (
          <Alert severity="success" sx={{ mt: 3 }}>
            Message sent successfully!
          </Alert>
        )}
      </Container>
    </MotionBox>
  );
};

export default Contact;

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const About = () => {
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
      <Container maxWidth="md" sx={{ mt: 10, pb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" color="primary">
          About Me
        </Typography>

        <Typography variant="h6" color="text.primary" fontWeight="bold" gutterBottom>
          🚀 Full-Stack Developer | AI & Data Enthusiast
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          🔹 <strong>Full-Stack Expertise:</strong> <br />
          With a strong foundation in full-stack development, expertise lies in designing and building scalable, efficient, and user-centric applications using React, Node.js, Express, MongoDB, and MySQL. Proficiency spans both frontend and backend development, ensuring seamless performance, intuitive interfaces, and optimized functionality.
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          🤖 <strong>AI & Data Analytics:</strong> <br />
          Beyond web development, a deep interest in AI and data analytics drives exploration into intelligent systems that enhance decision-making and automate complex processes. The focus remains on integrating machine learning and NLP into web applications to develop smarter, more adaptive solutions.
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          💡 <strong>Technology & Innovation:</strong> <br />
          Focused on technological innovation, strategic problem-solving, and continuous advancement—enhancing system efficiency, optimizing user engagement, and leveraging AI-driven technologies to drive meaningful impact.
        </Typography>

        <Typography variant="body1" color="text.secondary">
          🤝 <strong>Let’s Connect!</strong> <br />
          Open to collaborations, knowledge sharing, and opportunities in web development, AI, and data-driven applications. Always seeking to contribute to forward-thinking projects that push the boundaries of innovation.
        </Typography>
      </Container>
    </MotionBox>
  );
};

export default About;

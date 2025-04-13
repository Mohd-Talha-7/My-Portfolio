import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const skills = {
  "Frontend Development": [
    "HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Material UI", "Framer Motion", "Sandpack"
  ],
  "Backend Development": [
    "Node.js", "Express.js", "REST APIs", "JWT", "Passport.js", "Multer", "Firebase"
  ],
  "Databases": [
    "MongoDB", "MongoDB Atlas", "MySQL", "SQL", "Relational Databases", "Database Management System (DBMS)"
  ],
  "AI/ML & Data Analytics": [
    "Artificial Intelligence (AI)", "Machine Learning", "Deep Learning", "Artificial Neural Networks",
    "Big Data", "Big Data Analytics", "Data Analytics", "Data Analysis", "Data Analytics Algorithms",
    "Machine Learning Algorithms", "NumPy", "Pandas", "Matplotlib"
  ],
  "Programming Languages": [
    "C", "C++", "Java", "Python", "JavaScript"
  ],
  "Development Tools & Platforms": [
    "Git", "GitHub", "NPM", "OpenAI API", "Gemini API", "Render", "Vercel", "AWS", "Figma"
  ],
  "Web Design & Styling": [
    "Responsive Web Design", "Web Design", "Dynamic UI", "EJS", "Embedded JavaScript (EJS)"
  ],
  "Concepts & Core CS": [
    "OOPS", "Object-Oriented Programming", "DSA", "Data Structures", "Algorithm Design",
    "Algorithm Analysis", "Formal Languages", "Operating Systems", "Computer Architecture",
    "Representational State Transfer (REST)", "Lambda Expressions", "Software Development", "Full-Stack Development"
  ],
  "Soft Skills": [
    "Leadership", "Communication", "Problem Solving", "Critical Thinking", "Microsoft Office", "AutoCAD"
  ]
};

const Skills = () => {
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
      <Container maxWidth="lg" sx={{ mt: 10, pb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" color="primary">
          My Skills
        </Typography>

        {Object.entries(skills).map(([category, items], idx) => (
          <Box key={idx} sx={{ mb: 4 }}>
            <Typography variant="h6" fontWeight="bold" color="text.secondary" gutterBottom>
              {category}
            </Typography>
            <Grid container spacing={2}>
              {items.map((skill, i) => (
                <Grid item xs={6} sm={4} md={3} key={i}>
                  <Paper elevation={3} sx={{
                    p: 2,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    }
                  }}>
                    {skill}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </MotionBox>
  );
};

export default Skills;

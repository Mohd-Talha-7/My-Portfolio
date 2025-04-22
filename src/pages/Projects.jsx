import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const projects = [
  {
    title: 'DevTrack – Task Manager for Developers',
    description: `A full-stack task management app to help developers organize tasks with categories, priorities, and deadline tracking.`,
    techStack: 'React.js, Node.js, Express.js, MongoDB, Material UI',
    demo: 'https://devtrack-kwxt.onrender.com',
    github: 'https://github.com/Mohd-Talha-7/DevTrack'
  },
  {
    title: 'WanderLust – Travel Listing Web App',
    description: `A dynamic travel platform with secure auth, image uploads, and responsive design for travel listing and discovery.`,
    techStack: 'Node.js, Express.js, MongoDB Atlas, EJS, Bootstrap, Cloudinary, Passport.js',
    demo: 'https://majorproject.onrender.com',
    github: 'https://github.com/Mohd-Talha-7/MajorProject'
  },
  {
    title: 'Weather Forecast App',
    description: `Real-time weather app that detects location, fetches weather using OpenWeather API, and displays data in a responsive UI.`,
    techStack: 'React.js, Bootstrap, OpenWeather API',
    demo: 'https://miniprojectreact.onrender.com',
    github: 'https://github.com/Mohd-Talha-7/MiniProjectReact'
  },
  {
    title: 'React Live Code Editor with AI Integration',
    description: `A real-time React code editor with AI-generated component support, terminal emulator, and dynamic code preview.`,
    techStack: 'React.js, Sandpack, Node.js, Express.js, XTerm.js, Gemini API',
    demo: 'https://live-react-code-editor.onrender.com',
    github: 'https://github.com/Mohd-Talha-7/live-react-code-editor'
  },
  {
    title: 'Student Job Tracker',
    description: `Full-stack app for students to track job applications with filtering, dynamic status updates, and a clean Material UI interface.`,
    techStack: 'React.js (with Hooks), Node.js, Express.js, MongoDB, Material UI, Vercel, Render',
    demo: 'https://job-tracker-frontend-liart.vercel.app',
    github: 'https://github.com/Mohd-Talha-7/job-tracker-frontend'
  },
  {
    title: 'Simon Game',
    description: `A classic Simon Game built using HTML, CSS, and JavaScript. Enhances memory skills with fun, interactive gameplay.`,
    techStack: 'HTML5 (Semantic Markup), CSS3 (Animations, Flexbox), JavaScript (DOM Manipulation, Event Handling, Game Logic)',
    demo: 'https://mohd-talha-7.github.io/Mini_Project/Simon.html',
    github: 'https://github.com/Mohd-Talha-7/Mini_Project'
  },
  {
    title: 'Currency Converter',
    description: `A currency converter app that uses a real-time API to convert currencies and displays the results with an easy-to-use interface.`,
    techStack: 'HTML, CSS, JavaScript, Free Currency API',
    demo: 'https://mohd-talha-7.github.io/Currency-Converter/',
    github: 'https://github.com/Mohd-Talha-7/Currency-Converter',
  },
  {
    title: 'Stone Paper Scissor',
    description: 'Interactive Rock Paper Scissors game with dynamic visuals, user vs computer logic, and score tracking in a clean UI.',
    techStack: 'HTML5 for structure, CSS3 for styling and transitions, JavaScript for game logic, event handling, and DOM updates',
    demo: 'https://mohd-talha-7.github.io/Stone-Paper-Scissors/',
    github: 'https://github.com/Mohd-Talha-7/Stone-Paper-Scissors',
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'Classic two-player browser-based Tic-Tac-Toe with win-checking algorithm, responsive layout, and smooth gameplay.',
    techStack: 'HTML5 for layout, CSS3 for responsive design and grid styling, JavaScript for game state management and UI interactivity',
    demo: 'https://mohd-talha-7.github.io/Tic-Tac-Toe/',
    github: 'https://github.com/Mohd-Talha-7/Tic-Tac-Toe',
  },  
  {
    title: 'Spotify Clone',
    description: `A clone of the Spotify app created using only HTML and CSS, featuring a responsive UI that mimics the Spotify music player interface with sections for music albums, playlist, and navigation.`,
    techStack: 'Frontend: HTML, CSS (Responsive Design, Flexbox, Grid Layout)',
    demo: 'https://mohd-talha-7.github.io/Spotify-Clone/',
    github: 'https://github.com/Mohd-Talha-7/spotify-clone'
  },
  {
    title: 'Amazon Clone',
    description: `An e-commerce platform clone of Amazon, built using HTML and CSS, featuring a responsive layout with product display, cart functionality, and navigation similar to the Amazon homepage.`,
    techStack: 'Frontend: HTML, CSS (Responsive Layouts, Flexbox, Grid, Media Queries)',
    demo: 'https://mohd-talha-7.github.io/Amazon-Clone/',
    github: 'https://github.com/Mohd-Talha-7/amazon-clone'
  }  
];

const Projects = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{
        py: 8,
        px: 2,
        minHeight: '90vh',
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 10, pb: 6 }}>
        <Typography variant="h4" component="h2" fontWeight="bold" color="primary" gutterBottom>
          Projects
        </Typography>

        <Stack spacing={4} mt={4}>
          {projects.map((project, index) => (
            <Card key={index} variant="outlined" sx={{ p: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Typography variant="body2" fontStyle="italic" mb={2}>
                  Tech Stack: {project.techStack}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    href={project.demo}
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    href={project.github}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </MotionBox>
  );
};

export default Projects;

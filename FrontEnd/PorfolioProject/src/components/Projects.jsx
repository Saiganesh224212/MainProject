import React, { useEffect } from 'react';
import {
  Grid,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import { PROJECTS_DETAILS } from "../Utils/projectDetails"; // Adjust the path if necessary
import { gsap } from 'gsap';

// Create a theme instance for typography customizations
const theme = createTheme({
  typography: {
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      color: "#333",
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      color: "#444",
    },
    body1: {
      fontFamily: '"Nunito", sans-serif',
      color: "#666",
    },
  },
});

// Styled Card with solid background color
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "20px auto",
  borderRadius: "15px",
  backgroundColor: "#ffffff", // Solid white background
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  },
}));

const Projects = () => {
  useEffect(() => {
    // GSAP Animation for the project cards
    const cards = document.querySelectorAll('.project-card');
    gsap.from(cards, {
      opacity: 30,
      y: 50,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {PROJECTS_DETAILS.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard className="project-card">
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)", // Slight zoom on image hover
                    }
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', mb: 1 }}>
                  <Button 
                    size="small" 
                    color="primary" 
                    variant="contained" 
                    href={project.link}
                    sx={{ mx: 1 }} // Space out buttons
                  >
                    View Project
                  </Button>
                  <Button 
                    size="small" 
                    color="secondary" 
                    variant="outlined" 
                    href={project.github} // GitHub link if available
                    startIcon={<GitHubIcon />}
                  >
                    GitHub
                  </Button>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

// Export the Projects component as default
export default Projects;

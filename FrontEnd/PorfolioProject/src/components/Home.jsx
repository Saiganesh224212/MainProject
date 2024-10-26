// Home.jsx
import { React, useEffect, useRef } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Container, Typography, Paper, Button, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { gsap } from "gsap";
import userimage from "../resources/images/userimage.JPG";
import resume from "../resources/saiganesh_res.pdf";
import { deepPurple } from '@mui/material/colors';

// Create a theme instance
const theme = createTheme({
  typography: {
    h1: {
      fontFamily: '"Montserrat", sans-serif',
    },
    h6: {
      fontFamily: '"Roboto", sans-serif',
    },
    body1: {
      fontFamily: '"Roboto", sans-serif',
    },
  },
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.grey[100],
  borderRadius: "15px",
  boxShadow: theme.shadows[5],
}));

const Home = () => {
  const textRef = useRef([]); // Array reference to store each letter

  useEffect(() => {
    // Animate each letter with a staggered floating effect
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 }, // Start hidden and slightly below
      {
        opacity: 1,
        y: 0, 
        duration: 2.5,
        ease: "power3.out",
        stagger: 0.05, // Stagger each letter animation by 0.05 seconds
      }
    );
  }, []);

  // Split the text and apply the "Playwrite GB S" font to each letter
  const animatedText = "Hello, I'm Saiganesh".split("").map((char, index) => (
    <span
      key={index}
      ref={(el) => (textRef.current[index] = el)} // Store each span in the ref array
      style={{
        display: "inline-block",
        whiteSpace: "pre", // Preserve spaces
        fontFamily: '"Playwrite England SemiJoined", serif', // Apply custom font
        color: deepPurple[500],
      }}
    >
      {char}
    </span>
  ));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <StyledPaper>
          <Avatar 
            alt="Saiganesh" 
            src={userimage} 
            sx={{ width: 200, height: 200, margin: "auto" }} 
          />
          <Typography variant="h2" component="h1" gutterBottom>
            {animatedText} {/* Insert animated letters */}
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            A bit about me:
          </Typography>
          <Typography variant="body1" paragraph>
            I am a passionate student with a love for computers and science. 
            I enjoy personal projects and insights that define me and am always exploring new skills.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2 }}
            href={resume} // Path to the resume
            download // Adds download functionality
          >
            ☑️Download My Resume
          </Button>
        </StyledPaper>
      </Container>
    </ThemeProvider>
  );
};

// Export the Home component as default
export default Home;
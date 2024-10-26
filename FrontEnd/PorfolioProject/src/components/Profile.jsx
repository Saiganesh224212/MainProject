import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const SocialProfile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 5,
        height: 500,
      }}
    >
      <Typography variant="h1" sx={{ fontFamily: '"Pacifico", cursive', color: "#4A4A4A" }}>
        <Typewriter
          options={{
            strings: ['Connect with me...', 'Let\'s chat!'],
            autoStart: true,
            loop: true, // Loop through the strings
            deleteSpeed: 50, // Speed of deleting characters
            pauseFor: 1000, // Pause before starting next string
          }}
        />
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          '& a': {
            textDecoration: "none",
            color: "black",
            transition: "transform 0.2s, color 0.2s",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
          '& a:hover': {
            transform: "scale(1.1)", // Scale effect on hover
            color: "#6200ea", // Change color on hover
          },
        }}
      >
        <a
          href="https://github.com/Saiganesh224212"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={{ fontSize: 60 }} />
          <Typography sx={{ color: "#fef9ef", mt: 1 }}>GitHub</Typography>
        </a>

        <a
          href="#Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon sx={{ fontSize: 60 }} />
          <Typography sx={{ color: "#fef9ef", mt: 1 }}>Facebook</Typography>
        </a>

        <a
          href="#Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon sx={{ fontSize: 60 }} />
          <Typography sx={{ color: "#fef9ef", mt: 1 }}>Instagram</Typography>
        </a>

        <a
          href="https://www.linkedin.com/in/sai-ganesh-s-b700b9254"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon sx={{ fontSize: 60 }} />
          <Typography sx={{ color: "#fef9ef", mt: 1 }}>LinkedIn</Typography>
        </a>

        <a
          href="mailto:12b18saiganesh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon sx={{ fontSize: 60 }} />
          <Typography sx={{ color: "#fef9ef", mt: 1 }}>Email</Typography>
        </a>
      </Box>
    </Box>
  );
};

export default SocialProfile;

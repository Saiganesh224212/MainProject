import React from 'react';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
} from '@mui/material';
import { styled } from '@mui/system';
import SchoolIcon from '@mui/icons-material/School'; // Importing Material UI icon

// Create a theme instance
const theme = createTheme();

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'left',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.grey[50], // Lighter background for a clean look
  borderRadius: '15px',
  boxShadow: theme.shadows[5], // Slightly stronger shadow for depth
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

const AchievementsList = styled(List)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Academics = () => {
  const educationLevels = [
    {
      level: 'Undergraduate',
      achievements: [
        "Bachelor's Degree in CS (Hons.) from SSSIIHL",
        'Expected Graduation - 2025',
        'Completed a project on Portfolio',
      ],
    },
    {
      level: 'Intermediate',
      achievements: [
        'Completed High School at Kendriya Vidyalaya NLC Neyveli',
        'Grade: 90%',
      ],
    },
    {
      level: 'Schooling',
      achievements: [
        'Completed Schooling at Kendriya Vidyalaya NLC Neyveli',
        'Grade: 80%',
      ],
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <StyledPaper>
          <Typography variant="h3" component="h1" gutterBottom>
            My Education
          </Typography>
          {educationLevels.map((edu, index) => (
            <div key={index}>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 'bold', color: theme.palette.primary.main }} // Emphasizing the level
              >
                <SchoolIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
                {edu.level}
              </Typography>
              <AchievementsList>
                {edu.achievements.map((achievement, idx) => (
                  <StyledListItem key={idx} alignItems="flex-start">
                    <Avatar
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        marginRight: 2,
                        fontWeight: 'bold', // Making the number bold
                      }}
                    >
                      {idx + 1}
                    </Avatar>
                    <ListItemText primary={achievement} />
                  </StyledListItem>
                ))}
              </AchievementsList>
              <Divider sx={{ margin: '10px 0' }} /> {/* Divider for clear separation */}
            </div>
          ))}
        </StyledPaper>
      </Container>
    </ThemeProvider>
  );
};

export default Academics;

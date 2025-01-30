import React, { useState, useEffect } from 'react';
import { Typography, Box, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', 'Arial', sans-serif",
    h4: {
      fontWeight: 700,
      color: '#00B5F7',
      fontSize: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontSize: '1.5rem',
      lineHeight: 1.6,
      color: '#FEFEFE',
      '@media (max-width:600px)': {
        fontSize: '1rem',
        lineHeight: 1.4,
      },
    },
  },
});

const BodyText = ({ onComplete }) => {
  const headline = `Vit veita dygdargóðar hitapumpuuppsetanir og HVS-tænastur`;
  const bodyText = `
    Vit bjóða dygdargóðar uppsetingar av hitapumpum, útintar av útbúnum montørum, ið seta góðskuna í hásæti.
    Vit taka okkum eisini av at bora hol ígjøgnum grundina fyri teg, fyri fastan prís.
    Umframt hetta veita vit allar tænastur í sambandi við alt HVS, seta fjarhitavekslarar upp og líknandi.
  `;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
      onComplete(); // Call onComplete when the animation is done
    }, 500); // Adjust the delay if needed
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        sx={{
          marginTop: '20px',
          paddingX: '15px',
          '@media (max-width:600px)': { paddingX: '20px' },
        }}
      >
        <Box
          sx={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.7s ease-in-out', // Smooth fade-in effect
          }}
        >
          <Typography variant="h4" gutterBottom>
            {headline}
          </Typography>
          <Typography variant="body1">
            {bodyText}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default BodyText;
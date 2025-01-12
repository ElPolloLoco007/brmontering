import React, { useState, useEffect } from 'react';
import { Typography, Box, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', 'Arial', sans-serif",
    h4: {
      fontWeight: 700,
      color: '#00B5F7',
      fontFamily: 'Inter',
      fontSize: '2rem', 
      '@media (max-width:600px)': {
        fontSize: '1.5rem', 
      },
    },
    body1: {
      fontSize: '1.5rem', 
      lineHeight: 1.6,
      color: '#FEFEFE',
      fontFamily: 'Inter',
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

  const [typedHeadline, setTypedHeadline] = useState('');
  const [typedBody, setTypedBody] = useState('');
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [bodyIndex, setBodyIndex] = useState(0);

  useEffect(() => {
    if (headlineIndex < headline.length) {
      const interval = setInterval(() => {
        setTypedHeadline((prev) => prev + headline[headlineIndex]);
        setHeadlineIndex((prev) => prev + 1);
      }, 3); 
      return () => clearInterval(interval);
    }
  }, [headlineIndex, headline]);

  useEffect(() => {
    if (headlineIndex === headline.length && bodyIndex < bodyText.length) {
      const interval = setInterval(() => {
        setTypedBody((prev) => prev + bodyText[bodyIndex]);
        setBodyIndex((prev) => prev + 1);
      }, 3); 
      return () => clearInterval(interval);
    } else if (headlineIndex === headline.length && bodyIndex === bodyText.length) {
      onComplete();
    }
  }, [headlineIndex, bodyIndex, bodyText, onComplete]);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        sx={{
          marginTop: '20px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '15px',
          paddingRight: '15px',
          '@media (max-width:600px)': {
            marginTop: '20px',
            paddingLeft: '20px',
            paddingRight: '20px',
          },
        }}
      >
        <Box textAlign="left" marginBottom="20px">
          <Typography variant="h4" gutterBottom>
            {typedHeadline}
          </Typography>
        </Box>
        <Typography variant="body1">{typedBody}</Typography>
      </Container>
    </ThemeProvider>
  );
};

export default BodyText;
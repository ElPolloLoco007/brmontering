import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#151515' }} elevation={0}>
      <Toolbar
        sx={{
          flexDirection: { xs: 'column', sm: 'row' }, 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: { xs: '10px', sm: '20px' }, 
          textAlign: 'center', 
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, 
            alignItems: 'center',
            justifyContent: 'center', 
            textAlign: 'center', 
            width: '100%', 
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: { xs: 1, sm: 0 }, 
              justifyContent: 'center', 
            }}
          >
            <PhoneIcon sx={{ mr: 1, color: 'white' }} />
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '16px', sm: '24px', lg: '32px' }, 
                fontFamily: 'Inter',
                color: '#00B5F7',
              }}
            >
              598060 - 218240
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex' },
              alignItems: 'center',
              justifyContent: 'center', 
              marginLeft: { sm: 3 }, 
            }}
          >
            <a
              href="mailto:brmontering@gmail.com"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', 
              }}
            >
              <EmailIcon sx={{ mr: 1, color: 'white' }} />
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '16px', sm: '24px', lg: '32px' }, // Larger font on bigger screens
                  color: '#00B5F7',
                  fontFamily: 'Inter',
                }}
              >
                brmontering@gmail.com
              </Typography>
            </a>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
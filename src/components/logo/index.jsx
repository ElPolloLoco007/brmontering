import React from 'react';
import IconButton from '@mui/material/IconButton';
import Logo from '../../assets/brmlogo.png'; 

const LogoComponent = () => {
  return (
    <IconButton
      edge="start"
      color="inherit"
      sx={{
        mb: { xs: 1, sm: 0 },
        mr: { sm: 2 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        ml: { xs: .5, sm: -1, lg: -2 }, 
        img: {
          width: { xs: '150px', sm: '300px', lg: '400px' }, 
          height: 'auto',
        },
      }}
    >
      <img src={Logo} alt="Logo" />
    </IconButton>
  );
};

export default LogoComponent;
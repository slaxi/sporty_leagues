import React from 'react';
import { Box, Typography } from '@mui/material';

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh', // Loader zauzima ceo ekran
        backgroundColor: '#f5f5f5' // Svetlosiva pozadina
      }}
    >
      <Typography
        variant="h5"
        component="p"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          margin: '40px 0',
          color: '#333', // Tamno siva boja za tekst
          fontFamily: 'Roboto, sans-serif' // Font koji se koristi u aplikaciji
        }}
      >
        Loading...
      </Typography>
      <Box
        component="img"
        src="https://img2.annthegran.com/printart/xlarge/fsl_studio/pgfsl1365.webp" // URL slike fudbalske lopte
        alt="Loading..."
        sx={{
          width: '100px', // Veličina lopte
          height: '100px',
          animation: 'spin 1.5s linear infinite' // Animacija rotacije
        }}
      />
      {/* CSS za animaciju */}
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Loader;

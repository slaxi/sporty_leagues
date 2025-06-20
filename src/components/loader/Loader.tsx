import React from 'react';
import { Box, Typography } from '@mui/material';

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography
        variant="h5"
        component="p"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          margin: '40px 0',
          color: 'white',
          fontFamily: 'Roboto, sans-serif'
        }}
      >
        Loading...
      </Typography>
      <Box
        component="img"
        src="https://img2.annthegran.com/printart/xlarge/fsl_studio/pgfsl1365.webp"
        alt="Loading..."
        sx={{
          width: '100px',
          height: '100px',
          animation: 'spin 1.5s linear infinite',
          filter: 'brightness(0) invert(1)'
        }}
      />

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

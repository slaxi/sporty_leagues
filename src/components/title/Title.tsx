import { Typography } from '@mui/material';
import React from 'react';
import { h } from 'react-router/dist/development/register-DCE0tH5m';

const Title = () => {
  return (
    <section>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          margin: '40px 0',
          color: '#FFD700'
        }}
      >
        Sports Betting Dashboard
      </Typography>
    </section>
  );
};

export default Title;

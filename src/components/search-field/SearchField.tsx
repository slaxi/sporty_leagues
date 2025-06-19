import { Box, MenuItem, TextField } from '@mui/material';
import React from 'react';

const SearchField = () => {
  return (
    <section>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '40px'
        }}
      >
        {/* Search Field */}
        <TextField
          label="Search League"
          variant="outlined"
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
            width: { xs: '100%', md: '300px' }
          }}
          inputProps={{
            'aria-label': 'Search League'
          }}
        />

        {/* Dropdown */}
        <TextField
          select
          label="Select Sport"
          variant="outlined"
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
            width: { xs: '100%', md: '200px' }
          }}
          inputProps={{
            'aria-label': 'Select Sport'
          }}
        >
          <MenuItem value="Football">Football</MenuItem>
          <MenuItem value="Basketball">Basketball</MenuItem>
          <MenuItem value="Tennis">Tennis</MenuItem>
        </TextField>
      </Box>
    </section>
  );
};

export default SearchField;

import { TextField } from '@mui/material';
import React from 'react';
import { TSearchFieldProps } from './SearchFilter.type';

const SearchFilter = ({ handleSearchChange }: { handleSearchChange: TSearchFieldProps }) => {
  return (
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
      onChange={handleSearchChange} // Placeholder for search functionality
    />
  );
};

export default SearchFilter;

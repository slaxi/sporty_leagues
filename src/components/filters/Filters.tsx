import { Box, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import { TFiltersProps } from './Filters.type';
import SearchFilter from './search-filter/SearchFilter';
import DropdownFilter from './dropdown-filter/DropdownFilter';

const Filters: React.FC<TFiltersProps> = ({
  handleSearchChange,
  handleSelectChange,
  filteredSports,
  selectedSport
}) => {
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
        <SearchFilter handleSearchChange={handleSearchChange} />

        <DropdownFilter
          handleSelectChange={handleSelectChange}
          filteredSports={filteredSports}
          selectedSport={selectedSport}
        />
      </Box>
    </section>
  );
};

export default Filters;

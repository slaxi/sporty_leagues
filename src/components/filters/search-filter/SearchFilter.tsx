import { TextField } from '@mui/material';
import { TSearchFieldProps } from './SearchFilter.type';

const SearchFilter = ({ handleSearchChange }: { handleSearchChange: TSearchFieldProps }) => {
  return (
    <TextField
      label="Search League"
      variant="outlined"
      sx={{
        backgroundColor: 'white',
        borderRadius: '4px',
        width: { xs: '100%', md: '300px' },
        '& label': {
          color: '#fff !important',
          textShadow: '0 0 1px #213547, 0 0 4px rgb(2, 19, 33)',
          fontWeight: 600
        }
      }}
      inputProps={{
        'aria-label': 'Search League'
      }}
      onChange={handleSearchChange} // Placeholder for search functionality
    />
  );
};

export default SearchFilter;

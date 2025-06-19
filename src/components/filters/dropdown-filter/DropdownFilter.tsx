import { MenuItem, Select, TextField } from '@mui/material';
import { TDropownFilterProps } from './DropdownFilter.types';

const DropdownFilter = ({
  handleSelectChange,
  filteredSports,
  selectedSport
}: TDropownFilterProps) => {
  return (
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
      onChange={handleSelectChange}
      value={selectedSport}
    >
      {filteredSports.map((sport) => (
        <MenuItem value={sport} key={sport}>
          {sport}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default DropdownFilter;

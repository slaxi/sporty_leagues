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
        width: { xs: '100%', md: '200px' },
        '& label': {
          color: '#fff !important',
          textShadow: '0 0 1px #213547, 0 0 4px rgb(2, 19, 33)',
          fontWeight: 600
        }
      }}
      onChange={handleSelectChange}
      value={selectedSport === 'Select Sport' ? '' : selectedSport}
      placeholder={'Select Sport'}
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

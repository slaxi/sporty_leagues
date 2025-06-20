import { SelectChangeEvent } from '@mui/material';

export type TFiltersProps = {
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filteredSports: string[];
  selectedSport: string;
};

import { TFiltersProps } from '../Filters.type';

export type TDropownFilterProps = {
  handleSelectChange: TFiltersProps['handleSearchChange'];
  filteredSports: string[];
  selectedSport: string;
};

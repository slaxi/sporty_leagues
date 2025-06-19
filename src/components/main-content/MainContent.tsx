import SearchField from '../search-field/SearchField';
import LeagueTable from '../league-table/LeagueTable';

const MainContent = () => {
  return (
    <>
      {/* Search and Filter Section */}
      <SearchField />

      {/* League Table */}
      <LeagueTable />
    </>
  );
};

export default MainContent;

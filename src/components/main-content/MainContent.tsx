import SearchField from '../filters/Filters';
import LeagueTable from '../league-table/LeagueTable';
import { useLeagueTableQuery } from '../../../hooks/useLeagueTableQuery';
import Loader from '../loader/Loader';
import { useCallback, useMemo, useState } from 'react';
import { ILeagueTable } from '../league-table/LeagueTable.types';
import Filters from '../filters/Filters';
import { SelectChangeEvent } from '@mui/material';

const MainContent = () => {
  // Fetch league table data using the custom hook
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setselectedSport] = useState('Select Sport');
  const { isLoading, error, data } = useLeagueTableQuery();

  //     const filteredLeagues = useMemo(() => {
  //     if (!data || !data.leagues) return [];
  //     return data.leagues.filter((league: ILeagueTable) =>
  //       league.strLeague.toLowerCase().includes(searchTerm.trim().toLowerCase())
  //     );
  //   }, [data, searchTerm]);

  const filteredLeagues = useCallback(
    (searchTerm: string, field: 'strLeague' | 'strSport') => {
      if (!data || !data.leagues) return [];
      return data.leagues.filter((league: ILeagueTable) =>
        league[field].toLowerCase().includes(searchTerm.trim().toLowerCase())
      );
    },
    [data]
  );

  const filteredSports = useMemo(() => {
    if (!data || !data.leagues) return [];
    const sportsNames = data.leagues.map((league: ILeagueTable) => league.strSport);
    return Array.from(new Set(sportsNames)).sort();
  }, [data]);

  const leaguesByLeague = filteredLeagues(searchTerm, 'strLeague');
  const leaguesBySport = filteredLeagues(selectedSport, 'strSport');

  let leaguesData: ILeagueTable[] = [];

  if (searchTerm.trim() && selectedSport === 'Select Sport') {
    leaguesData = leaguesByLeague;
  } else if (!searchTerm.trim() && selectedSport !== 'Select Sport') {
    leaguesData = leaguesBySport;
  } else if (searchTerm.trim() && selectedSport !== 'Select Sport') {
    leaguesData = leaguesByLeague.filter(
      (league) =>
        league.strLeague.toLowerCase().includes(searchTerm.trim().toLowerCase()) &&
        league.strSport.toLowerCase() === selectedSport.toLowerCase()
    );
  } else if (data && data.leagues) {
    leaguesData = data.leagues;
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const handleSelectChange = (event: SelectChangeEvent) => {
    setselectedSport(event.target.value);
  };

  if (isLoading) return <Loader />;
  if (error) {
    return <div>Error loading league table data: {error.message}</div>;
  }
  console.log('League Table Data:', data);
  return (
    <>
      {/* Search and Filter Section */}
      <Filters
        handleSearchChange={handleSearchChange}
        handleSelectChange={handleSelectChange}
        filteredSports={filteredSports}
        selectedSport={selectedSport}
      />

      {/* League Table */}
      <LeagueTable leaguesData={leaguesData} />
    </>
  );
};

export default MainContent;

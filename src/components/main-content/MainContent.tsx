import SearchField from '../filters/Filters';
import LeagueTable from '../league-table/LeagueTable';
import { useLeagueTableQuery } from '../../../hooks/useLeagueTableQuery';
import { useSeasonBadgeQuery } from '../../../hooks/useSeasonBadgeQuery';
import Loader from '../loader/Loader';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { TLeagueTable } from '../league-table/LeagueTable.types';
import Filters from '../filters/Filters';
import { SelectChangeEvent } from '@mui/material';
import { TSeasonBadgeData } from '../../../hooks/useQueryDataTypes';
import { useNavigate } from 'react-router';

const MainContent = () => {
  // Fetch league table data using the custom hook
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setselectedSport] = useState('Select Sport');
  const [leagueId] = useState<null | string>(null);

  const { isLoading, error, data } = useLeagueTableQuery();

  const {
    isLoading: loading,
    error: errorData,
    data: badgesList
  } = useSeasonBadgeQuery(leagueId, {
    enabled: !!leagueId
  });
  const navigate = useNavigate();
  const filteredSports = useMemo(() => {
    if (!data || !data.leagues) return [];
    const sportsNames = data.leagues.map((league: TLeagueTable) => league.strSport);
    return Array.from(new Set(sportsNames)).sort();
  }, [data]);

  const filteredLeagues = useCallback(
    (searchTerm: string, field: 'strLeague' | 'strSport') => {
      if (!data || !data.leagues) return [];
      return data.leagues.filter((league: TLeagueTable) =>
        league[field].toLowerCase().includes(searchTerm.trim().toLowerCase())
      );
    },
    [data]
  );

  const leaguesByLeague = filteredLeagues(searchTerm, 'strLeague');
  const leaguesBySport = filteredLeagues(selectedSport, 'strSport');

  let leaguesData: TLeagueTable[] = [];

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

  const handleLeagueClick = (leagueId: string) => {
    navigate(`/badge/${leagueId}`);
  };

  if (isLoading || loading) return <Loader />;
  if (error || errorData) {
    const errorMessage = error?.message || errorData?.message || 'An error occurred';
    return <div>Error loading league table data: {errorMessage}</div>;
  }
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
      <LeagueTable leagues={leaguesData} onLeagueClick={handleLeagueClick} />
    </>
  );
};

export default MainContent;

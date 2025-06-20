export type TLeagueTableProps = {
  leagues: TLeagueTable[];
  onLeagueClick?: (leagueId: string) => void; // Optional callback for league click events
};

export type TLeagueTable = {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string;
};

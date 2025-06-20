import { TLeagueTable } from '../src/components/league-table/LeagueTable.types';
type TLeagueTableData = {
  leagues: TLeagueTable[] | null;
};

export type TLeagueTableQuery = {
  isLoading: boolean;
  error: Error | null;
  data: TLeagueTableData | null;
};

export type TSeasonBadgeData = {
  seasons:
    | {
        strSeason: string;
        strBadge: string;
      }[]
    | [];
};

export type TSeasonBadgeQuery = {
  isLoading: boolean;
  error: Error | null;
  data: TSeasonBadgeData | null;
};

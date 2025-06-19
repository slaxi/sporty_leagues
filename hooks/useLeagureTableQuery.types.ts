import { ILeagueTable } from '../src/components/league-table/LeagueTable.types';
export type TLeagueTableQuery = {
  isLoading: boolean;
  error: Error | null;
  data: {
    leagues: ILeagueTable[] | null;
  } | null;
};

import { useQuery } from '@tanstack/react-query';
import { TLeagueTableQuery } from './useQueryDataTypes';

const BASE_LEAGUES_API = import.meta.env.VITE_ALL_LEAGUES_API_URL;
export const useLeagueTableQuery = (): TLeagueTableQuery => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['leagueTable'],
    staleTime: 1000 * 60 * 5, // Data is fresh for 5 minute
    queryFn: async () => {
      const response = await fetch(BASE_LEAGUES_API);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    refetchOnWindowFocus: false // Prevent refetching on window focus
  });

  return { isLoading, error, data };
};

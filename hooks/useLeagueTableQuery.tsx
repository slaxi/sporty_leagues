import { useQuery } from '@tanstack/react-query';
import { TLeagueTableQuery } from './useLeagureTableQuery.types';

const baseUrl = import.meta.env.VITE_ALL_LEAGUES_API_URL;
export const useLeagueTableQuery = (): TLeagueTableQuery => {
  // Simulating a query hook for fetching league table data
  const { isLoading, error, data } = useQuery({
    queryKey: ['leagueTable'],
    staleTime: 1000 * 60 * 5, // Data is fresh for 5 minute
    queryFn: async () => {
      // Simulate fetching data from an API
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('League Table Data:', response);
      return response.json();
    },
    refetchOnWindowFocus: false // Prevent refetching on window focus
  });

  return { isLoading, error, data };
};

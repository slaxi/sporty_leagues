import { useQuery } from '@tanstack/react-query';
import { TSeasonBadgeQuery } from './useLeagureTableQuery.types';

const baseUrl = import.meta.env.VITE_SEASON_BADGES_API_URL;
export const useSeasonBadgeQuery = (leagueId: string | null, options = {}): TSeasonBadgeQuery => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['seasonBadge', leagueId],
    staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
    queryFn: async () => {
      const response = await fetch(`${baseUrl}&id=${leagueId}`);
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const badgeData = await response.json();
      console.log('Season Badge Data:', badgeData, 'URL:', baseUrl);
      return badgeData;
    },
    enabled: !!leagueId,
    ...options,
    refetchOnWindowFocus: false // Prevent refetching on window focus
  });

  return { isLoading, error, data };
};

import { useParams } from 'react-router-dom';
import { useSeasonBadgeQuery } from '../../hooks/useSeasonBadgeQuery';
import Loader from '../components/loader/Loader';
import { Box, Button, Stack, Typography } from '@mui/material';
import FallbackRedirect from '../components/fallback-redirect/FallbackRedirect';
import BackgroundWrapper from '../components/background-wrapper/BackgroundWrapper';

const SeasonBadgePage = () => {
  const { leagueId } = useParams<{ leagueId: string }>();
  const { isLoading, error, data } = useSeasonBadgeQuery(leagueId || null);
  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  if (!data?.seasons || data.seasons.length === 0) {
    return (
      <BackgroundWrapper>
        <FallbackRedirect>
          <Typography variant="h5" gutterBottom marginTop={5}>
            No seasons found for this league
          </Typography>
          <Box sx={{ mt: 2, maxWidth: 200, minHeight: 200 }} />
        </FallbackRedirect>
      </BackgroundWrapper>
    );
  }

  const badge = data.seasons[0];

  return (
    <BackgroundWrapper>
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Official season badge for season {badge.strSeason}
        </Typography>
        <Box
          component="img"
          src={badge.strBadge}
          alt={`Badge for ${badge.strSeason}`}
          sx={{ mt: 2, maxWidth: 200, minHeight: 200 }}
        />
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
          <FallbackRedirect />
        </Stack>
      </Box>
    </BackgroundWrapper>
  );
};

export default SeasonBadgePage;

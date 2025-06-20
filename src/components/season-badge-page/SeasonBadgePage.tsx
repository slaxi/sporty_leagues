import { useNavigate, useParams } from 'react-router-dom';
import { useSeasonBadgeQuery } from '../../../hooks/useSeasonBadgeQuery';
import Loader from '../loader/Loader';
import { Box, Button, Stack, Typography } from '@mui/material';
import FallbackRedirect from '../fallback-redirect/FallbackRedirect';

const SeasonBadgePage = () => {
  const { leagueId } = useParams<{ leagueId: string }>();
  const { isLoading, error, data } = useSeasonBadgeQuery(leagueId || null);
  const navigate = useNavigate();
  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  if (!data?.seasons || data.seasons.length === 0)
    return (
      <div>
        {' '}
        <h2>No badge available for this season</h2> <FallbackRedirect />
      </div>
    );

  const badge = data.seasons[0];

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Official season badge for season {badge.strSeason}
      </Typography>
      <Box
        component="img"
        src={badge.strBadge}
        alt={`Badge for ${badge.strSeason}`}
        sx={{ mt: 2, maxWidth: 200 }}
      />
      <Stack mt={3}>
        <FallbackRedirect />
      </Stack>
    </Box>
  );
};

export default SeasonBadgePage;

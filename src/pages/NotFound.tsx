import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import BackgroundWrapper from '../components/background-wrapper/BackgroundWrapper';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <BackgroundWrapper>
      <Box sx={{ textAlign: 'center', mt: 10 }}>
        <Typography variant="h2" color="error" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          The page you are looking for does not exist or has been moved.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>
          Go to Home
        </Button>
      </Box>
    </BackgroundWrapper>
  );
};

export default NotFound;

import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

const FallbackRedirect = () => {
  const navigate = useNavigate();
  return (
    <Button variant="contained" color="primary" onClick={() => navigate('/')}>
      Back to main page
    </Button>
  );
};

export default FallbackRedirect;

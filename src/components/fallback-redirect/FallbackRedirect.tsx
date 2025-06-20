import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { TFallbackRedirectProps } from './FallbackRedirect.types';

const FallbackRedirect = ({ children }: TFallbackRedirectProps) => {
  const navigate = useNavigate();
  return (
    <>
      {children}
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Back to main page
      </Button>
    </>
  );
};

export default FallbackRedirect;

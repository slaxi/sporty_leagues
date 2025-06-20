import Box from '@mui/material/Box';
import { TBackgroundWrapper } from './BackgroundWrapper.types';
const sportsBackground =
  'url(https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=60)';

const BackgroundWrapper = ({ children }: TBackgroundWrapper) => (
  <Box
    sx={{
      minHeight: '100vh',
      minWidth: '100vw',
      width: '100vw',
      height: '100vh',
      background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), ${sportsBackground}`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      padding: { xs: '10px', md: '20px' },
      overflow: 'auto'
    }}
  >
    {children}
  </Box>
);

export default BackgroundWrapper;

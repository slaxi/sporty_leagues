import React from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import LeagueTable from '../components/league-table/LeagueTable';
import Loader from '../components/loader/Loader';
import Title from '../components/title/Title';
import SearchField from '../components/filters/Filters';
import MainContent from '../components/main-content/MainContent';

const sportsBackground = 'url(https://images.unsplash.com/photo-1517649763962-0c623066013b)'; // URL slike za pozadinu

const HomePage = () => {
  return (
    <main>
      <Box
        sx={{
          minHeight: '100vh',
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), ${sportsBackground}`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '20px'
        }}
      >
        <Title />
        <MainContent />
      </Box>
    </main>
  );
};

export default HomePage;

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import React from 'react';

const leagues = [
  { league: 'Premier League', sport: 'Football', altLeague: 'Championship' },
  { league: 'NBA', sport: 'Basketball', altLeague: 'EuroLeague' },
  { league: 'ATP', sport: 'Tennis', altLeague: 'WTA' }
];

const LeagueTable = () => {
  return (
    <section>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          width: { xs: '100%', md: '80%' },
          margin: '0 auto'
        }}
      >
        <Table aria-label="League Table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>League</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Sport</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Alternative League</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leagues.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.league}</TableCell>
                <TableCell>{row.sport}</TableCell>
                <TableCell>{row.altLeague}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default LeagueTable;

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import React from 'react';
import { ILeagueTable } from './LeagueTable.types';

const LeagueTable = ({ leaguesData }: { leaguesData: ILeagueTable[] }) => {
  return (
    <section>
      <Box
        sx={{
          minHeight: '400px', // Rezerviše prostor za tabelu ili loader
          backgroundColor: 'rgba(0, 0, 0, 0.05)', // Svetlosiva pozadina za konzistentnost
          borderRadius: '8px', // Zaobljene ivice
          overflow: 'hidden', // Sprečava skakanje sadržaja
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            width: { xs: '100%', md: '80%' },
            margin: '0 auto',
            minHeight: '400px'
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
              {leaguesData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.strLeague}</TableCell>
                  <TableCell>{row.strSport}</TableCell>
                  <TableCell>{row.strLeagueAlternate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </section>
  );
};

export default LeagueTable;

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
import { TLeagueTableProps } from './LeagueTable.types';

const LeagueTable = ({ leagues, onLeagueClick }: TLeagueTableProps) => {
  return (
    <section>
      <Box
        sx={{
          minHeight: '400px',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          borderRadius: '8px',
          overflow: 'hidden',
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
            <TableHead sx={{ backgroundColor: 'teal', color: 'white' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: 'inherit' }}>League</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'inherit' }}>Sport</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'inherit' }}>
                  Alternative League
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leagues.map((row, index) => (
                <TableRow key={index}>
                  <TableCell onClick={() => onLeagueClick && onLeagueClick(row.idLeague)}>
                    {row.strLeague}
                  </TableCell>
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

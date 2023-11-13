import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  hora: number,
  piso11: boolean,
  patio: boolean,
  piso10: boolean,
) {
  return { hora, piso11, patio, piso10};
}
/*
  piso11 = 9 12
  piso10 = 11 a 16
  patio = 13 a 18
*/

const pisos = {
  piso11: [9, 10, 11, 12],
  piso10: [11, 12, 13, 14, 15, 16],
  patio: [13, 14, 15, 16, 17, 18]
}

function getRows(){
  return Array(10).fill("").map((e, i) => {
    return createData(i + 9, pisos.piso11.includes(i + 9), pisos.patio.includes(i + 9), pisos.piso10.includes(i + 9) )
  })
}

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Horarios</TableCell>
            <TableCell align="right">PATIO</TableCell>
            <TableCell align="right">PISO 9 Y 10 LABS</TableCell>
            <TableCell align="right">PISO VIDEOJUEGOS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getRows().map((row) => (
            <TableRow
              key={row.hora}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.hora}
              </TableCell>
              <TableCell align="right" sx={{
                backgroundColor: row.piso11? 'blue': 'white', border: "1px solid white"
              }}>{row.piso11?"ok google":" "}</TableCell>
              <TableCell align="right"sx={{
                backgroundColor: row.patio? 'blue': 'white', border: "1px solid white"
              }}>{row.patio?"ok google":" "}</TableCell>
              <TableCell align="right"sx={{
                backgroundColor: row.piso10? 'blue': 'white', border: "1px solid white"
              }}>{row.piso10?"ok google":" "}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
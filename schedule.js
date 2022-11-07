import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReplyIcon from '@mui/icons-material/Reply';
import Item from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import './schedule.css';

function createData(time, flight, places, gate, info) {
  return { time, flight, places, gate, info };
}

const rows = [
  createData('03:25', 'ENT 1271', 'Kos', '25', 'Delayed'),
  createData('04:05', '6E 316', 'Guwahati', '26', 'Gateclosed'),
  createData('05:00', '6E 358', 'Impal', '01', 'Final Call'),
  createData('08:47', 'WS 1505', 'Nepal', '05', 'Boarding:08:30'),
  createData('09:37', 'LO 361', 'New York', '30', 'Final Call'),
  createData('10:00', 'LO 550', 'Chennai', '20', 'Delayed'),
  createData('13:27', '7E 008', 'Banglore', '32', 'Boarding:13:15'),
  createData('17:00', '6E 009', 'Delhi', '06', 'Delayed'),
  createData('18:15', '7E 153', 'Mumbai', '36', 'Final Call'),
  createData('19:20', '8E 650', 'Kolkata', '40', 'Final Call'),
  createData('22:37', '7E 730', 'Dubai', '19', 'Delayed'),
  createData('24:00', 'ENT 1735', 'Turki', '24', 'Boarding:23:45')
];

export default function BasicTable() {
  return (
    <div>
      <Stack direction="row" spacing={0} className="space">
          <Item className="aa"><button className="button"><ReplyIcon/></button></Item>
          <Item className="bb"><h1 className="header">Flight Schedule</h1></Item>
      </Stack>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className="cl"><h2>Time</h2></TableCell>
            <TableCell align="center" className="cl"><h2>Flight</h2></TableCell>
            <TableCell align="center" className="cl"><h2>Places</h2></TableCell>
            <TableCell align="center" className="cl"><h2>Gate</h2></TableCell>
            <TableCell align="center" className="cl"><h2>Info</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0} }}
            >
              <TableCell component="th" scope="row" align="center" className="al">
                {row.time}
              </TableCell>
              <TableCell align="center" className="al">{row.flight}</TableCell>
              <TableCell align="center" className="al">{row.places}</TableCell>
              <TableCell align="center" className="al">{row.gate}</TableCell>
              <TableCell align="center" className="al">{row.info}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const MedalBoard = () => {
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>국가명</TableCell>
          <TableCell align="right">금메달</TableCell>
          <TableCell align="right">은메달</TableCell>
          <TableCell align="right">동메달</TableCell>
          <TableCell align="right">액션</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((rows) => (
          <TableRow
            key={rows.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {rows.country}
            </TableCell>
            <TableCell align="right">{rows.gold}</TableCell>
            <TableCell align="right">{rows.silver}</TableCell>
            <TableCell align="right">{rows.copper}</TableCell>
            <TableCell align="right">
              <button onClick={() => deleteMedalInfo(rows.id)}>삭제</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>;
};

export default MedalBoard;

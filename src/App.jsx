import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import UserForm from "./UserForm";
const App = () => {
  //createData는 데이터를 받아 객체로 반환
  const [rows, setRows] = useState([
    {
      id: 1,
      country: "한국",
      gold: 10,
      silver: 5,
      copper: 3,
    },
  ]);
  const [country, setCountry] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [copperMedal, setCopperMedal] = useState(0);
  const addMedalInfo = (e) => {
    e.preventDefault();
    const checkCountry = rows.some((row) => row.country === country);
    if (checkCountry) {
      alert("이미 존재하는 국가입니다");
      return;
    }
    const newRow = {
      id: Date.now(),
      country,
      gold: goldMedal,
      silver: silverMedal,
      copper: copperMedal,
    };
    setRows([...rows, newRow]);
    console.log(rows);
  };
  const deleteMedalInfo = (id) => {
    setRows(rows.filter((element) => element.id !== id));
  };

  const updateMedalInfo = (e) => {
    e.preventDefault();
    const checkCountry = rows.some((row) => row.country === country);
    if (!checkCountry) {
      alert("현재 존재하지 않는 국가입니다");
      return;
    }
    const updateMedal = {
      gold: goldMedal,
      silver: silverMedal,
      copper: copperMedal,
    };
    const updateRows = rows.map(
      (row) =>
        row.country === country
          ? { ...row, ...updateMedal } // 조건에 맞으면 업데이트된 값 반환
          : row // 조건에 맞지 않으면 기존 값 반환
    );
    setRows(updateRows);
  };
  return (
    <div className="contentContainer">
      <h1>2024 올림픽 메달 집계</h1>
      <form className="formContent">
        <div className="inputField">
          <label>국가명</label>
          <input
            type="text"
            onChange={(e) => setCountry(e.target.value)}
          ></input>
        </div>
        <div className="inputField">
          <label>금메달</label>
          <input
            type="number"
            value={goldMedal}
            onChange={(e) => setGoldMedal(Number(e.target.value))}
          ></input>
        </div>
        <div className="inputField">
          <label>은메달</label>
          <input
            type="number"
            value={silverMedal}
            onChange={(e) => setSilverMedal(Number(e.target.value))}
          ></input>
        </div>
        <div className="inputField">
          <label>동메달</label>
          <input
            type="number"
            value={copperMedal}
            onChange={(e) => setCopperMedal(Number(e.target.value))}
          ></input>
        </div>

        <div className="btnContainer">
          <Button
            variant="contained"
            type="submit"
            value={country}
            onClick={addMedalInfo}
          >
            추가
          </Button>
          <Button variant="contained" onClick={updateMedalInfo}>
            업데이트
          </Button>
        </div>
      </form>
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
      </TableContainer>
    </div>
  );
};

export default App;

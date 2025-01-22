import { useState } from "react";
import "./App.css";
import MedalList from "./MedalList.jsx";
const App = () => {
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
    const updateRows = rows.map((row) =>
      row.country === country ? { ...row, ...updateMedal } : row
    );
    setRows(updateRows);
  };
  return (
    <div className="contentContainer">
      <h1>2024 올림픽 메달 집계</h1>
      <form className="formContent">
        <div className="inputContainer">
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
        </div>

        <div className="btnContainer">
          <button type="submit" value={country} onClick={addMedalInfo}>
            추가
          </button>
          <button onClick={updateMedalInfo}>업데이트</button>
        </div>
      </form>
      <MedalList rows={rows} deleteMedalInfo={deleteMedalInfo} />
    </div>
  );
};

export default App;

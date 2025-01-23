import { useState } from "react";
import "./App.css";
import MedalList from "./components/MedalList.jsx";
import MedalForm from "./components/MedalForm.jsx";
import MedalSort from "./components/MedalSort.jsx";
import MedalSaveLoad from "./components/MedalSaveLoad.jsx";
const App = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      country: "한국",
      gold: 10,
      silver: 5,
      copper: 3,
    },
    {
      id: 2,
      country: "미국",
      gold: 30,
      silver: 10,
      copper: 10,
    },
    {
      id: 3,
      country: "일본",
      gold: 6,
      silver: 5,
      copper: 3,
    },
  ]);

  const deleteMedalInfo = (id) => {
    setRows(rows.filter((element) => element.id !== id));
  };

  return (
    <div className="contentContainer">
      <div className="headerContainer">
        <h1>2024 올림픽 메달 집계</h1>
        <MedalSaveLoad rows={rows} setRows={setRows} />
      </div>
      <MedalForm rows={rows} setRows={setRows} />
      <MedalSort rows={rows} setRows={setRows} />
      <MedalList rows={rows} deleteMedalInfo={deleteMedalInfo} />
    </div>
  );
};

export default App;

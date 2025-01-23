import { useState } from "react";
import "./App.css";
import MedalList from "./MedalList.jsx";
import MedalForm from "./MedalForm.jsx";
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

  const deleteMedalInfo = (id) => {
    setRows(rows.filter((element) => element.id !== id));
  };

  return (
    <div className="contentContainer">
      <h1>2024 올림픽 메달 집계</h1>

      <MedalForm rows={rows} setRows={setRows} />
      <MedalList rows={rows} deleteMedalInfo={deleteMedalInfo} />
    </div>
  );
};

export default App;

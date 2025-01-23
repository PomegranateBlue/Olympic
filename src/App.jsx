import { useState } from "react";
import "./App.css";
import MedalList from "./components/MedalList.jsx";
import MedalForm from "./components/MedalForm.jsx";
import MedalSort from "./components/MedalSort.jsx";
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
  console.log(rows);

  const deleteMedalInfo = (id) => {
    setRows(rows.filter((element) => element.id !== id));
  };

  return (
    <div className="contentContainer">
      <h1>2024 올림픽 메달 집계</h1>
      <MedalSort />
      <MedalForm rows={rows} setRows={setRows} />
      <MedalList rows={rows} deleteMedalInfo={deleteMedalInfo} />
    </div>
  );
};

export default App;

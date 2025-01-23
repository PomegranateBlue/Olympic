import { useState } from "react";
import "./App.css";
import MedalList from "./components/MedalList.jsx";
import MedalForm from "./components/MedalForm.jsx";
import MedalSort from "./components/MedalSort.jsx";
import MedalSaveLoad from "./components/MedalSaveLoad.jsx";
const App = () => {
  const [rows, setRows] = useState([]);

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
      {rows.length === 0 ? (
        <p className="emptyMessage">현재 기록된 데이터가 없습니다</p>
      ) : (
        <MedalList rows={rows} deleteMedalInfo={deleteMedalInfo} />
      )}
    </div>
  );
};

export default App;

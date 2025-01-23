const MedalSaveLoad = ({ rows, setRows }) => {
  const saveData = () => {
    localStorage.setItem("Saved", JSON.stringify(rows));

    console.log("Saved!");
  };

  const loadData = () => {
    const loadData = JSON.parse(localStorage.getItem("Saved"));
    setRows([...loadData]);
  };

  return (
    <div className="localStorageContainer">
      <button onClick={saveData}>저장하기</button>
      <button onClick={loadData}>불러오기</button>
    </div>
  );
};

export default MedalSaveLoad;

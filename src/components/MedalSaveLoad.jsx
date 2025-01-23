import "../styles/MedalSaveLoad.css";

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
      <button onClick={saveData} title="데이터는 1개만 저장합니다">
        저장하기
      </button>

      <button onClick={loadData} title="마지막에 저장된 기록을 불러옵니다">
        불러오기
      </button>
    </div>
  );
};

export default MedalSaveLoad;

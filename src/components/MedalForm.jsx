import { useState } from "react";

const MedalForm = ({ rows, setRows }) => {
  const [country, setCountry] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [copperMedal, setCopperMedal] = useState(0);

  const addMedalInfo = (e) => {
    e.preventDefault();
    const checkCountry = rows.some((row) => row.country === country);
    if (!country) {
      alert("국가를 입력하세요");
      return;
    }
    if (checkCountry) {
      alert("이미 존재하는 국가입니다");
      return;
    }
    const newRow = {
      id: Date.now(),
      country: country,
      gold: goldMedal,
      silver: silverMedal,
      copper: copperMedal,
    };
    setRows([...rows, newRow]);
    setCountry("");
    setGoldMedal(0);
    setSilverMedal(0);
    setCopperMedal(0);
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
    <form className="formContent">
      <div className="inputContainer">
        <div className="inputField">
          <label>국가명</label>
          <input
            placeholder="국가를 입력하세요"
            type="text"
            value={country}
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
  );
};

export default MedalForm;

import { useEffect } from "react";

const UserForm = () => {
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
};

export default UserForm;

import { useState } from "react";
import "../styles/MedalSort.css";
const MedalSort = ({ rows, setRows }) => {
  //rows에서 gold,silver,copper,id를 통해 정렬
  //기본 정렬은 id순
  //금메달 갯수와
  //총 메달 수의 합으로 정렬
  const sortByValue = (e) => {
    const selectOption = e.target.value;
    switch (selectOption) {
      case "id":
        console.log("기본 정렬");
        // sorted.sort((a, b) => a.id - b.id);
        setRows([...rows].sort((a, b) => a.id - b.id));
        break;
      case "totalMedal":
        console.log("총 메달 수");
        setRows(
          [...rows].sort(
            (a, b) =>
              b.gold + b.silver + b.copper - (a.gold + a.silver + a.copper)
          )
        );
        break;
      case "goldMedal":
        console.log("금메달 순");
        setRows([...rows].sort((a, b) => b.gold - a.gold));
        break;
    }
  };

  return (
    <div className="sortContainer">
      <select className="options" onChange={sortByValue}>
        <option value="id">기본 정렬</option>
        <option value="totalMedal">총 메달 수</option>
        <option value="goldMedal">금메달 수</option>
      </select>
    </div>
  );
};

export default MedalSort;

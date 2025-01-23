import { useState } from "react";
import "../styles/MedalSort.css";
const MedalSort = ({ rows, setRows }) => {
  //rows에서 gold,silver,copper,id를 통해 정렬
  //기본 정렬은 id순
  //금메달 갯수와
  //총 메달 수의 합으로 정렬
  return (
    <div className="sortContainer">
      <label>정렬 기준</label>
      <select className="options">
        <option value="Default">기본 정렬</option>
        <option value="Total Medal">총 메달 수</option>
        <option value="Gold Medal">금메달 수</option>
      </select>
    </div>
  );
};

export default MedalSort;

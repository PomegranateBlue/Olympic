import React, { useState } from "react";
import "./App.css";
// import UserForm from "./UserForm";
const App = () => {
  return (
    <div className="backgroundContainer">
      <div className="contentContainer">
        <h1>2024 올림픽 메달 집계</h1>
        <form className="formContent">
          <div className="inputField">
            <label>국가명</label>
            <input type="text"></input>
          </div>
          <div className="inputField">
            <label>금메달</label>
            <input type="number"></input>
          </div>
          <div className="inputField">
            <label>은메달</label>
            <input type="number"></input>
          </div>
          <div className="inputField">
            <label>동메달</label>
            <input type="number"></input>
          </div>

          <div className="btnContainer">
            <button>추가</button>
            <button>업데이트</button>
          </div>
        </form>
        <div className="medalList">
          <table>
            <thead>
              <tr>
                <th>국가명</th>
                <th>금메달</th>
                <th>은메달</th>
                <th>동메달</th>
                <th>액션</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>국가</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>
                  <button>삭제</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;

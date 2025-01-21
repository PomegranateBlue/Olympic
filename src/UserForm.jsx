import React, { useState } from "react";
import "./UserForm.css";
const UserForm = () => {
  return (
    <div className="inputContainer">
      <form className="inputContent">
        <div className="inputField">
          <label>국가명</label>
          <input type="text"></input>
        </div>
        <div>
          <label>금메달</label>
          <input type="number"></input>
        </div>
        <div>
          <label>은메달</label>
          <input type="number"></input>
        </div>
        <div>
          <label>동메달</label>
          <input type="number"></input>
        </div>
      </form>
    </div>
  );
};

export default UserForm;

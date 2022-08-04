import React, { useState} from "react";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import "./Task.css";
import { NavLink } from "react-router-dom";

//利用したNPM
//npm install @mui/material @emotion/react @emotion/styled --force
//npm install @mui/icons-material

//api
import { fetchTrainings } from '../apis/trainings'; 

  fetchTrainings()
  .then((data) =>
    console.log(data)
  )





function Task() {
  const url = "";

  const [trainingSelect, setTrainingSelect] = useState("");
  const [trainingInput, setTrainingInput] = useState("");

  //ここにフィルタリングの機能を追加する　dbができた後、、

  const trainingSelectHandler = (e) => {
    setTrainingSelect(e.target.value);
  };
  const trainingInputHandler = (e) => {
    setTrainingInput(e.target.value);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ trainingSelect }, { trainingInput }),
    })
      .then((res) => {
        console.log("送信成功！！");
        console.log(res);
      })
      .catch((err) => {
        console.log("送信失敗！！");
        console.log(err);
      });
  };

  const jogValue = 80;
  const shutValue = 150;
  const pushUpValue = 50;

  //dbができたら上記の値を使ってカロリー計算をする

  return (
    <div className="training-container">
      <div className="training-head">
        <DirectionsRunIcon />
        <h3 className>実行する種目と時間を指定してください</h3>
      </div>

      <form
        className="training-form"
        onSubmit={formSubmitHandler}
        method="POST"
      >
        <select
          name="menu"
          className="training-selector"
          onChange={trainingSelectHandler}
          value={trainingSelect}
        >
          <optgroup>
            <option value="ジョギング">ジョギング</option>
            <option value="時速５km以上で歩く">時速５km以上で歩く</option>
            <option value="腕立て伏せをする">腕立て</option>
            <option value="シャトルラン">シャトルラン</option>
          </optgroup>
        </select>

        <input
          type="text"
          className="training-input"
          placeholder="時間指定 (分)"
          value={trainingInput}
          onChange={trainingInputHandler}
        />

        <button type="submit" className="training-submit-btn">
          タスクを決定
        </button>
      </form>
      <div className="training-list">
        <div className="training-card-wrapper">
          <p className="task-list">タスク一覧</p>
          
          <NavLink to="/loading" className="training-card">
            <DirectionsRunIcon className="card-icon" />
            <p className="training-name">ジョギング</p>
            </NavLink>
          <div className="training-calorie">
            <p>１分あたり: {jogValue}kcal消費</p>
          </div>
        </div>

        <div className="training-card-wrapper">
        <NavLink to="/loading" className="training-card">
            <DirectionsRunIcon className="card-icon" />
            <p className="training-name">シャトルラン</p>
            </NavLink>
          <div className="training-calorie">
            <p>１分あたり: {shutValue}kcal消費</p>
          </div>
        </div>

        <div className="training-card-wrapper">
        <NavLink to="/loading" className="training-card">
            <DirectionsRunIcon className="card-icon" />
            <p className="training-name">腕立て</p>
            </NavLink>
          <div className="training-calorie" id="training-calorie-id">
            <p>１分あたり: {pushUpValue}kcal消費</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;

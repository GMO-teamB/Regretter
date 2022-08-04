import React, { useState} from "react";
import "./Task.css";
import Loading from "./Loading";
import bossImage from "./images/boss.gif";
import { CardMedia } from "@mui/material";

//api
import { fetchTrainings } from '../apis/trainings'; 

  fetchTrainings()
  .then((data) =>
    console.log(data)
  )





function Task() {
  const [trainingFilter, setTrainingFilter] = useState("");
  const [trainingTime, setTrainingTime] = useState('');
  const [tempTrainingTime, setTempTrainingTime] = useState('');
  const [isError, setIsError] = useState(false);
  const [trainingName, setTrainingName] = useState("");

  //ここにフィルタリングの機能を追加する　dbができた後、、

  const jogValue = 80;
  const shutValue = 150;
  const pushUpValue = 50;
  const [isTraining, setIsTraining] = useState(false);

  const sanitizedNumSet = (text)=>{
    console.log(text)
    if(text === ''){
      setTempTrainingTime('')
    }
    let tex = text.trim()
    console.log(tex)
    tex = tex.replace('.','')
    tex = tex.replace('-','')
    tex = tex.replace(/^0+/,'')
    setTempTrainingTime(tex)
  }

  const sendHandler = () => {
    if (tempTrainingTime !== "" && trainingFilter !== "") {
      console.log("1");
      setTrainingTime(tempTrainingTime);
      setTempTrainingTime("");
      setIsError(false)
    }else{
      console.log("2");
      setIsError(true)
    }
  };

  return isTraining ? (
    <Loading name={trainingName} time={trainingTime} />
  ) : (
    <div className="training-container">
      {" "}
      {trainingFilter === "" || trainingTime === "" ? (
        <div>
          <div className="training-head">
            <CardMedia component='img'image={bossImage} style={{width:'40%'}}/>
            <h3>カテゴリーと時間を選ぶわん!</h3>
          </div>
          <div className="training-form">
            <select
              name="menu"
              className={`training-selector ${
                isError && trainingFilter === "" ? "error" : ""
              }`}
              onChange={(e) => setTrainingFilter(e.target.value)}
              value={trainingFilter}
            >
              <optgroup>
                <option
                  className="option-text"
                  value=''
                  selected
                  disabled
                >
                  カテゴリーを選択
                </option>
                <option className="option-text" value="有酸素運動">
                  有酸素運動
                </option>
                <option className="option-text" value="無酸素運動">
                  無酸素運動
                </option>
              </optgroup>
            </select>
            {isError && trainingFilter === "" && (
              <p className="error-msg">選択してください</p>
            )}

            <input
              type="number"
              className={`training-input ${
                isError && tempTrainingTime === "" ? "error" : ""
              }`}
              placeholder="数値 (分)"
              value={tempTrainingTime}
              onChange={(e) => {console.log(e.target.value);sanitizedNumSet(e.target.value)}}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  console.log("Enter!");
                  sendHandler();
                }
              }}
            />
            {isError && tempTrainingTime === "" && (
              <p className="error-msg">＊入力してください</p>
            )}
            <button
              className="training-submit-btn"
              onClick={() => sendHandler()}
            >
              決定
            </button>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center" }} className="training-list-wrapper">
          <button
            className="back-btn"
            onClick={() => {
              setTrainingFilter("");
              setTrainingTime("");
              setTempTrainingTime("");
            }}
          >
            再入力
          </button>
          <div className="training-list">
            <p className="task-list">タスク一覧</p>
            <div className="training-card-wrapper">
              <div
                className="training-card"
                onClick={() => {
                  setIsTraining(true);
                  setTrainingName("ジョギング");
                }}
              >
                <p className="training-name">ジョギング</p>
              </div>
              <div className="training-calorie">
                <p>１分あたり: {jogValue}kcal消費</p>
              </div>
            </div>

            <div className="training-card-wrapper">
              <div
                className="training-card"
                onClick={() => {
                  setIsTraining(true);
                  setTrainingName("シャトルラン");
                }}
              >
                <p className="training-name">シャトルラン</p>
              </div>
              <div className="training-calorie">
                <p>１分あたり: {shutValue}kcal消費</p>
              </div>
            </div>

            <div className="training-card-wrapper">
              <div
                className="training-card"
                onClick={() => {
                  setIsTraining(true);
                  setTrainingName("腕立て");
                }}
              >
                <p className="training-name">腕立て</p>
              </div>
              <div className="training-calorie" id="training-calorie-id">
                <p>１分あたり: {pushUpValue}kcal消費</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Task;

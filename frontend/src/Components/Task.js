import React, { useState } from "react";
import "./Task.css";
import Loading from "./Loading";
import bossImage from "./images/boss.gif";
import { CardMedia } from "@mui/material";

//api
import { trainingsIndex } from "../url/index";

function Task() {
  const [trainingFilter, setTrainingFilter] = useState("");
  const [trainingTime, setTrainingTime] = useState("");
  const [tempTrainingTime, setTempTrainingTime] = useState("");
  const [isError, setIsError] = useState(false);
  const [trainingName, setTrainingName] = useState("");

  const [isTraining, setIsTraining] = useState(false);
  const [trainings, setTrainings] = useState([]);
  const [caloriePerMin, setCaloriePerMin] = useState(0);

  const filteredHandler = (num) => {
    const filteredTraining = trainings.filter(
      (training) => training.category_id === num
    );
    setTrainings(filteredTraining);
  };

  const sanitizedNumSet = (text) => {
    if (text === "") {
      setTempTrainingTime("");
    }
    let tex = text.trim();
    tex = tex.replace(".", "");
    tex = tex.replace("-", "");
    tex = tex.replace(/^0+/, "");
    setTempTrainingTime(tex);
  };

  const sendHandler = (e) => {
    e.preventDefault();
    if (tempTrainingTime !== "" && trainingFilter !== "") {
      setTrainingTime(tempTrainingTime);
      const fetchData = async () => {
        try {
          const response = await fetch(trainingsIndex);
          const trainingData = await response.json();
          setTrainings(trainingData);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();

      const changeToNum = (str) => {
        if (str === "有酸素運動") {
          return 1;
        } else {
          return 2;
        }
      };

      const num = changeToNum(trainingFilter);
      filteredHandler(num);

      setTempTrainingTime("");
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return isTraining ? (
    <Loading
      name={trainingName}
      time={trainingTime}
      caloriePerMin={caloriePerMin}
    />
  ) : (
    <div className="training-container">
      {" "}
      {trainingFilter === "" || trainingTime === "" ? (
        <div>
          <div className="training-head">
            <CardMedia
              component="img"
              image={bossImage}
              style={{ width: "40%" }}
            />
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
                <option className="option-text" value="" selected disabled>
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
              onChange={(e) => {
                sanitizedNumSet(e.target.value);
              }}
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
              type="submit"
              className="training-submit-btn"
              onClick={sendHandler}
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

            {trainings.map((training, index) => {
              return (
                <div className="training-card-wrapper" key={index}>
                  <div
                    className="training-card"
                    onClick={() => {
                      setIsTraining(true);
                      setTrainingName(training.name);
                    }}
                  >
                    <p className="training-name">{training.name}</p>
                  </div>
                  <div className="training-calorie">
                    <p>１分あたり: {training.calorie}kcal消費</p>
                  </div>
                </div>
              );
            })}
            {trainingFilter === "有酸素運動" ? (
              <div>
                <div className="training-card-wrapper">
                  <div
                    className="training-card"
                    onClick={() => {
                      setIsTraining(true);
                      setTrainingName("ジョギング");
                      setCaloriePerMin(8);
                    }}
                  >
                    <p className="training-name">ジョギング</p>
                  </div>
                  <div className="training-calorie">
                    <p>１分あたり: 8kcal消費</p>
                  </div>
                </div>
                <div className="training-card-wrapper">
                  <div
                    className="training-card"
                    onClick={() => {
                      setIsTraining(true);
                      setTrainingName("サイクリング");
                      setCaloriePerMin(7);
                    }}
                  >
                    <p className="training-name">サイクリング</p>
                  </div>
                  <div className="training-calorie">
                    <p>１分あたり: 7kcal消費</p>
                  </div>
                </div>
                <div className="training-card-wrapper">
                  <div
                    className="training-card"
                    onClick={() => {
                      setIsTraining(true);
                      setTrainingName("水泳");
                      setCaloriePerMin(10);
                    }}
                  >
                    <p className="training-name">水泳</p>
                  </div>
                  <div className="training-calorie">
                    <p>１分あたり: 10kcal消費</p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="training-card-wrapper">
                  <div
                    className="training-card"
                    onClick={() => {
                      setIsTraining(true);
                      setTrainingName("腹筋");
                      setCaloriePerMin(15);
                    }}
                  >
                    <p className="training-name">腹筋</p>
                  </div>
                  <div className="training-calorie">
                    <p>１分あたり: 15kcal消費</p>
                  </div>
                </div>
                <div className="training-card-wrapper">
                  <div
                    className="training-card"
                    onClick={() => {
                      setIsTraining(true);
                      setTrainingName("スクワット");
                      setCaloriePerMin(1000);
                    }}
                  >
                    <p className="training-name">スクワット</p>
                  </div>
                  <div className="training-calorie">
                    <p>1分あたり: 1000kcal消費</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Task;

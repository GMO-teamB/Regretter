import React, { useState } from "react";
import "./Task.css";
import Loading from "./Loading";

function Task() {
  const [trainingFilter, setTrainingFilter] = useState("");
  const [trainingTime, setTrainingTime] = useState("");
  const [tempTrainingTime, setTempTrainingTime] = useState("");
  const [isError, setIsError] = useState(false);
  const [trainingName, setTrainingName] = useState("");

  //ここにフィルタリングの機能を追加する　dbができた後、、

  const jogValue = 80;
  const shutValue = 150;
  const pushUpValue = 50;
  const [isTraining, setIsTraining] = useState(false);

  const sendHandler = () => {
    if (tempTrainingTime !== "" && trainingFilter !== "") {
      console.log("1");
      setTrainingTime(tempTrainingTime);
      setTempTrainingTime("");
    } else {
      console.log("2");
      setIsError(true);
    }
  };

  //dbができたら上記の値を使ってカロリー計算をする

  return isTraining ? (
    <Loading name={trainingName} time={trainingTime} />
  ) : (
    <div className="training-container">
      {" "}
      {trainingFilter === "" || trainingTime === "" ? (
        <div>
          <div className="training-head">
            <svg
              className="dog-image"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="64px"
              height="64px"
            >
              <radialGradient
                id="qh_otI6FQ1RWaGlhiXr~Aa"
                cx="31.319"
                cy="28.009"
                r="92.175"
                gradientTransform="matrix(1 0 0 -1 0 66)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#afeeff" />
                <stop offset=".193" stop-color="#bbf1ff" />
                <stop offset=".703" stop-color="#d7f8ff" />
                <stop offset="1" stop-color="#e1faff" />
              </radialGradient>
              <path
                fill="url(#qh_otI6FQ1RWaGlhiXr~Aa)"
                d="M57,18c0,1.1,0.9,2,2,2h1.5c1.6,0,2.85,1.52,2.41,3.18c-0.3,1.1-1.36,1.82-2.5,1.82H47	c-1.1,0-2,0.9-2,2s-0.5,9-0.5,9c-0.83,0-1.5,0.67-1.5,1.5S41.4,44,41.4,44l2.6,1h15c1.66,0,3,1.34,3,3s-1.34,3-3,3h-2.5	c-1.38,0-2.5,1.12-2.5,2.5s1.12,2.5,2.5,2.5H60c1.66,0,3,1.34,3,3s-1.34,3-3,3H6c-1.66,0-3-1.34-3-3s1.34-3,3-3h1.5	c1.38,0,2.5-1.12,2.5-2.5S8.88,51,7.5,51H4c-1.66,0-3-1.34-3-3s1.34-3,3-3h11.5c1.38,0,2.5-1.12,2.5-2.5S16.88,39,15.5,39h-11	C3.12,39,2,37.88,2,36.5S3.12,34,4.5,34h12.01c-0.44-0.58-0.64-1.36-0.42-2.18c0.3-1.1,1.36-0.82,2.5-0.82L26,32V17.82	C25.68,17.93,25.35,18,25,18H3c-1.65,0-3-1.35-3-3s1.35-3,3-3h7.5c0.69,0,1.32-0.28,1.77-0.73C12.72,10.82,13,10.19,13,9.5	C13,8.12,11.88,7,10.5,7h-3C5.9,7,4.64,5.48,5.09,3.82C5.39,2.72,6.45,2,7.59,2H55.5c1.6,0,2.85,1.52,2.41,3.18	C57.61,6.28,56.55,7,55.41,7H51.5C50.67,7,50,7.67,50,8.5s0.67,1.5,1.5,1.5h9.37c1.45,0,2.79,0.97,3.07,2.4	C64.32,14.31,62.85,16,61,16h-2C57.9,16,57,16.9,57,18z"
              />
              <linearGradient
                id="qh_otI6FQ1RWaGlhiXr~Ab"
                x1="32"
                x2="32"
                y1="-14.872"
                y2="20.205"
                gradientTransform="matrix(1 0 0 -1 0 66)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#feaa53" />
                <stop offset=".612" stop-color="#ffcd49" />
                <stop offset="1" stop-color="#ffde44" />
              </linearGradient>
              <path
                fill="url(#qh_otI6FQ1RWaGlhiXr~Ab)"
                d="M32,8L32,8c10.493,0,19,8.507,19,19v28c0,1.657-1.343,3-3,3H16c-1.657,0-3-1.343-3-3V27	C13,16.507,21.507,8,32,8z"
              />
              <linearGradient
                id="qh_otI6FQ1RWaGlhiXr~Ac"
                x1="32"
                x2="32"
                y1="-14.872"
                y2="20.205"
                gradientTransform="matrix(1 0 0 -1 0 66)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#feaa53" />
                <stop offset=".612" stop-color="#ffcd49" />
                <stop offset="1" stop-color="#ffde44" />
              </linearGradient>
              <path
                fill="url(#qh_otI6FQ1RWaGlhiXr~Ac)"
                d="M32,6C18.193,6,7,17.193,7,31v2v2.5c0,1.933,1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5V33h36v2.5	c0,1.933,1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5V33v-2C57,17.193,45.807,6,32,6z"
              />
              <linearGradient
                id="qh_otI6FQ1RWaGlhiXr~Ad"
                x1="41.344"
                x2="41.344"
                y1="13.894"
                y2="76.452"
                gradientTransform="matrix(1 0 0 -1 0 66)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".122" stop-color="#5e6d7b" />
                <stop offset=".191" stop-color="#5d6b79" />
                <stop offset="1" stop-color="#515c69" />
              </linearGradient>
              <path
                fill="url(#qh_otI6FQ1RWaGlhiXr~Ad)"
                d="M45.786,24.5c0,0.771,3.096,1.511,2.893,2.196C47.736,29.771,44.886,32,41.5,32	c-4.146,0-7.5-3.354-7.5-7.5s3.354-7.5,7.5-7.5c0.482,0,0.964,0.043,1.414,0.139L45.786,24.5z"
              />
              <linearGradient
                id="qh_otI6FQ1RWaGlhiXr~Ae"
                x1="22.346"
                x2="22.346"
                y1="13.894"
                y2="76.452"
                gradientTransform="matrix(1 0 0 -1 0 66)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".122" stop-color="#5e6d7b" />
                <stop offset=".191" stop-color="#5d6b79" />
                <stop offset="1" stop-color="#515c69" />
              </linearGradient>
              <path
                fill="url(#qh_otI6FQ1RWaGlhiXr~Ae)"
                d="M27.857,24.5c0,0.771,2.025,1.511,1.821,2.196C28.736,29.771,25.886,32,22.5,32	c-4.146,0-7.5-3.354-7.5-7.5s3.354-7.5,7.5-7.5c0.482,0,0.964,0.043,1.414,0.139C23.914,17.139,27.857,20.836,27.857,24.5z"
              />
              <path
                fill="#596673"
                d="M32,43.058c-2.721,0-5.198-1.263-6.798-3.464c-0.324-0.447-0.225-1.072,0.222-1.397	c0.449-0.325,1.072-0.225,1.397,0.222c1.218,1.678,3.105,2.64,5.179,2.64s3.961-0.962,5.179-2.64	c0.326-0.447,0.949-0.547,1.397-0.222c0.446,0.325,0.546,0.95,0.222,1.397C37.198,41.795,34.721,43.058,32,43.058z"
              />
              <path
                fill="#fff"
                d="M30,24.5c0,1.12-0.25,2.18-0.69,3.13c-1.1,0.82-2.66,1.16-4.13,1.16c-3.26,0-5.89-2.64-5.89-5.9	c0-2.82,1.98-5.17,4.62-5.75c0.19,0.04,0.38,0.08,0.56,0.13c0.04,0.01,0.08,0.02,0.12,0.03c0.12,0.03,0.23,0.07,0.34,0.11	c0.13,0.04,0.26,0.09,0.39,0.15c0.07,0.02,0.13,0.04,0.19,0.07c0.19,0.08,0.38,0.18,0.56,0.28c0.17,0.09,0.34,0.19,0.5,0.3	c0.07,0.04,0.14,0.08,0.2,0.13c0.17,0.12,0.34,0.24,0.5,0.38c0.18,0.15,0.36,0.31,0.53,0.48c0.35,0.33,0.66,0.71,0.92,1.11	c0.13,0.2,0.26,0.41,0.37,0.62c0.11,0.2,0.21,0.4,0.3,0.61c0.02,0.03,0.03,0.07,0.04,0.1c0.09,0.2,0.16,0.4,0.22,0.61	c0.01,0.01,0.01,0.02,0.01,0.03c0.06,0.18,0.11,0.36,0.15,0.55c0.02,0.08,0.04,0.17,0.06,0.26c0.04,0.22,0.07,0.44,0.09,0.67	C29.99,24.01,30,24.25,30,24.5z"
              />
              <path
                fill="#fff"
                d="M49,24.5c0,1.12-0.25,2.18-0.69,3.13c-1.1,0.82-2.66,1.16-4.13,1.16c-3.26,0-5.89-2.64-5.89-5.9	c0-2.82,1.98-5.17,4.62-5.75c0.19,0.04,0.38,0.08,0.56,0.13c0.04,0.01,0.08,0.02,0.12,0.03c0.12,0.03,0.23,0.07,0.34,0.11	c0.13,0.04,0.26,0.09,0.39,0.15c0.07,0.02,0.13,0.04,0.19,0.07c0.19,0.08,0.38,0.18,0.56,0.28c0.17,0.09,0.34,0.19,0.5,0.3	c0.07,0.04,0.14,0.08,0.2,0.13c0.17,0.12,0.34,0.24,0.5,0.38c0.18,0.15,0.36,0.31,0.53,0.48c0.35,0.33,0.66,0.71,0.92,1.11	c0.13,0.2,0.26,0.41,0.37,0.62c0.11,0.2,0.21,0.4,0.3,0.61c0.02,0.03,0.03,0.07,0.04,0.1c0.09,0.2,0.16,0.4,0.22,0.61	c0.01,0.01,0.01,0.02,0.01,0.03c0.06,0.18,0.11,0.36,0.15,0.55c0.02,0.08,0.04,0.17,0.06,0.26c0.04,0.22,0.07,0.44,0.09,0.67	C48.99,24.01,49,24.25,49,24.5z"
              />
              <linearGradient
                id="qh_otI6FQ1RWaGlhiXr~Af"
                x1="32"
                x2="32"
                y1="3.553"
                y2="86.964"
                gradientTransform="matrix(1 0 0 -1 0 66)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#feaa53" />
                <stop offset=".612" stop-color="#ffcd49" />
                <stop offset="1" stop-color="#ffde44" />
              </linearGradient>
              <path
                fill="url(#qh_otI6FQ1RWaGlhiXr~Af)"
                d="M33,27h-2c-6.075,0-11,4.925-11,11v4.751C20,45.098,21.902,47,24.249,47	c2.143,0,3.95-1.596,4.216-3.722L29,37h6l0.535,6.278C35.801,45.404,37.608,47,39.751,47C42.098,47,44,45.098,44,42.751V38	C44,31.925,39.075,27,33,27z"
              />
              <linearGradient
                id="qh_otI6FQ1RWaGlhiXr~Ag"
                x1="32"
                x2="32"
                y1="18.957"
                y2="43.981"
                gradientTransform="matrix(1 0 0 -1 0 66)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".122" stop-color="#5e6d7b" />
                <stop offset=".191" stop-color="#5d6b79" />
                <stop offset="1" stop-color="#515c69" />
              </linearGradient>
              <ellipse
                cx="32"
                cy="36"
                fill="url(#qh_otI6FQ1RWaGlhiXr~Ag)"
                rx="4"
                ry="3"
              />
              <linearGradient
                id="qh_otI6FQ1RWaGlhiXr~Ah"
                x1="19"
                x2="19"
                y1="5.377"
                y2="51.253"
                gradientTransform="matrix(1 0 0 -1 0 66)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#ffda76" />
                <stop offset=".335" stop-color="#ffe075" />
                <stop offset="1" stop-color="#ffe673" />
              </linearGradient>
              <path
                fill="url(#qh_otI6FQ1RWaGlhiXr~Ah)"
                d="M22.893,54H17.5c-0.828,0-1.5-0.672-1.5-1.5l0,0c0-0.828,0.672-1.5,1.5-1.5h0.393	c0.996,0,1.92-0.681,2.08-1.664C20.176,48.083,19.215,47,18,47h-5v4v3v1c0,1.657,1.343,3,3,3h7c1.215,0,2.177-1.083,1.973-2.336	C24.813,54.681,23.889,54,22.893,54z"
              />
            </svg>
            <h3>実行する種目と時間を指定してください</h3>
          </div>
          <div className="training-form">
            <select
              name="menu"
              className="training-selector"
              onChange={(e) => setTrainingFilter(e.target.value)}
              value={trainingFilter}
            >
              <optgroup>
                <option
                  className="option-text"
                  value=""
                  selected
                  disabled
                  hidden
                >
                  カテゴリー選択
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
              onChange={(e) => setTempTrainingTime(e.target.value)}
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
            {isError && tempTrainingTime < 1 && tempTrainingTime !== "" && (
              <p className="error-msg">1以上の値を入力してください</p>
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
        <div style={{ textAlign: "center" }}>
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

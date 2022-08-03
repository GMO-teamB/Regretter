import React, { useState } from "react";
import "./Loading.css";
import Timer from "react-timer-wrapper";
import Timecode from "react-timecode";
import {NavLink} from "react-router-dom";

export default function Loading() {
  const [isClicked, setIsClicked] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const btnStartHandler = (e) => {
    setIsClicked(!isClicked);
    setButtonText(e.target.innerText);
  };

  const timerDoneHandler = (e) => {};

  const timerSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="main">
        <img
          className="walking-image"
          src="https://i.gifer.com/5c7V.gif"
          alt="a walking man"
        />
        <h2 className="inProgress">
          {isClicked ? "運動中です" : "準備中です"}
        </h2>
        <form
          className="timer-form"
          method="POST"
          onSubmit={timerSubmitHandler}
        >
          <div className="time">
            <Timer active={isClicked ? true : false} duration={null}>
              <Timecode format={"H:mm:ss"} />
            </Timer>
          </div>
          <div className="btn-container">
            <button className="start-btn" onClick={btnStartHandler}>
              {isClicked ? "一時停止" : "開始する"}
            </button>
            <NavLink to="/">
            <button
              className="done-btn"
              type="submit"
              onClick={timerDoneHandler}
              disabled={isClicked && buttonText === "一時停止" && false} //開始を押すとdisabledがfalseになり、押せる様になる。一時停止の状態から押してもdisabledはfalseのままにしたい。

            >
              終了する
            </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}


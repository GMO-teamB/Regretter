import React from 'react'

import "./Loading.css";
import Timer from "react-timer-wrapper";
import Timecode from "react-timecode";

export default function Loading() {
  return (
    <div className="container">
      <div className="main">
        <img
          className="walking-image"
          src="https://i.gifer.com/5c7V.gif"
          alt="a walking man"
        />
        <h2 className="inProgress">現在運動中</h2>
        <div className="time">
          <Timer active duration={null}>
            <Timecode />
          </Timer>
        </div>
        <button className="done-btn">終了する</button>
      </div>
    </div>
  );
}


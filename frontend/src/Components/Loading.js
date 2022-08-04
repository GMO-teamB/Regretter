import React, { useEffect, useMemo, useRef, useState } from "react";

import "./Loading.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Loading(props) {
  const [seconds, setSeconds] = useState(Number(props.time) * 60);
  const [isTraining, setIsTraining] = useState(false);
  const intervalRef = useRef(null);
  useEffect(() => {
    if (isTraining) {
      intervalRef.current = setInterval(() => {
        console.log(1);
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, [isTraining]);
  useEffect(() => {
    if (seconds === 0 && intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  });
  const transformSec = useMemo(() => {
    const min = Math.floor(seconds / 60);
    const sec = seconds - min * 60;
    if (sec < 10) {
      return `${min}:0${sec}`;
    }
    return `${min}:${sec}`;
  }, [seconds]);
  return (
    <div className="container">
      <div className="main">
        <img
          className="walking-image"
          src="https://i.gifer.com/5c7V.gif"
          alt="a walking man"
        />
        <h2 className="inProgress">現在{props.name}中</h2>
        <div className="time">{transformSec}</div>
        {isTraining ? (
          <Button
            onClick={() => {
              setIsTraining(false);
            }}
          >
            一時停止
          </Button>
        ) : (
          <Button
            onClick={() => {
              setIsTraining(true);
            }}
          >
            運動開始
          </Button>
        )}
        <Button
          onClick={() => {
            setIsTraining(false);
            clearTimeout(intervalRef);
          }}
          className="done-btn"
          component={Link}
          to="/top"
        >
          終了する
        </Button>
      </div>
    </div>
  );
}

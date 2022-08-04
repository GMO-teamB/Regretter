import React, { useEffect, useMemo, useRef, useState } from "react";

import "./Loading.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Loading(props) {
  const [seconds, setSeconds] = useState(Number(props.time) * 60);
  const [isTraining, setIsTraining] = useState(false);
  const intervalRef = useRef(null);
  const [accel, setAccel] = useState(0);
  const permissionRequest = () => {
    if (
      DeviceOrientationEvent &&
      DeviceOrientationEvent.requestPermission &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      DeviceMotionEvent.requestPermission();
      window.addEventListener(
        "devicemotion",
        function (e) {
          const x = e.acceleration.x;
          const y = e.acceleration.y;
          const z = e.acceleration.z;
          const acc = x ^ (2 + y) ^ (2 + z) ^ 2;
          setAccel(acc);
        },
        false
      );
    }
  };
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
        <div className="image-container">
          <img
            className="walking-image"
            src="https://i.gifer.com/5c7V.gif"
            alt="a walking man"
          />
        </div>
        <h2 className="inProgress">{`${
          isTraining ? `現在${props.name}中` : "マウスを乗せてね！"
        }`}</h2>
        <div className="time">{transformSec}</div>
        <div className="btn-container">
          <Button onClick={()=>permissionRequest}> 加速度</Button>
          <div>{accel}</div>
          {isTraining ? (
            <Button
              onMouseLeave={() => {
                setIsTraining(false);
              }}
              className="start-btn"
            >
              運動中
            </Button>
          ) : (
            <Button
              onMouseEnter={() => {
                setIsTraining(true);
              }}
              className="start-btn"
            >
              ここにマウスを乗せてね！
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
    </div>
  );
}

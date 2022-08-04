import React, { useEffect, useMemo, useRef, useState } from "react";

import "./Loading.css";
import { Button } from "@mui/material";

export default function Loading(props) {
  const [seconds, setSeconds] = useState(Number(props.time) * 60);
  const [isTraining, setIsTraining] = useState(false);
  const intervalRef = useRef(null);
  const [accel, setAccel] = useState(0);
  const [sumacc,setSumAcc] = useState(0);
  const permissionRequest = () => {
      DeviceMotionEvent.requestPermission();
      DeviceOrientationEvent.requestPermission();
      window.addEventListener(
        "devicemotion",
        function (e) {
          const x = e.acceleration.x;
          const y = e.acceleration.y;
          const z = e.acceleration.z;
          const acc = (x ^ 2) + (y ^ 2) + (z ^ 2);
          console.log(`xはルート${x}`)
          console.log(`yはルート${y}`)
          console.log(`zはルート${z}`)
          console.log(`加速度はルート${acc}`)
          setAccel(acc);
          // const k = sumacc + acc 
          setSumAcc(k => k + 1)
          console.log(sumacc)
        },
        false
      );
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
          <Button onClick={()=>permissionRequest()}> 加速度</Button>
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
        </div>
      </div>
    </div>
  );
}

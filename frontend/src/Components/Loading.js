import React, { useEffect, useMemo, useRef, useState } from "react";

import "./Loading.css";
import { Button, Dialog, DialogTitle } from "@mui/material";
import { SubdirectoryArrowRightOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useCalorieContext } from "./calorieContext";

export default function Loading(props) {
  const [seconds, setSeconds] = useState(Number(props.time) * 60);
  const [isTraining, setIsTraining] = useState(false);
  const intervalRef = useRef(null);
  const guardref = useRef(null);
  const [accel, setAccel] = useState(6);
  const [guard, setGuard] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  const calorieContext = useCalorieContext();
  const setCalorie = calorieContext.setCalorie
  const calorie = calorieContext.calorie
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
        setAccel(acc);
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
        clearInterval(intervalRef.current);
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

  // 以下スマホのみ

  useEffect(() => {
    if (isTraining) {
      guardref.current = setInterval(() => {
        setGuard((k) => k + 1);
        console.log(2);
      }, 1000);
    } else {
      if (guardref.current) {
        clearInterval(guardref.current);
        guardref.current = null;
      }
    }
  }, [isTraining]);
  useEffect(() => {
    if (guard > 10) {
      setGuard(0);
      setIsOpen(true);
      setIsTraining(false);
    }
    if (accel === 6 && guardref.current === null && isTraining) {
      guardref.current = setInterval(() => {
        setGuard((k) => k + 1);
        console.log(2);
      }, 1000);
    }
    if (accel !== 6) {
      setGuard(0);
      clearInterval(guardref.current);
      guardref.current = null;
    }
  }, [guard, accel]);

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
        <h2 className="desktop-inProgress">{`${
          isTraining ? `現在${props.name}中` : "マウスを乗せてね！"
        }`}</h2>
        {/* スマホ用 */}
        <h2 className="mobile-inProgress">{`${
          isTraining ? `現在${props.name}中` : "開始してね！"
        }`}</h2>
        <div className="time">{transformSec}</div>
        <div className="btn-container">
          {isTraining ? (
            // スマホ用
            <Button
              onClick={() => {
                setIsTraining(false);
              }}
              className="mobile-start-btn"
            >
              運動中
            </Button>
          ) : (
            <Button
              onClick={() => {
                setIsTraining(true);
                permissionRequest();
              }}
              className="mobile-start-btn"
            >
              運動開始！
            </Button>
          )}
          {isTraining ? (
            <Button
              onMouseLeave={() => {
                setIsTraining(false);
              }}
              className="desktop-start-btn"
            >
              運動中
            </Button>
          ) : (
            <Button
              onMouseEnter={() => {
                setIsTraining(true);
              }}
              className="desktop-start-btn"
            >
              ここにマウスを乗せてね！
            </Button>
          )}
          <Button
            onClick={() => {
              setIsTraining(false);
              clearTimeout(intervalRef.current);
              if(guardref.current){
                clearInterval(guardref.current)
              }
              setCalorie(calorie + Math.ceil(((props.time * 60-seconds)*props.caloriePerMin)/60))
              console.log(seconds)
              console.log(Math.ceil(((props.time-seconds)*props.caloriePerMin)/60))
            }}
            className="done-btn"
            component={Link}
            to="/top"
          >
            終了する
          </Button>
        </div>
        <Dialog open={isOpen}>
          <DialogTitle>サボってますね！</DialogTitle>
          <Button onClick={() => setIsOpen(false)}>再開する</Button>
        </Dialog>
      </div>
    </div>
  );
}

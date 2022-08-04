import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { PieChart } from "./pichart";
import "./Top.css";

export default function Top() {
  const [mins, setMins] = useState(110);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (mins === 0) {
          clearInterval(sampleInterval);
        } else {
          setMins(mins - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  }, [seconds, mins]);
  return (
    <>
      <div className="top">
        <PieChart seconds={seconds} mins={mins}></PieChart>
        <div className="startButtonBox">
          <NavLink to="/task" className="startButton">
            タスク選択画面へ
          </NavLink>
        </div>
      </div>
    </>
  );
}

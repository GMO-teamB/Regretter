import React from 'react'

import "./Loading.css";
import Timer from "react-timer-wrapper";
import Timecode from "react-timecode";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
        <Button className="done-btn" component={Link} to="/">終了する</Button>
      </div>
    </div>
  );
}


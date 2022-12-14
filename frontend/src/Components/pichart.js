import "./pichart.css";
import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  Button,
  Alert,
  AlertTitle,
  CardHeader,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCalorie } from "./const";
import { useCalorieContext } from "./calorieContext";

export function PieChart(props) {

  const [value, setValue] = useState(Number(props.time));
  const [mode, setMode] = useState(1);
  const calorie = useCalorieContext();
  const target = calorie.target
  const now = calorie.calorie


  useEffect(() => {
    setValue(Math.ceil((now * 100) / (target * mode)));
  }, [now, target, mode, setMode, value, setValue]);
  return (
    <div>
      <Box className="changeModeRow">
        <Button
          className={mode === 0.7 ? "selectedButton" : "notSelectedButton"}
          onClick={() => setMode(0.7)}
        >
          easy
        </Button>
        <Button
          className={mode === 1.0 ? "selectedButton" : "notSelectedButton"}
          onClick={() => setMode(1)}
        >
          normal
        </Button>
        <Button
          className={mode === 1.3 ? "selectedButton" : "notSelectedButton"}
          onClick={() => setMode(1.3)}
        >
          hard
        </Button>
      </Box>

      <div className="desktop-wrapper">
        <div className="warning-container">
          <Alert style={{ padding: 0 }} className="alert-box" severity="error">
            <AlertTitle className="alert-title">Warning</AlertTitle>
            目標に達していません — <strong>早めに！</strong>
            <div className="tweet-warning">
              <CardHeader
                className="cautionText"
                title={`自動 tweet まで ${props.mins}:${
                  props.seconds < 10 ? `0${props.seconds}` : props.seconds
                }`}
              />
            </div>
          </Alert>
        </div>

        <Box position="relative" display="inline-flex" className="circleBox">
          {/* 背景用のCircularProgress */}
          <CircularProgress
            className="circle"
            variant="determinate"
            size={300}
            value={100}
            style={{ color: "gray" }}
          />
          {/* バロメーター用のCircularProgress */}
          <CircularProgress
            className="circle"
            variant="determinate"
            size={300}
            value={value}
            style={{ color: "#14b4c9" }}
          />
          <div className="circleContent">
            <Grid container display={"flex"}>
              <Box display={"block"}>
                <Typography>残り</Typography>
                <Typography variant="h5" fontSize={60}>
                  {Math.ceil(target * mode) - now}
                </Typography>
                <Typography textAlign={"right"}>Kcal</Typography>
              </Box>
            </Grid>
          </div>
        </Box>
      </div>
    </div>
  );
}

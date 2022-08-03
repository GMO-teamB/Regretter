import "./pichart.css";
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React from 'react'


export function PieChart(){
    const value = 80
    return (
      <Box position="relative" display="inline-flex" className="circleBox">
        {/* 背景用のCircularProgress */}
        <CircularProgress className="circle" variant="determinate" size={300} value={100} style={{'color': 'gray'}}/>
        {/* バロメーター用のCircularProgress */}
        <CircularProgress className="circle" variant="determinate" size={300} value={value} style={{'color': '#14b4c9'}}/>
        <div className="circleContent">
          <Grid container justify="center" display={"block"}>
               <Typography>残り</Typography>
              <Typography variant="h5" fontSize={60}>{value}</Typography>
              <Typography textAlign={"right"}>Kcal</Typography>
          </Grid>
        </div>
      </Box>
    )
  }
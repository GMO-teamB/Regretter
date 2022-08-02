import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PieChart } from './pichart'
import "./Top.css";
import { Box, Button} from '@mui/material'

export default function Top() {
  const [mins,setMins]=useState(110);
  const [seconds, setSeconds]=useState(0);
  useEffect(()=>{
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
  });
  return (
    <div className='top'>
       <PieChart></PieChart>
       <Box className='startButtonBox'>
        <Button  className='startButton' component={Link} to="/task" >運動を開始する</Button>
       </Box>
       <Box>
        <div className='cautionBox'>       
          あと{mins}:{seconds<10?`0${seconds}`:seconds}分で恥ずかしい画像がtweetされます!       
        </div>
       </Box>
    </div>

  )
}

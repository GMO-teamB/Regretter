import React, { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { PieChart } from './pichart'
import "./Top.css";
import { Box, Card, CardHeader, CardMedia, IconButton} from '@mui/material'
import devImage from './images/dev.jpg';
import devImage2 from './images/dev2.jpg';
import desImage from './images/吹き出し.png'
import { Add, Cached } from '@mui/icons-material';

export default function Top() {
  const chooseImg=(number)=>{
    if (number === 1){
      return devImage
    }
    if (number === 2){
      return devImage2
    }
  }
  const inputRef = useRef(null);
  const imageUpload = () => {
    console.log(inputRef.current);
    inputRef.current?.click();
  };
  const [number, setNumber] = useState(1);
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
       <NavLink to="/task" className="startButton">タスク選択画面へ</NavLink>
       </Box>
       <div className='sample'>
       <Card className='cautionBox'>
        <CardHeader className='cautionText' title={`あと${mins}:${seconds<10?`0${seconds}`:seconds}分で恥ずかしい画像がtweetされます!`}/>
        <Box className='imageBox'>
          <CardMedia component="img" image={desImage} style={{alignSelf:'center',justifySelf:'center',width:'30%'}}/>
          <CardMedia component="img" image={chooseImg(number)} style={{alignSelf:'center',justifySelf:'center',width:'50%'}}/>
          <Box>
          <IconButton onClick={imageUpload}>
            <Add/>
          </IconButton>
          <IconButton onClick={()=>setNumber(number === 2?1:number+1)}>
            <Cached/>
          </IconButton>
          </Box>
        </Box>
      </Card>
      </div>
      <input hidden ref={inputRef} type="file" accept="image/*" />
    </div>

  )
}


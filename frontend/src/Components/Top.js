import React from 'react'
import { Link } from 'react-router-dom'
import { PieChart } from './pichart'
import "./Top.css";
import { Box} from '@mui/material'

export default function Top() {
  return (
    <div className='top'>
       <PieChart></PieChart>
       <Box className='startButton'>
        <Link to="/task" >運動を開始する</Link>
       </Box>
    </div>

  )
}

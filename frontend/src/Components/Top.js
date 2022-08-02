import React from 'react'
import { Link } from 'react-router-dom'
import { PieChart } from './pichart'
import "./Top.css";

export default function Top() {
  return (
    <div className='top'>
       <PieChart></PieChart>
       <Link to="/task">運動を開始する</Link>
    </div>

  )
}

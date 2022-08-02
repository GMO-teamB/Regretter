import React from 'react'
import { Link } from 'react-router-dom'

export default function Top() {
  return (
    <>
       <div>Top画面です</div>
       <Link to="/task">タスク</Link>
    </>

  )
}

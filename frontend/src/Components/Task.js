import React from "react";
import { Link } from "react-router-dom";

function Task() {
  return (
    <>
      <div>タスクページです</div>
      <Link to="/loading">Task</Link>
    </>
  );
}

export default Task;

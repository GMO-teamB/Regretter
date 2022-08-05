import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Top from "./Components/Top";
import NotFound from "./Components/NotFound";
import Task from "./Components/Task";

function App() {
  return (
    <Router basename="/app/">
      <Header />
      <Routes>
        <Route path="/top" element={<Top />} />
        <Route path="task" element={<Task />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

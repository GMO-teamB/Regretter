import React from "react";
import "./Header.css";
import { BiUserCircle } from "react-icons/bi";

function Header() {
  return (
      <header>
        <h1 className="service-title">regretter</h1>
        <BiUserCircle className="user-icon" />
      </header>
  );
}

export default Header;


import React from "react";
import "./NotFound.css";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound-container">
      <div className="notFound-card-wrapper">
        <div className="notFound-error-msg-wrapper">
          <h2 className="notFound-error">Regretter</h2>
          <NavLink to="/top" className="notFound-top-button">
            Topへ
          </NavLink>
        </div>

        <div className="notFound-image-container">
          <img
            className="notFound-image"
            src="https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg"
            alt="error-img"
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;

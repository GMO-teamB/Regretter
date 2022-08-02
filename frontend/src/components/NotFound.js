import React from "react";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notFound-container">
      <div className="notFound-card-wrapper">
        <div className="notFound-error-msg-wrapper">
          <h1 className="notFound-error-num">404</h1>
          <h2 className="notFound-error">エラー！！</h2>
          <p className="notFound-error-msg">お探しのページが見つかりません</p>
          <button className="notFound-top-button">Topへ</button>
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

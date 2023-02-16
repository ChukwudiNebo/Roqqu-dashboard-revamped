import React from "react";
import "./button.css";

const Button = ({ backgroundimage, img, text, fontawesome, color }) => {
  return (
    <>
      <button
        className={`d-flex flew-row flex-nowrap align-items-center dashboard`}
        style={{ backgroundImage: `${backgroundimage}`, color: `${color}` }}
        type="button"
      >
        <span className="dashboard__img-box">
          <img
            src={img}
            alt=""
            className="dashboard__img-box--img"
            style={{ color: `${color}` }}
          />
        </span>
        <span className="dashboard__dashboardText">
          <p className="dashboard__dashboardText--margin">{text}</p>
        </span>
        <i className={`${fontawesome} dashboard__icon `}></i>
      </button>
    </>
  );
};

export default Button;

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
        <span className="img-box">
          <img src={img} alt="" className="img" style={{ color: `${color}` }} />
        </span>
        <span className="dashboardText">
          <p>{text}</p>
        </span>
        <i className={`${fontawesome} dash-icon `}></i>
      </button>
    </>
  );
};

export default Button;

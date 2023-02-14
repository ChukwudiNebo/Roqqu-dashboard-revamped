import React from 'react'
import "./CountryDropdown.css";
const CountryDropdown = ({ currencyText, NgnLogo }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center ngnlogoBorder">
        <div>
          <img src={NgnLogo} alt="" className="ngImg" />
        </div>
        <div>
          <p
            style={{
              color: "white",
              fontSize: "14px",
              paddingTop: "2px",
              marginBottom: "0px",
              paddingLeft: "10px",
            }}
          >
            {currencyText}
          </p>
        </div>
        <div>
          <i className="fa-solid fa-angle-down portfolio-angle-icon"></i>
        </div>
      </div>
    </>
  );
};

export default CountryDropdown

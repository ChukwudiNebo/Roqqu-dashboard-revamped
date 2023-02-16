import React from "react";
import "./CountryDropdown.css";
const CountryDropdown = ({ currencyText, NgnLogo }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center ngn-logo-Border">
        <div>
          <img src={NgnLogo} alt="" className="ngn-logo-Border__ngImg" />
        </div>
        <div>
          <p className="ngn-logo-Border__paragraph">{currencyText}</p>
        </div>
        <div>
          <i className="fa-solid fa-angle-down ngn-logo-Border__angle-icon"></i>
        </div>
      </div>
    </>
  );
};

export default CountryDropdown;

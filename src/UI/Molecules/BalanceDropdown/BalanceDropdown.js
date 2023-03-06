import React from 'react'
import "./balancedropdown.css"

const BalanceDropdown = ({ text }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center balance-border">
        <div>
          <p className="balance-border__paragraph">{text}</p>
        </div>
        <div>
          <i className="fa-solid fa-angle-down balance-border__angle-icon"></i>
        </div>
      </div>
    </>
  );
};

export default BalanceDropdown

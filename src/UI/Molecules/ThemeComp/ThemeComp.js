import React, { useState } from "react";
import "./themecomp.css";

const ThemeComp = ({ firstText , secondText}) => {
  const [changeBGClick, setChangeBG] = useState(false);

  return (
    <>
      <div className="theme-comp">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <p
              onClick={() => setChangeBG(!changeBGClick)}
              className={
                !changeBGClick
                  ? "theme-comp__switch-one"
                  : "theme-comp__notActive"
              }
            >
              {firstText}
            </p>
          </div>
          <div>
            <p
              onClick={() => setChangeBG(!changeBGClick)}
              className={
                !changeBGClick
                  ? "theme-comp__notActive"
                  : "theme-comp__switch-two"
              }
            >
              {secondText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeComp;

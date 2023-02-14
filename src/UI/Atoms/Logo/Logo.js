import React from "react";
import './logo.css'
const Logo = ({ img, height, width }) => {
  return (
    <>
      <img
        src={img}
        alt=""
        className="roqqu-logo"
        // style={{ width: `${width}`, height: `${height}` }}
      />
    </>
  );
};

export default Logo;
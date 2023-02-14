import React from "react";
import './imgicon.css'


const Imgicon = ({imgico}) => {
  return (
    <>
      <img src={imgico} alt="" className="img" />
    </>
  );
};

export default Imgicon;

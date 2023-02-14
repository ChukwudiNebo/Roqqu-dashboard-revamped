import React from "react";
import "./input.css";



const Input = ({ placeholder, searchImg }) => {
  return (
    <>
      <div className="d-flex align-items-center " id="search">
        <span>
          <img src={searchImg} alt="" className="searchImg" />
        </span>
        <input
          type="search"
          name="search"
          id="searchInput"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;

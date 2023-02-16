import React from "react";
import "./input.css";



const Input = ({ placeholder, searchImg }) => {
  return (
    <>
      <div className="d-flex align-items-center search">
        <span>
          <img src={searchImg} alt="" className="search__searchImg" />
        </span>
        <input
          type="search"
          name="search"
          className="search__searchInput"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;

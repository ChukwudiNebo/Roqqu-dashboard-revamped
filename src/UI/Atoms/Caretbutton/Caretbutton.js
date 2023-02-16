import React, { Fragment } from "react";
import "./caretbutton.css";

const Caretbutton = ({ backgroundcolor,fontAwesome }) => {
  return (
    <Fragment>
      <div
        className="caret-bg"
        style={{
          backgroundColor: `${backgroundcolor}`,
        }}
      >
        <i className={`${fontAwesome}`}></i>
      </div>
    </Fragment>
  );
};
export default Caretbutton;

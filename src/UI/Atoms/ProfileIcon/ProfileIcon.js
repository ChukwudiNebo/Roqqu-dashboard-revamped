import React from "react";

function ProfileIcon({ text }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1" style={{width:"25px",borderRadius:"50%",marginLeft:"10px"}}>
      <mask id="avatarsRadiusMask">
        <rect width="1" height="1" fill="#fff" rx="0" ry="0"></rect>
      </mask>
      <g mask="url(#avatarsRadiusMask)">
        <path fill="#43A047" d="M0 0H1V1H0z"></path>
        <text
          x="50%"
          y="50%"
          fill="#FFF"
          dy="0.178"
          fontFamily="Arial,sans-serif"
          fontSize="0.5"
          textAnchor="middle"
        >
          {text}
        </text>
      </g>
    </svg>
  );
}

export default ProfileIcon;

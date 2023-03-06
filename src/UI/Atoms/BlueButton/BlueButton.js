import React from 'react'
import './bluebutton.css'

const BlueButton = ({ text }) => {
  return (
    <>
      <div className="asset-blue-btn">
        <p className='asset-blue-btn__paragraph'>
          {text}
        </p>
      </div>
    </>
  );
};

export default BlueButton

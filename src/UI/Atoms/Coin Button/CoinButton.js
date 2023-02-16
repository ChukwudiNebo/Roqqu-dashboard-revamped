import React from 'react'
import './coinbutton.css'
const CoinButton = ({text}) => {
  return (
    <>
      <div>
        <p
          className="add-coin"
        >
          {text}
        </p>
      </div>
    </>
  );
}

export default CoinButton

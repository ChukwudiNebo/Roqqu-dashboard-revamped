import React from 'react'

const CoinButton = ({text}) => {
  return (
    <>
      <div className="add-coin">
        <p
          style={{
            marginBottom: "0px",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          {text}
        </p>
      </div>
    </>
  );
}

export default CoinButton

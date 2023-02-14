import React, { Fragment } from 'react'
import './transactCard.css'
const TransactCard = ({ icon, text, dwtIMGfund }) => {
  return (
    <>
      <Fragment>
        <div>
          <div className="d-flex justify-content-around align-items-center deposite-slide">
            <div>
              <img src={icon} alt="" id="dwtIMG" className={`${dwtIMGfund}`} />
            </div>
            <div>
              <p
                style={{
                  color: "white",
                  marginBottom: "0px",
                  paddingLeft: "15px",
                  width:"100%",whiteSpace: "nowrap",
                  
                }}
              >
                {text}
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default TransactCard

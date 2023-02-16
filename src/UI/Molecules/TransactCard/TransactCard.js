import React, { Fragment } from "react";
import "./transactCard.css";
const TransactCard = ({ icon, text, dwtIMGfund }) => {
  return (
    <>
      <Fragment>
        <div>
          <div className="d-flex justify-content-around align-items-center transact-slide">
            <div>
              <img
                src={icon}
                alt=""
                className={`${dwtIMGfund} transact-slide__dwtIMG`}
              />
            </div>
            <div>
              <p className="transact-slide__paragraph">{text}</p>
            </div>
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default TransactCard;

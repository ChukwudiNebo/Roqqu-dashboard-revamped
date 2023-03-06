import React from "react";
import "./coinbalance.css";

const CoinBalance = ({
  coinName,
  coinAbbrev,
  imgCoin,
  balance,
  fiatValue,
  valueChangePercentage,
}) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center coinBalance">
        <div className="d-flex align-items-center">
          <div className="coinBalance__image-div">
            <img src={imgCoin} alt="*" className="coinBalance__img" />
          </div>
          <div>
            <p className="coinBalance__coin-name">{coinName}</p>
          </div>
          <div>
            <p className="coinBalance__coin-abbr">{coinAbbrev}</p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <p className="coinBalance__balance">{balance}</p>
          </div>
          <div>
            <p className="coinBalance_fiat-value">#{fiatValue}</p>
          </div>
          <div>
            <p className="coinBalance__value-percentage">
              {valueChangePercentage}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinBalance;

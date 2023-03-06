import React from "react";
import "./cointrade.css";
import { ProgressBar } from "react-bootstrap";
// import Logo from "../../Atoms/Logo/Logo";
// import Paragraph from "../../Atoms/Paragraph/Paragraph";
// import btc from "../../../images/btc.png"

const CoinTradebar = ({ imgCoin, text, nowPercentage }) => {
  return (
    <>
      <div className="d-flex coinTrade">
        <div className="cointrade__image-div">
          <img src={imgCoin} alt="*" className="coinTrade__img" />
        </div>
        <div>
          <p className="coinTrade__paragraph">{text}</p>
          <ProgressBar now={nowPercentage} className="coinTrade__progress" />
        </div>
      </div>
    </>
  );
};

export default CoinTradebar;

import React from 'react'
import Paragraph from '../../UI/Atoms/Paragraph/Paragraph';
import ThemeComp from '../../UI/Molecules/ThemeComp/ThemeComp';
import btc from "../../images/btc.png";
import sol from "../../images/sol.png";
import usdt from "../../images/usdt.png";
import trx from "../../images/trx.png";
import CoinTradebar from '../../UI/Molecules/Coin/CoinTradebar';
import './otherstrade.css'

const OthersTrade = () => {
  return (
    <>
      <div className="othertrade">
        <Paragraph text={"What Others Are Trading"} />
        <div className="othertrade__theme">
          <ThemeComp firstText={"Buy"} secondText={"Sell"} />
        </div>
        <div className="othertrade__cointradebar-one">
          <CoinTradebar imgCoin={btc} text={"BTC"} nowPercentage={"50"} />
        </div>
        <div className="othertrade__cointradebar-one">
          <CoinTradebar imgCoin={sol} text={"SOL"} nowPercentage={"20"} />
        </div>
        <div className="othertrade__cointradebar-one">
          <CoinTradebar imgCoin={usdt} text={"USDT"} nowPercentage={"30"} />
        </div>
        <div className="othertrade__cointradebar-one">
          <CoinTradebar imgCoin={trx} text={"TRX"} nowPercentage={"10"} />
        </div>
        <div className="otherstrade__paragraph">
          <Paragraph
            text={
              "This is a summary of the trades on Roqqu from the last 24hrs, this is an independent data and Roqqu will not be held liable for whatever you do with this information"
            }
          />
        </div>
      </div>
    </>
  );
}

export default OthersTrade

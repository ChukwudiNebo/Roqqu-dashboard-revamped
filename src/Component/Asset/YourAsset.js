import React from "react";
import BlueButton from "../../UI/Atoms/BlueButton/BlueButton";
import Paragraph from "../../UI/Atoms/Paragraph/Paragraph";
import BalanceDropdown from "../../UI/Molecules/BalanceDropdown/BalanceDropdown";
import CoinBalance from "../../UI/Molecules/CoinBalance/CoinBalance";
import btc from "../../images/btc.png";
import sol from "../../images/sol.png";
import usdt from "../../images/usdt.png";
import trx from "../../images/trx.png";

import "./yourasset.css";

const YourAsset = () => {
  return (
    <>
      <div className="asset">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h4 className="asset__asset-header">Your Assets</h4>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center"
              style={{ marginRight: "0px" }}
            >
              <div className="" style={{ height: "20px" }}>
                <i className="asset__sort">
                  <Paragraph text={"Sort by:"} />
                </i>
              </div>
              <BalanceDropdown text={"Balance"} />
            </div>
            <div>
              <BlueButton text={"Add New Coin"} />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="d-flex justify-content-between asset__name-list">
          <div className="asset__nameOne">
            <Paragraph text={"Name"} />
          </div>
          <div className="d-flex asset__nameTwo">
            <div className="asset__nameTwo--one">
              <Paragraph text={"Balance"} />
            </div>
            <div className="asset__nameTwo--two">
              <Paragraph text={"Fiat Value"} />
            </div>
            <div className="asset__nameTwo--three">
              <Paragraph text={"24h Change"} />
            </div>
          </div>
        </div>
        <div className="asset-coinbalance">
          <CoinBalance
            imgCoin={btc}
            coinName={"Bitcoin"}
            coinAbbrev={"BTC"}
            balance={"0.00"}
            fiatValue={"4,555.00"}
            valueChangePercentage={"-0.10"}
          />
          <CoinBalance
            imgCoin={sol}
            coinName={"Solana"}
            coinAbbrev={"SOL"}
            balance={"0.00"}
            fiatValue={"4,555.00"}
            valueChangePercentage={"-0.39"}
          />
          <CoinBalance
            imgCoin={usdt}
            coinName={"Tether"}
            coinAbbrev={"USDT"}
            balance={"0.00"}
            fiatValue={"4,555.00"}
            valueChangePercentage={"-4.29"}
          />
          <CoinBalance
            imgCoin={trx}
            coinName={"Tron"}
            coinAbbrev={"TRX"}
            balance={"0.00"}
            fiatValue={"4,555.00"}
            valueChangePercentage={"-0.10"}
          />
          {/* <CoinBalance
            imgCoin={btc}
            coinName={"Tether"}
            coinAbbrev={"USDT"}
            balance={"0.00"}
            fiatValue={"4,555.00"}
            valueChangePercentage={"-0.10"}
          />
          <CoinBalance
            imgCoin={btc}
            coinName={"Ripple"}
            coinAbbrev={"XRP"}
            balance={"0.00"}
            fiatValue={"4,555.00"}
            valueChangePercentage={"-0.10"}
          />
          <CoinBalance
            imgCoin={btc}
            coinName={"Dashcoin"}
            coinAbbrev={"DASH"}
            balance={"0.00"}
            fiatValue={"4,555.00"}
            valueChangePercentage={"-8.10"}
          /> */}
        </div>
      </div>
    </>
  );
};

export default YourAsset;

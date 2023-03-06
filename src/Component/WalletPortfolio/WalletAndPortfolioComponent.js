import React from "react";
import YourAsset from "../Asset/YourAsset";
import Header from "../Header/Header";
import OthersTrade from "../Others trade/OthersTrade";
import Portfolio from "../Portfolio/Portfolio";
import Transact from "../Transact/Transact";
import "./WalletAndPortfolioComponent.css";

const WalletAndPortfolioComponent = () => {
  return (
    <div className="wallet-portfolio">
      <Header />
      <Portfolio />
      <Transact />
      <div className="d-flex pt-4">
        <div style={{width:"650px"}}>
          <YourAsset />
        </div>
        <div className="">
          <OthersTrade />
        </div>
      </div>
    </div>
  );
};

export default WalletAndPortfolioComponent;

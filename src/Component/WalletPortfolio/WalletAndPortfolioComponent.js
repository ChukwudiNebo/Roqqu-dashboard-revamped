import React from "react";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Transact from "../Transact/Transact";
import "./WalletAndPortfolioComponent.css";

const WalletAndPortfolioComponent = () => {
  return (
    <div className="wallet-portfolio">
      <Header />
      <Portfolio />
      <Transact />
    </div>
  );
};

export default WalletAndPortfolioComponent;

import React from "react";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Transact from "../Transact/Transact";
import "./WalletAndPortfolioComponent.css";

const WalletAndPortfolioComponent = () => {
  return (
    <div style={{ backgroundColor: "#1C2127" }}>
      <Header />
      <Portfolio />
      <Transact />
    </div>
  );
};

export default WalletAndPortfolioComponent;

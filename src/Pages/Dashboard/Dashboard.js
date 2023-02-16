import React, { Fragment } from "react";
import Sidebardashboard from "../../Component/Sidebar/Sidebardashboard";
import WalletAndPortfolioComponent from "../../Component/WalletPortfolio/WalletAndPortfolioComponent";

import './dashboard.css'
const Dashboard = () => {
  return (
    <>
      <Fragment>
        <div className="Dashboard">
          <div className="Dashboard__sidebar">
            <Sidebardashboard />
          </div>
          <div className="Dashboard__wallet-portfolio-component">
            <WalletAndPortfolioComponent />
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default Dashboard;

import React, { Fragment } from "react";
import Sidebardashboard from "../../Component/Sidebar/Sidebardashboard";
import WalletAndPortfolioComponent from "../../Component/WalletPortfolio/WalletAndPortfolioComponent";

const Dashboard = () => {
  return (
    <>
      <Fragment>
        <div className="d-flex">
          <div style={{ width: "250px" }}>
            <Sidebardashboard />
          </div>
          <div style={{ width: "100%", height: "120vh" }}>
            <WalletAndPortfolioComponent />
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default Dashboard;

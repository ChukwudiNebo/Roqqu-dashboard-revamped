import React from "react";

// image
import roqquLogo from "../../images/roqqu-white-logo.7ccb7284c0912651997f111ac71a917c.svg";
import dashboardImg from "../../images/dashboard-side-icon.af4b58c0c8501b2ee1ac5020b4b00bf8 (1).svg";
import portfolioImg from "../../images/wallet-side-icon.abe01825650c93c55d877bc8f503c1e2.svg";
import transactImg from "../../images/transaction-side-icon.e044bd31f9a6a4d442aae75b568c9268.svg";
import nftImg from "../../images/myNFT-icon-copy.c998810e57d1aacdebb5bc1d2a940646.svg";
import exchangeImg from "../../images/exchange-icon.36f3750d7140e5294b617c352100caef.svg";
import hubImg from "../../images/hub-icon.77bff39cc0b2e692562e4959471ad3b5.svg";
import settingIcon from "../../images/settings-side-icon.eb7e1aa2d25e646c4482e53771e157a4.svg";
import helpIcon from "../../images/help-side-icon.b69e35053d6a435a2f4282869c1ce8d0.svg";

// css fille
import "./sidebardashboard.css";

// component
import Paragraph from "../../UI/Atoms/Paragraph/Paragraph";
import Logo from "../../UI/Atoms/Logo/Logo";
import Caretbutton from "../../UI/Atoms/Caretbutton/Caretbutton";
import Button from "../../UI/Atoms/Button/Button";

const Sidebardashboard = () => {
  return (
    <>
      <div id="sidenavbgcolor">
        <div className="d-flex flex-column">
          <div>
            <Logo img={roqquLogo} />
          </div>
          <div className="justify-content-end align-self-end">
            <Caretbutton
              fontAwesome="fa-solid fa-angle-left"
              backgroundcolor="#535C64"
            />
          </div>
          <div className="overview">
            <Paragraph text="Dashboard" />
          </div>
          <div>
            <Button
              img={dashboardImg}
              text="Overview"
              fontawesome="fa-solid fa-angle-down"
              color="#9dabbd"
            />
          </div>
          <div>
            <Button
              img={portfolioImg}
              text="Wallet/Portfolio"
              color="#ffff"
              backgroundimage="linear-gradient(98.7deg, #5240f9 19.95%, #f3526d 89.51%)"
            />
          </div>
          <div>
            <Button img={transactImg} text="Transactions" color="#9dabbd" />
          </div>
          <div>
            <Button img={nftImg} text="NFTs" color="#9dabbd" />
          </div>
          <div>
            <Button img={exchangeImg} text="Exchange" color="#9dabbd" />
          </div>
          <div>
            <Button img={hubImg} text="Roqqu Hub" color="#9dabbd" />
          </div>
          <div className="overview">
            <Paragraph text="Account" />
          </div>
          <div>
            <Button img={settingIcon} text="Settings" color="#9dabbd" />
          </div>

          <div>
            <Button img={helpIcon} text={`Help & Support`} color="#9dabbd" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebardashboard;

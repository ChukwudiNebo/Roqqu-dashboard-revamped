import React from "react";
import CountryDropdown from "../CountryDropdown/CountryDropdown";
import "./portfoliocard.css";

const PortfolioCard = ({
  NgnLogo,
  Heading,
  Amount,
  DecimalAmount,
  Percentage,
  currencyText,
  porfolioParagraph,
  color,
  DisplayNone,
}) => {
  return (
    <div className="d-flex align-items-center cryptBorder">
      <div className="d-flex align-items-start cryptoBorder">
        <div>
          <p
            className="crypto-portfolio"
            style={{ color: "#9DABBD", marginBottom: "0px" }}
          >
            {Heading}
          </p>
          <div className="crypto-money">
            <h3 style={{ color: `${color}`, fontWeight: "bolder" }}>
              {Amount}
              <span style={{ fontSize: "17px", fontWeight: "bolder" }}>
                .{DecimalAmount}
              </span>
              <sub
                style={{
                  fontSize: "15px",
                  fontWeight: "bolder",
                  paddingLeft: "30px",
                }}
              >
                {Percentage}
              </sub>
            </h3>
          </div>
          <p
            style={{
              color: "#9DABBD",
              width: "230px",
              fontSize: "13px",
              paddingBottom: "20px",
            }}
          >
            {porfolioParagraph}
          </p>
        </div>
        <div style={{ display: `${DisplayNone}` }}>
          <CountryDropdown NgnLogo={NgnLogo} currencyText={currencyText} />
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default PortfolioCard;

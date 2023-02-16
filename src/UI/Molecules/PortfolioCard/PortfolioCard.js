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
      <div className="d-flex align-items-start cryptBorder__cryptoBorder">
        <div>
          <p className="cryptBorder__crypto-portfolio">{Heading}</p>
          <div className="cryptBorder__crypto-money">
            <h3
              className="cryptBorder__header"
              style={{ color: `${color}`}}
            >
              {Amount}
              <span className="cryptBorder__decimal-amount">
                .{DecimalAmount}
              </span>
              <sub className="cryptBorder__percentage">{Percentage}</sub>
            </h3>
          </div>
          <p className="cryptBorder__porfolio-paragraph">{porfolioParagraph}</p>
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

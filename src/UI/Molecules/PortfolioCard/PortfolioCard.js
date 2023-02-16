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
    <div className="d-flex align-items-center">
      <div className="d-flex align-items-start cryptoBorder">
        <div>
          <p className="cryptoBorder__crypto-portfolio">{Heading}</p>
          <div className="cryptBorder__crypto-money">
            <h3
              className="cryptoBorder__header"
              style={{ color: `${color}`}}
            >
              {Amount}
              <span className="cryptoBorder__decimal-amount">
                .{DecimalAmount}
              </span>
              <sub className="cryptoBorder__percentage">{Percentage}</sub>
            </h3>
          </div>
          <p className="cryptoBorder__porfolio-paragraph">{porfolioParagraph}</p>
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

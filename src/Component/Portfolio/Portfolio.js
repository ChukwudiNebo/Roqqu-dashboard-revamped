import React from 'react'
import NgnLogo from "../../images/ngn-flag.bcc2075b9277973e90f5ad9a9643b1ab.svg";
import PortfolioCard from '../../UI/Molecules/PortfolioCard/PortfolioCard';


import "./portfolio.css"

const Portfolio = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div className='portfolio-border'>
          <PortfolioCard
            Heading="Your Crypto Portfolio"
            Amount="₦5,269"
            color="white"
            NgnLogo={NgnLogo}
            DecimalAmount="12"
            currencyText="NIG"
            porfolioParagraph="This is the total value of all your cryptocurrencies at current
            prices"
          />
        </div>
        <div>
          <PortfolioCard
            Heading="Today's PNL"
            DisplayNone="none"
            Amount="₦33"
            DecimalAmount="34"
            Percentage="-0.63%"
            color="#58BD7D"
            porfolioParagraph="This is the total growth value of your crypto portfolio in the last
            24hrs"
          />
        </div>
      </div>
    </>
  );
}

export default Portfolio

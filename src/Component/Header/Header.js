import React from "react";
import searchImg from "../../images/search-icon.517444163e73d36e6abdb2abc9150e48.svg";
import globe from "../../images/globe.774a27b82a287136ec09edcd72971975.svg";
import signout from "../../images/sign-out.531e91efeca4f6bbe8b9c914d40840ee.svg";

import Imgicon from "../../UI/Atoms/Imgicon/Imgicon";
import Input from "../../UI/Atoms/Input/Input";
import Paragraph from "../../UI/Atoms/Paragraph/Paragraph";
import ProfileCard from "../../UI/Molecules/Profile card/ProfileCard";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="">
        <div className="d-flex align-items-center justify-content-between  wallet_001">
          <div className="d-flex align-items-center wallet">
            <span>
              <i
                className="fa-solid fa-angle-left wallet-angle-icon"
                style={{ color: "#85D1F0" }}
              ></i>
            </span>
            <Paragraph text="Wallet" />
          </div>
          <div className="d-flex align-items-center">
            <div>
              <Input placeholder="Search for assets" searchImg={searchImg} />
            </div>
            <div>
              <ProfileCard
                fontawesome="fa-solid fa-angle-right"
                text="Chukwudi Nebo"
              />
            </div>
            <div className="imgico">
              <Imgicon imgico={globe} />
            </div>
            <div className="imgicon">
              <Imgicon imgico={signout} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

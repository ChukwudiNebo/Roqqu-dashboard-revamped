import React from "react";
import TransactCard from "../../UI/Molecules/TransactCard/TransactCard";
import depositWalletIcon from "../../images/wallet-deposit-icon.8b613f6a2dc9d6136a590238618a848a.svg";
import withdrawalWalletIcon from "../../images/wallet-withdraw-icon.d2524172cadc4315acf52045a5291e7b.svg";
import transferWalletIcon from "../../images/wallet-transfer-icon.9ac453c8f42bf00ebc526a3ade2d6c11.svg";
import fundWalletIcon from "../../images/currency-imgs.50e3bb1917614fcd10468579ca5085ea.svg";


import './transact.css'

const Transact = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center dwt">
        <div>
          <TransactCard text="Add Money" icon={depositWalletIcon} />
        </div>
        <div>
          <TransactCard text="Send Money" icon={withdrawalWalletIcon} />
        </div>
        <div>
          <TransactCard text="Transfer" icon={transferWalletIcon} />
        </div>
        <div>
          {/* <TransactCard
            text="Fund and transact with local currency"
            icon={fundWalletIcon}
            // id={`${dwtIMGfund}`}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Transact;

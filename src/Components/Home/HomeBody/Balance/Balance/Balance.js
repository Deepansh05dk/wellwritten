import React, { useState } from "react";
import BalanceTaskbar from "../BalanceTaskbar/BalanceTaskbar";
import Balance1 from "../Balance1/Balance1";
import Balance2 from "../Balance2/Balance2";
import Balance3 from "../Balance3/Balance3";
import "./balance.css";
function Balance() {
  var balanceObject;
  const [balance, setBalance] = useState("balance1");
  if (balance === "balance1") {
    balanceObject = <Balance1 />;
  } else if (balance === "balance2") {
    balanceObject = <Balance2 />;
  } else {
    balanceObject = <Balance3 />;
  }
  const handleBalance = (e, value) => {
    e.preventDefault();
    setBalance(value);
  };
  return (
    <div className="balance">
      <BalanceTaskbar handleBalance={handleBalance} />
      <div className="balance__body">{balanceObject}</div>
    </div>
  );
}

export default Balance;

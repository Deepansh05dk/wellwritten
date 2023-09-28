import React, { useState } from "react";
import "../../../../../Styles/hometaskbar.css";

function BalanceTaskbar({ handleBalance }) {
  const [taskClass, setTaskClass] = useState([
    "tasks activetask",
    "tasks",
    "tasks",
  ]);
  return (
    <div className="mainlayout__taskbar">
      <h1 style={{ marginBottom: "15px" }}>Balance</h1>
      <div className="mainlayout__taskbar__tasks">
        <div className={taskClass[0]}>
          <p
            onClick={(e) => {
              handleBalance(e, "balance1");
              setTaskClass(["tasks activetask", "tasks", "tasks"]);
            }}
          >
            History
          </p>
          <div className="rectangle__down"></div>
        </div>
        <div className={taskClass[1]}>
          <p
            onClick={(e) => {
              handleBalance(e, "balance2");
              setTaskClass(["tasks", "tasks activetask", "tasks"]);
            }}
          >
            Billing
          </p>
          <div className="rectangle__down "></div>
        </div>
        <div className={taskClass[2]}>
          <p
            onClick={(e) => {
              handleBalance(e, "balance3");
              setTaskClass(["tasks", "tasks", "tasks activetask"]);
            }}
          >
            Invoices
          </p>
          <div className="rectangle__down "></div>
        </div>
      </div>
    </div>
  );
}

export default BalanceTaskbar;

import React, { useState } from "react";
import "../../../../../Styles/hometaskbar.css";

function PlansTaskbar({ handlePlans }) {
  const [taskClass, setTaskClass] = useState(["tasks activetask", "tasks"]);
  return (
    <div className="mainlayout__taskbar">
      <h1 style={{ marginBottom: "15px" }}>Plans</h1>
      <div className="mainlayout__taskbar__tasks">
        <div className={taskClass[0]}>
          <p
            onClick={(e) => {
              handlePlans(e, "planscreen1");
              setTaskClass(["tasks activetask", "tasks"]);
            }}
          >
            Standard Plans
          </p>
          <div className="rectangle__down"></div>
        </div>
        <div className={taskClass[1]}>
          <p
            onClick={(e) => {
              handlePlans(e, "planscreen2");
              setTaskClass(["tasks", "tasks activetask"]);
            }}
          >
            Custom Plans
          </p>
          <div className="rectangle__down "></div>
        </div>
      </div>
    </div>
  );
}

export default PlansTaskbar;

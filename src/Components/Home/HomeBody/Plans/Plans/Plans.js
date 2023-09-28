import React, { useState } from "react";
import "./plans.css";
import Planscreen1 from "../Planscreen1/Planscreen1";
import Planscreen2 from "../Planscreen2/Planscreen2";
import PlansTaskbar from "../PlansTaskbar/PlansTaskbar";

function Plans() {
  var plansObject;
  const [plans, setPlans] = useState("planscreen1");
  if (plans === "planscreen1") {
    plansObject = <Planscreen1 />;
  } else {
    plansObject = <Planscreen2 />;
  }
  const handlePlans = (e, value) => {
    e.preventDefault();
    setPlans(value);
  };
  return (
    <div className="plans">
      <PlansTaskbar handlePlans={handlePlans} />
      <div className="plans__body">{plansObject}</div>
    </div>
  );
}

export default Plans;

import React from "react";
import "./dashboardtaskbarbodytabs.css";
import { useHistory } from "react-router-dom";

function DashboardTaskbarBody({ link, header }) {
  const history = useHistory();
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        history.push(link);
      }}
      className="dashboardtaskbarbodytabs"
    >
      <div className="dashboardtaskbarbodytabs__header">{header}</div>
      <p>Get your Desired results</p>
    </div>
  );
}

export default DashboardTaskbarBody;

import React from "react";
import "./generatesidebar.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Sidebar({ sidebar }) {
  return (
    <div className="mainsoftwaresidebar">
      <div className="mainsoftwaresidebar_main_heading">
        <h3>Enter Details</h3>
      </div>
      <div className="mainsoftwaresidebar_body">
        <div className="mainsoftwaresidebar_header">
          <h3>Enter Details</h3>
          <HelpOutlineIcon
            style={{ fontSize: "1.2rem" }}
            className="help_icon"
          />
        </div>
        <div className="mainsoftwaresidebar_content">{sidebar}</div>
      </div>
    </div>
  );
}

export default Sidebar;

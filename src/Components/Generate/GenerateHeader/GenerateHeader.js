import React from "react";
import "./generateheader.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";

function Header({ header }) {
  const history = useHistory();
  return (
    <div className="mainsoftware__header">
      <div
        onClick={(e) => {
          e.preventDefault();
          history.push("/home");
        }}
        className="mainsoftware__header__save_exit"
      >
        <ArrowBackIosIcon />
        <div className="mainsoftware__header__save_exit__info">
          <h3>Save & Exit</h3>
          <p>All changes saved at 21:13 pm</p>
        </div>
      </div>
      <h4>{header}</h4>
    </div>
  );
}

export default Header;

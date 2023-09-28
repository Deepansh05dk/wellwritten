import React from "react";
import "./captions.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import DescriptionInput from "../DescriptionInput/DescriptionInput";
function Captions() {
  const handleDelete = () => {};
  return (
    <div className="captions">
      {" "}
      <DescriptionInput label="Topic" />
      <div className="mainsoftwaresidebar__content__submitbutton">
        {" "}
        <Button
          disableRipple={true}
          disableFocusRipple={true}
          variant="outlined"
          size="small"
          className="hover__backgroundchange__buttons"
        >
          Generate
        </Button>
        <p style={{ marginTop: "0.5rem" }}>
          <span className="dollar__sign">
            <i className="fas fa-dollar-sign"></i>
          </span>
          <span className="generate__coins__display">15 coins</span>
        </p>
      </div>
    </div>
  );
}

export default Captions;

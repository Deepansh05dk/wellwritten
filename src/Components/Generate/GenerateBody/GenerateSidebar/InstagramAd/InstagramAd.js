import React, { useState } from "react";
import "./instagramad.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import DescriptionInput from "../DescriptionInput/DescriptionInput";

function InstragramAd() {
  const handleDelete = (item) => {
    setKeywords(
      keywords.filter((i) => {
        return i !== item;
      })
    );
  };
  const [keywords, setKeywords] = useState([]);
  return (
    <div className="instragramad">
      {" "}
      <TextField
        required
        id="outlined-required"
        label="Company Name"
        variant="outlined"
        margin="dense"
      />
      <DescriptionInput label="Company or Product Description" />
      <TextField
        required
        id="outlined-required"
        label="Ad Keywords"
        variant="outlined"
        margin="dense"
        value={keywords.join(",")}
        placeholder="Enter keywords comma seperated"
        onChange={(e) => {
          setKeywords(e.target.value.split(","));
        }}
      />
      <div className="target__keywords__container">
        {keywords?.map((item, index) => {
          return (
            <Chip
              key={index}
              label={item}
              onDelete={() => handleDelete(item)}
              color="primary"
              variant="outlined"
            />
          );
        })}
      </div>
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

export default InstragramAd;

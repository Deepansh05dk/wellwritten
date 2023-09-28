import React, { useState } from "react";
import "./googlead.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import DescriptionInput from "../DescriptionInput/DescriptionInput";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function GoogleAd() {
  const handleDelete = (item) => {
    setKeywords(
      keywords.filter((i) => {
        return i !== item;
      })
    );
  };
  const [keywords, setKeywords] = useState([]);
  return (
    <div className="googlead">
      {" "}
      <TextField
        required
        id="outlined-required"
        label="Company Name"
        variant="outlined"
        margin="dense"
      />
      <TextField
        id="outlined-required"
        label="Website Address"
        variant="outlined"
        margin="dense"
      />
      <TextField
        required
        margin="dense"
        fullWidth
        id="outlined-required"
        label="Audience"
        variant="outlined"
      />
      <DescriptionInput label="Description" />
      <div className="input__info">
        {" "}
        <TextField
          required
          fullWidth
          margin="dense"
          id="outlined-required"
          label="Tone or Product Keywords"
          variant="outlined"
          value={keywords.join(",")}
          placeholder="Enter keywords comma seperated"
          onChange={(e) => {
            setKeywords(e.target.value.split(","));
          }}
        />
        <InfoOutlinedIcon />
      </div>
      <div className="target__keywords__container">
        {" "}
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
      <TextField
        id="outlined-required"
        label="Keywords to avoid"
        variant="outlined"
        margin="dense"
      />
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

export default GoogleAd;

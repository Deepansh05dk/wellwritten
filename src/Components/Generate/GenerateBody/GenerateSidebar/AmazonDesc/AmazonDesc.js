import React, { useState } from "react";
import "./amazondesc.css";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import DescriptionInput from "../DescriptionInput/DescriptionInput";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function AmazonDesc() {
  const [count, setCount] = useState(0);
  const handleDelete = (item) => {
    setKeywords(
      keywords.filter((i) => {
        return i !== item;
      })
    );
  };
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  const [keywords, setKeywords] = useState([]);
  return (
    <div className="amazondesc">
      {" "}
      <DescriptionInput label="Product Description" />
      <div className="input__info">
        <TextField
          required
          id="outlined-required"
          label="Keywords"
          fullWidth
          variant="outlined"
          margin="dense"
          value={keywords.join(",")}
          placeholder="Enter keywords comma seperated"
          onChange={(e) => {
            setKeywords(e.target.value.split(","));
          }}
        />
        <InfoOutlinedIcon />
      </div>
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
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Result Count
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={count}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={0}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={15}>Fifteen</MenuItem>
        </Select>
      </FormControl>
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
      </div>
    </div>
  );
}

export default AmazonDesc;

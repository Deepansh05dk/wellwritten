import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import "./planscreen2.css";

function Planscreen2() {
  const [value, setValue] = useState(1);
  const marks = [
    {
      value: 100,
      label: "100",
    },
    {
      value: 500,
      label: "500",
    },
    {
      value: 1000,
      label: "1000",
    },
    {
      value: 3000,
      label: "3000",
    },
  ];
  return (
    <div className="planscreen2">
      <div className="customplans__container">
        <Slider
          min={1}
          className="price__slider"
          max={3500}
          style={{ height: "10px" }}
          getAriaValueText={(value) => setValue(value > 0 ? value : 1)}
          onChange={(e) => {
            e.preventDefault();
            setValue(e.target.value);
          }}
          marks={marks}
        />
        <h1>=</h1>
        <div className="coins_count__display">${value}</div>
        <div style={{ margin: "1rem 0" }}>
          <Button
            disableRipple={true}
            disableFocusRipple={true}
            variant="outlined"
            size="small"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="hover__backgroundchange__buttons"
          >
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Planscreen2;

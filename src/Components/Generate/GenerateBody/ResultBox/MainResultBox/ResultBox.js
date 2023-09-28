import React from "react";
import "./resultbox.css";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControl } from "@material-ui/core";

function Descbox({
  resultText,
  onDelete,
  index,
  checked,
  handleClick,
  resultBox,
}) {
  var ResultBox = React.cloneElement(resultBox, {
    resultText: resultText,
    onDelete: onDelete,
    index: index,
  });
  return (
    <div className="resultbox">
      <FormControl>
        <Checkbox
          onChange={(e) => {
            handleClick(e, index);
            console.log(index);
          }}
          checked={checked}
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
      </FormControl>
      <div className="resultbox__content">{ResultBox}</div>
    </div>
  );
}

export default Descbox;

import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "./descriptioninput.css";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function DescriptionInput({ label }) {
  const [trackbarClass, setTrackbarClass] = useState(
    "description__trackbar__status__bar poor__color__status"
  );
  const [trackbarStatusClass, setTrackbarStatusClass] = useState(
    "description__status poor__text__status"
  );
  const [trackbarStatus, setTrackbarStatus] = useState(0);
  useEffect(() => {
    if (2 * trackbarStatus >= 0 && 2 * trackbarStatus < 100) {
      setTrackbarClass(
        "description__trackbar__status__bar poor__color__status"
      );
      setTrackbarStatusClass("description__status poor__text__status");
    } else if (2 * trackbarStatus > 100 && 2 * trackbarStatus < 200) {
      setTrackbarClass(
        "description__trackbar__status__bar fine__color__status"
      );
      setTrackbarStatusClass("description__status fine__text__status");
    } else {
      setTrackbarClass(
        "description__trackbar__status__bar good__color__status"
      );
      setTrackbarStatusClass("description__status good__text__status");
    }
  }, [trackbarStatus]);
  return (
    <div className="description__input">
      <TextField
        required
        fullWidth
        id="outlined-multiline-static"
        label={label}
        multiline
        rows={7}
        variant="outlined"
        onChange={(e) => {
          let str = e.target.value;
          str = str.replace(/(^\s*)|(\s*$)/gi, "");
          str = str.replace(/[ ]{2,}/gi, " ");
          str = str.replace(/\n /, "\n");
          let a = str.split(" ").length;
          setTrackbarStatus(Math.min(a / 2, 100));
        }}
      />
      <InfoOutlinedIcon />

      <div className="description__trackbar">
        <div
          style={{ width: trackbarStatus.toString() + "%" }}
          className={trackbarClass}
        ></div>
      </div>
      <p className={trackbarStatusClass}></p>
    </div>
  );
}

export default DescriptionInput;

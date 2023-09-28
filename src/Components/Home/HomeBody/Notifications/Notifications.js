import React, { useState } from "react";
import "./notifications.css";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import InsertCommentIcon from "@material-ui/icons/InsertComment";

function Notifications({ onClose }) {
  const [notifications, setNotifications] = useState([
    "aoajodjshbjsbdisidojsidjsijd",
    "ajdaindjuahdonaisdsdsdsds",
    "ajdbaidahdsdsdsdsdsd",
  ]);
  return (
    <div className="notifications">
      <div className="notification__header">
        <IconButton
          aria-label="close"
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <CloseIcon style={{ color: "var(--unnamed-color-6f96aa)" }} />
        </IconButton>
        <h3>Notifications</h3>
      </div>
      <div className="notifications__container">
        {notifications.map((i) => {
          return (
            <div className="single__notification">
              <InsertCommentIcon
                fontSize="large"
                style={{ color: "#F68F26" }}
              />
              <span>{i}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notifications;

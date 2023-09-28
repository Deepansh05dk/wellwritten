import React from "react";
import "./recentfiletab.css";
import { AvatarGroup } from "@material-ui/lab";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DummyProfile from "../../../../../static/Linkedlnposter.png";

function RecentFileTab() {
  var Today = new Date();
  return (
    <div className="recentfiletab">
      <div className="recentfiletab__header">
        {" "}
        <h3>File </h3>
        <MoreHorizIcon className="recentfiletab__option">...</MoreHorizIcon>
      </div>
      <AvatarGroup max={3}>
        <Avatar src={DummyProfile} />
        <Avatar src={DummyProfile} />
        <Avatar src={DummyProfile} />
        <Avatar src={DummyProfile} />
      </AvatarGroup>
      <p className="recentfiletab__date">
        {Today.getDate() +
          "/" +
          (Today.getMonth() + 1) +
          "/" +
          Today.getFullYear()}
      </p>
    </div>
  );
}

export default RecentFileTab;

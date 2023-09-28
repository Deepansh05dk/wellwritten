import React from "react";
import "./projecttabs.css";
import { AvatarGroup } from "@material-ui/lab";
import { Avatar } from "@material-ui/core";

function ProjectTabs({ name }) {
  var Today = new Date();
  return (
    <div className="projecttabs">
      <div className="folder__top"></div>
      <h3>{name}</h3>
      <AvatarGroup max={3}>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>
      <p className="projecttabs__date">
        {Today.getDate() +
          "/" +
          (Today.getMonth() + 1) +
          "/" +
          Today.getFullYear()}
      </p>
    </div>
  );
}

export default ProjectTabs;

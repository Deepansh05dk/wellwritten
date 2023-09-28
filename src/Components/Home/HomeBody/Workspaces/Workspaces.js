import React, { useContext,useState } from "react";
import "./workspaces.css";
import "../../../../Styles/hometaskbar.css";
import Workspace from "./Workspace/Workspace";
import { Statecontext } from "../../../../context/DataProvider";

function Workspaces() {
  const state = useContext(Statecontext)[0];
  const [folders,setFolders]=useState(["","",""]);

  return (
    <div className="workspaces">
      {" "}
      <div className="workspaces__taskbar">
        {" "}
        <div className="mainlayout__taskbar">
          <h1>Workspaces</h1>
        </div>
      </div>
      <div className="workspaces__container">
      {/* state.userDetails?.userWorkspaces */}
        {folders.map((item) => {
          return <Workspace item={item} />;
        })}
      </div>
    </div>
  );
}

export default Workspaces;

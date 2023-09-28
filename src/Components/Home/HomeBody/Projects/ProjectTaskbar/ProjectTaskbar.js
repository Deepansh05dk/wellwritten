import React, { useState } from "react";
import "../../../../../Styles/hometaskbar.css";

function ProjectTaskbar() {
  const [taskClass, setTaskClass] = useState(["tasks activetask", "tasks"]);
  return (
    <div className="mainlayout__taskbar">
      <h1 style={{ marginBottom: "15px" }}>My Projects</h1>
      <div className="mainlayout__taskbar__tasks">
        <div className={taskClass[0]}>
          <p
            onClick={(e) => {
              e.preventDefault();
              setTaskClass(["tasks activetask", "tasks"]);
            }}
          >
            Created By Me
          </p>
          <div className="rectangle__down"></div>
        </div>
        <div className={taskClass[1]}>
          <p
            onClick={(e) => {
              e.preventDefault();
              setTaskClass(["tasks", "tasks activetask"]);
            }}
          >
            Shared By Me
          </p>
          <div className="rectangle__down "></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTaskbar;

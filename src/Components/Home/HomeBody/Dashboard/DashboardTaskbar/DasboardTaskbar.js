import React, { useState } from "react";
import "../../../../../Styles/hometaskbar.css";

function DasboardTaskbar() {
  const [taskClass, setTaskClass] = useState([
    "tasks activetask",
    "tasks",
    "tasks",
    "tasks",
    "tasks",
  ]);
  return (
    <div className="mainlayout__taskbar">
      <h1 style={{ marginBottom: "15px" }}>Create new</h1>
      <div className="mainlayout__taskbar__tasks">
        <div className={taskClass[0]}>
          <p
            onClick={(e) => {
              e.preventDefault();
              setTaskClass([
                "tasks activetask",
                "tasks",
                "tasks",
                "tasks",
                "tasks",
              ]);
            }}
          >
            Ads
          </p>
          <div className="rectangle__down"></div>
        </div>
        <div className={taskClass[1]}>
          <p
            onClick={(e) => {
              e.preventDefault();
              setTaskClass([
                "tasks",
                "tasks activetask",
                "tasks",
                "tasks",
                "tasks",
              ]);
            }}
          >
            Blogs
          </p>
          <div className="rectangle__down "></div>
        </div>
        <div className={taskClass[2]}>
          <p
            onClick={(e) => {
              e.preventDefault();
              setTaskClass([
                "tasks",
                "tasks",
                "tasks activetask",
                "tasks",
                "tasks",
              ]);
            }}
          >
            Brainstorming
          </p>
          <div className="rectangle__down "></div>
        </div>
        <div className={taskClass[3]}>
          <p
            onClick={(e) => {
              e.preventDefault();
              setTaskClass([
                "tasks",
                "tasks",
                "tasks",
                "tasks activetask",
                "tasks",
              ]);
            }}
          >
            Branding
          </p>
          <div className="rectangle__down "></div>
        </div>
        <div className={taskClass[4]}>
          <p
            onClick={(e) => {
              e.preventDefault();
              setTaskClass([
                "tasks",
                "tasks",
                "tasks",
                "tasks",
                "tasks activetask",
              ]);
            }}
          >
            Other
          </p>
          <div className="rectangle__down "></div>
        </div>
      </div>
    </div>
  );
}

export default DasboardTaskbar;

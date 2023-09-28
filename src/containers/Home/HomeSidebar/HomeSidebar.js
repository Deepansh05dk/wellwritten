import React, { useState } from "react";
import "./homesidebar.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import FormatShapesIcon from "@material-ui/icons/FormatShapes";
import MoneyIcon from "@material-ui/icons/Money";
import logo from "../../../static/Well-written Logo.png";
import { useHistory } from "react-router-dom";

function Sidebar() {
  const history = useHistory();
  const [active, setActive] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <div className="sidebar">
      <img src={logo} alt="logo" className="sidebar__logo"></img>

      <div className="sidebar__icons">
        <div
          onClick={() => {
            history.push("/home");
            setActive(
              active.map((val, index) => {
                if (index === 0) return true;
                else return false;
              })
            );
          }}
          style={{ color: active[0] ? "#FF934B" : "inherit" }}
          className="sidebar__icon"
        >
          {" "}
          <DashboardIcon fontSize="large" />
          <p>Dashboard</p>
        </div>
        <div
          onClick={(e) => {
            history.push("/home/workspaces");
            setActive(
              active.map((val, index) => {
                if (index === 1) return true;
                else return false;
              })
            );
          }}
          style={{ color: active[1] ? "#FF934B" : "inherit" }}
          className="sidebar__icon"
        >
          <FormatShapesIcon fontSize="large" />
          <p>Workspaces</p>
        </div>
        <div
          onClick={(e) => {
            history.push("/home/projects");
            setActive(
              active.map((val, index) => {
                if (index === 2) return true;
                else return false;
              })
            );
          }}
          style={{ color: active[2] ? "#FF934B" : "inherit" }}
          className="sidebar__icon"
        >
          <FolderOpenIcon fontSize="large" />
          <p>Projects</p>
        </div>
        <div
          onClick={(e) => {
            history.push("/home/invite");
            setActive(
              active.map((val, index) => {
                if (index === 3) return true;
                else return false;
              })
            );
          }}
          style={{ color: active[3] ? "#FF934B" : "inherit" }}
          className="sidebar__icon"
        >
          <PersonAddIcon fontSize="large" />
          <p>Invite</p>
        </div>
        <div
          onClick={() => {
            history.push("/home/refer");
            setActive(
              active.map((val, index) => {
                if (index === 4) return true;
                else return false;
              })
            );
          }}
          style={{ color: active[4] ? "#FF934B" : "inherit" }}
          className="sidebar__icon"
        >
          {" "}
          <i className="fa fa-link"></i>
          <p>Refer and Earn </p>
        </div>
        <div
          onClick={() => {
            history.push("/home/balance");
            setActive(
              active.map((val, index) => {
                if (index === 5) return true;
                else return false;
              })
            );
          }}
          style={{ color: active[5] ? "#FF934B" : "inherit" }}
          className="sidebar__icon"
        >
          {" "}
          <MoneyIcon fontSize="large" />
          <p>Balance</p>
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            history.push("/home/plans");
          }}
          className="balance__updates"
        >
          <div className="balance__updates__container">
            <div>
              <span style={{ marginRight: "0" }} className="dollar__sign">
                <i className="fas fa-dollar-sign"></i>
              </span>{" "}
              <span style={{ fontWeight: "700" }}>1000</span>
            </div>
            <p>Coins Remaining</p>
          </div>
          <p className="balance__updates__upgrade">Upgrade</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

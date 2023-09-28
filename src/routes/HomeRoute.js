import React from "react";
import Invite from "../Components/Home/HomeBody/Invite/Invite";
import Dashboard from "../Components/Home/HomeBody/Dashboard/Dashboard/Dashboard";
import ReferAndEarn from "../Components/Home/HomeBody/ReferAndEarn/ReferAndEarn";
import Profile from "../Components/Home/HomeBody/Profile/Profile";
import Project from "../Components/Home/HomeBody/Projects/Project/Project";
import Balance from "../Components/Home/HomeBody/Balance/Balance/Balance";
import Workspaces from "../Components/Home/HomeBody/Workspaces/Workspaces";
import Plans from "../Components/Home/HomeBody/Plans/Plans/Plans";
import EditWorkspace from "../Components/Home/HomeBody/EditWorkspace/EditWorkspace";
import { Route, Redirect } from "react-router-dom";

function HomeRoute() {
  return (
    <>
      <Route exact path="/home">
        <Dashboard />
      </Route>
      <Route exact path="/home/invite">
        <Invite />
      </Route>
      <Route exact path="/home/refer">
        <ReferAndEarn />
      </Route>
      <Route exact path="/home/profile">
        <Profile />
      </Route>
      <Route exact path="/home/projects">
        <Project />
      </Route>
      <Route exact path="/home/balance">
        <Balance />
      </Route>
      <Route exact path="/home/workspaces">
        <Workspaces />
      </Route>
      <Route exact path="/home/plans">
        <Plans />
      </Route>
      <Route exact path="/home/editworkspace">
        <EditWorkspace />
      </Route>
      <Route path="*">
        <Redirect to="/home"></Redirect>
      </Route>
    </>
  );
}

export default HomeRoute;

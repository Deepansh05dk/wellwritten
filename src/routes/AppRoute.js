import React from "react";
import Home from "../containers/Home/Home/Home";
import Onboardscreens from "../containers/WelcomeScreen/Onboardscreens";
// import { Statecontext } from "../context/DataProvider";
import Login from "../containers/Login/Login";
import Checkout from "../containers/Checkout/Checkout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GenerateRoute from "./GenerateRoute";
function AppRoute() {
  // const [state, dispatch] = useContext(Statecontext);
  // if (!state.token) return;
  // else {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/welcome">
            <Onboardscreens />
          </Route>
          <Route path="/generate">
            <GenerateRoute />
          </Route>
          <Route path="*">
            <Redirect to="/home"></Redirect>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
// }

export default AppRoute;

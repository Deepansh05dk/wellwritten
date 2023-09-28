import React from "react";
import { Route, Redirect } from "react-router-dom";
import OnboardScreen1 from "../Components/WelcomeScreens/Onboardscreen1/OnboardScreen1";
import OnboardScreen2 from "../Components/WelcomeScreens/Onboardscreen2/OnboardScreen2";
import OnboardScreen3 from "../Components/WelcomeScreens/Onboardscreen3/OnboardScreen3";
import OnboardScreen4 from "../Components/WelcomeScreens/Onboardscreen4/OnboardScreen4";

function OnboardingRoute() {
  return (
    <>
      <Route exact path="/welcome">
        <OnboardScreen1 />
      </Route>
      <Route exact path="/welcome/screen2">
        <OnboardScreen2 />
      </Route>
      <Route exact path="/welcome/screen3">
        <OnboardScreen3 />
      </Route>
      <Route exact path="/welcome/screen4">
        <OnboardScreen4 />
      </Route>
      <Route exact path="*">
        <Redirect to="/welcome" />
      </Route>
    </>
  );
}

export default OnboardingRoute;

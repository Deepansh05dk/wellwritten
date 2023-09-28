import React, { useContext, useEffect } from "react";
import "./onboardscreen4.css";
import { useHistory } from "react-router-dom";
import Feature1 from "../../../static/feature1.png";
import Feature2 from "../../../static/feature2.png";
import Feature3 from "../../../static/feature3.png";
import { Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Statecontext } from "../../../context/DataProvider";
import Axios from "../../../config/Axios";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function OnboardScreen4() {
  const history = useHistory();
  const state = useContext(Statecontext)[0];
  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("/user/onboarding", state.initialDetails, {
      headers: {
        Authorization: "Bearer" + " " + state.token,
      },
    })
      .then(function (response) {
        history.push("/");
      })
      .catch(function (error) {
        alert(error);
      });
    sessionStorage.removeItem("initialDetails");
  };

  return (
    <div className="onboardscreen4">
      <div className="trackbars">
        <div className=" trackbar trackbar1"></div>
        <div className=" trackbar trackbar2"></div>
        <div className="trackbar trackbar3"></div>
        <div className="trackbar trackbar4"></div>
      </div>
      <div className="navigation_key">
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push("/welcome/screen3");
          }}
          className="navigation_keys back"
        >
          <ArrowBackIosIcon />
          Back
        </button>
      </div>
      <div className="onboardscreen4__body">
        <div className="onboardscreen4__body__heading">
          <h4>Before you get started</h4>
          <p>(Here are a few pointers to help you out)</p>
        </div>
        <div className="onboardscreen4__body__features">
          <div className="onboardscreen4__body__feature">
            <div className="onboardscreen4__body__feature__img__container">
              <img src={Feature1} alt="feature" />
            </div>
            <p>All outputs are generated by AI</p>
          </div>
          <div className="onboardscreen4__body__feature">
            <div className="onboardscreen4__body__feature__img__container">
              <img src={Feature2} alt="feature" />
            </div>
            <p>Predictions are made based on given content</p>
          </div>
          <div className="onboardscreen4__body__feature">
            <div className="onboardscreen4__body__feature__img__container">
              <img src={Feature3} alt="feature" />
            </div>
            <p>Better predictions = Better output</p>
          </div>
        </div>
        <div className="onboardscreen__submitbutton__container">
          <Button
            className="next hover__backgroundchange__buttons"
            onClick={handleSubmit}
            variant="outlined"
            size="small"
          >
            <span>Next </span>
            <ArrowForwardIosIcon fontSize="small" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OnboardScreen4;
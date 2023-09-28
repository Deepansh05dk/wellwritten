import React, { useState, useContext, useEffect } from "react";
import "./onboardscreen3.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Button } from "@material-ui/core";
import { Statecontext } from "../../../context/DataProvider";
import { useHistory } from "react-router-dom";

function OnboardScreen3() {
  const [optionValues, setOptionValues] = useState(["", "", "", "", "", ""]);
  const history = useHistory();
  const [optionClasses, setOptionClass] = useState([
    "onboardscreen__body__option",
    "onboardscreen__body__option",
    "onboardscreen__body__option",
    "onboardscreen__body__option",
    "onboardscreen__body__option",
    "onboardscreen__body__option",
  ]);
  const [state, dispatch] = useContext(Statecontext);
  const handleOptionClass = (e, i, value) => {
    e.preventDefault();
    if (optionValues[i] === "") {
      let newState = [...optionValues];
      newState[i] = value;
      setOptionValues(newState);
      let newOptionClasses = [...optionClasses];
      newOptionClasses[i] =
        "onboardscreen__body__option onboardscreen__body__option-active";
      setOptionClass(newOptionClasses);
    } else {
      let newState = [...optionValues];
      newState[i] = "";
      setOptionValues(newState);
      let newOptionClasses = [...optionClasses];
      newOptionClasses[i] = "onboardscreen__body__option";
      setOptionClass(newOptionClasses);
    }
  };
  useEffect(() => {
    setOptionValues(
      state.inputDetails.initialDetails.mainPurpose
        ? state.inputDetails.initialDetails.mainPurpose
        : ["", "", "", "", "", ""]
    );
    setOptionClass(
      state.inputDetails.initialDetails.mainPurpose
        ? state.inputDetails.initialDetails.mainPurpose.map((v, i) =>
            v !== ""
              ? "onboardscreen__body__option onboardscreen__body__option-active"
              : "onboardscreen__body__option"
          )
        : [
            "onboardscreen__body__option",
            "onboardscreen__body__option",
            "onboardscreen__body__option",
            "onboardscreen__body__option",
            "onboardscreen__body__option",
            "onboardscreen__body__option",
          ]
    );
  }, []);

  return (
    <div className="onboardscreen3">
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
            history.push("/welcome/screen2");
          }}
          className="navigation_keys back"
        >
          <ArrowBackIosIcon />
          Back
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push("/welcome/screen4");
          }}
          className="navigation_keys skip"
        >
          Skip
        </button>
      </div>
      <div className="onboardscreen3__body">
        <div className="onboardscreen3__body__heading">
          <h4>What do you need help with ?</h4>
          <h4>(Pick as many as you like)</h4>
        </div>
        <div className="onboardscreen3__body__option_container">
          <button
            onClick={(e) => {
              handleOptionClass(e, 0, "Social media");
            }}
            className={optionClasses[0]}
          >
            Social media
          </button>
          <button
            className={optionClasses[1]}
            onClick={(e) => {
              handleOptionClass(e, 1, "eCommerce Store");
            }}
          >
            eCommerce Store
          </button>
          <button
            className={optionClasses[2]}
            onClick={(e) => {
              handleOptionClass(e, 2, "Product");
            }}
          >
            Product
          </button>
          <button
            className={optionClasses[3]}
            onClick={(e) => {
              handleOptionClass(e, 3, "Startup");
            }}
          >
            Startup
          </button>
          <button
            className={optionClasses[4]}
            onClick={(e) => {
              handleOptionClass(e, 4, "Creative Writing");
            }}
          >
            Creative Writing
          </button>
          <button
            className={optionClasses[5]}
            onClick={(e) => {
              handleOptionClass(e, 5, "Marketing");
            }}
          >
            Marketing
          </button>
        </div>
        <Button
          className="next hover__backgroundchange__buttons"
          onClick={(e) => {
            e.preventDefault();
            if (
              optionValues.filter((item) => {
                return item !== "";
              }).length !== 0
            ) {
              dispatch({
                type: "ADD USER INITIAL DETAILS",
                item: {
                  mainPurpose: optionValues,
                },
              });
              let initialDetails = JSON.parse(
                sessionStorage.getItem("initialDetails")
              );
              sessionStorage.setItem(
                "initialDetails",
                JSON.stringify({ ...initialDetails, mainPurpose: optionValues })
              );
              history.push("/welcome/screen4");
            }
          }}
          variant="outlined"
          size="small"
        >
          {" "}
          <span>Next </span>
          <ArrowForwardIosIcon fontSize="small" />
        </Button>
      </div>
    </div>
  );
}

export default OnboardScreen3;

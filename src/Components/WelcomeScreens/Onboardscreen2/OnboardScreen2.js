import React, { useState, useContext, useEffect } from "react";
import "./onboardscreen2.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Button } from "@material-ui/core";
import { Statecontext } from "../../../context/DataProvider";
import { useHistory } from "react-router-dom";

function OnboardScreen2() {
  const history = useHistory();
  const [optionValue, setOptionValue] = useState({});
  const [optionClasses, setOptionClass] = useState([
    "onboardscreen__body__option",
    "onboardscreen__body__option",
    "onboardscreen__body__option",
    "onboardscreen__body__option",
  ]);
  const [state, dispatch] = useContext(Statecontext);
  const handleOptionClass = (e, i, value) => {
    if (optionClasses[i] === "onboardscreen__body__option") {
      setOptionValue({ value: value, index: i });
      let newOptionClasses = optionClasses.map((v, index) =>
        index === i
          ? "onboardscreen__body__option onboardscreen__body__option-active"
          : "onboardscreen__body__option"
      );
      setOptionClass(newOptionClasses);
    } else {
      setOptionValue({});
      let newOptionClasses = [...optionClasses];
      newOptionClasses[i] = "onboardscreen__body__option";
      setOptionClass(newOptionClasses);
    }
  };
  useEffect(() => {
    setOptionClass(
      state.inputDetails.initialDetails.usingFor
        ? optionClasses.map((v, index) =>
            index === state.inputDetails.initialDetails.usingFor.index
              ? "onboardscreen__body__option onboardscreen__body__option-active"
              : "onboardscreen__body__option"
          )
        : optionClasses.map((i) => "onboardscreen__body__option")
    );
    setOptionValue(
      state.inputDetails.initialDetails.usingFor
        ? state.inputDetails.initialDetails.usingFor
        : {}
    );
  }, []);
  return (
    <div className="onboardscreen2">
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
            history.push("/welcome");
          }}
          className="navigation_keys back"
        >
          <ArrowBackIosIcon /> Back
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push("/welcome/screen3");
          }}
          className="navigation_keys skip"
        >
          Skip
        </button>
      </div>
      <div className="onboardscreen2__body">
        <h4>What will you use WellWritten.Ai for ?</h4>
        <div className="onboardscreen2__body__option__container">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleOptionClass(e, 0, "Personal");
            }}
            className={optionClasses[0]}
          >
            Personal
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleOptionClass(e, 1, "School");
            }}
            className={optionClasses[1]}
          >
            School
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleOptionClass(e, 2, "Work");
            }}
            className={optionClasses[2]}
          >
            Work
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleOptionClass(e, 3, "Other");
            }}
            className={optionClasses[3]}
          >
            Other
          </button>
        </div>
        <Button
          className="next hover__backgroundchange__buttons"
          onClick={(e) => {
            e.preventDefault();
            if (optionValue) {
              dispatch({
                type: "ADD USER INITIAL DETAILS",
                item: {
                  usingFor: optionValue,
                },
              });
              let initialDetails = JSON.parse(
                sessionStorage.getItem("initialDetails")
              );
              sessionStorage.setItem(
                "initialDetails",
                JSON.stringify({ ...initialDetails, usingFor: optionValue })
              );
              history.push("/welcome/screen3");
            }
          }}
          variant="outlined"
          size="small"
        >
          {" "}
          <span>Next</span>
          <ArrowForwardIosIcon fontSize="small" />
        </Button>
      </div>
    </div>
  );
}

export default OnboardScreen2;

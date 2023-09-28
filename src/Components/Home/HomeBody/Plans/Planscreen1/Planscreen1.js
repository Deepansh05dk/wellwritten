import React, { useState } from "react";
import "./planscreen1.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Planscreen1() {
  const [buttonClass, setButtonClass] = useState([
    "planstype__button__active",
    "",
  ]);
  const history = useHistory();
  return (
    <div className="planscreen1">
      <div className="planstype">
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("s");
            buttonClass
              ? setButtonClass(["planstype__button__active", ""])
              : setButtonClass(["", ""]);
          }}
          className={buttonClass[0]}
        >
          Annual
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            buttonClass
              ? setButtonClass(["", "planstype__button__active"])
              : setButtonClass(["", ""]);
          }}
          className={buttonClass[1]}
        >
          Monthly
        </button>
      </div>
      <div className="plans__container">
        <div className="single__plan">
          <h3>Starter</h3>{" "}
          <div className="plan__value">
            <span style={{ fontSize: "1.875rem" }}>$</span>
            <span style={{ fontSize: "3.125rem" }}>200</span>
            <span style={{ fontSize: "1.125rem" }}>/user</span>
          </div>
          <div className="plan__coins__value"> 3000 coins</div>
          <div className="plan__features__container">
            <p>
              <i className="fas fa-check-circle"></i> Feature:asdf
            </p>
            <p>
              <i className="fas fa-check-circle"></i> Feature:asdf
            </p>
            <p>
              <i className="fas fa-check-circle"></i> Feature:asdf
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem 0",
            }}
          >
            <Button
              disableRipple={true}
              disableFocusRipple={true}
              variant="outlined"
              size="small"
              onClick={(e) => {
                e.preventDefault();
                history.push("/checkout");
              }}
              className="hover__backgroundchange__buttons"
            >
              Get it Now
            </Button>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            transform: "scale(1.06)",
          }}
          className="single__plan popular__plan"
        >
          {" "}
          <h3> Pro</h3>
          <div className="plan__value">
            <span style={{ fontSize: "1.875rem" }}>$</span>
            <span style={{ fontSize: "3.125rem" }}>500</span>
            <span style={{ fontSize: "1.125rem" }}>/user</span>
          </div>
          <div className="plan__coins__value"> 5000 coins</div>
          <div className="plan__features__container">
            <p>
              <i className="fas fa-check-circle"></i> Feature:asdf
            </p>
            <p>
              <i className="fas fa-check-circle"></i> Feature:asdf
            </p>
            <p>
              <i className="fas fa-check-circle"></i> Feature:asdf
            </p>
            <p>
              <i className="fas fa-check-circle"></i> Feature:asdf
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem 0",
            }}
          >
            <Button
              disableRipple={true}
              disableFocusRipple={true}
              variant="outlined"
              size="small"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="hover__backgroundchange__buttons"
            >
              Get it Now
            </Button>
          </div>
        </div>
        <div className="single__plan">
          <h3>Enterprise</h3>
          <div className="plan__value">
            <span style={{ fontSize: "1.875rem" }}>$</span>
            <span style={{ fontSize: "3.125rem" }}>600</span>
            <span style={{ fontSize: "1.125rem" }}>/user</span>
          </div>
          <div className="plan__coins__value"> 6000 coins</div>
          <div className="plan__features__container">
            <p>
              <i className="fas fa-check-circle"></i> Feature:asdf
            </p>
            <p>
              <i className="fas fa-check-circle"></i> Feature:asdf
            </p>
            <p>
              <i className="fas fa-check-circle"></i> Feature:asdf
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem 0",
            }}
          >
            <Button
              disableRipple={true}
              disableFocusRipple={true}
              variant="outlined"
              size="small"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="hover__backgroundchange__buttons"
            >
              Get it Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planscreen1;

import React, { useState } from "react";
import { Button } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./balance2.css";

function Balance2() {
  const [planName, setPlanName] = useState("Diamond");
  const [bilingEmail, setBillingEmail] = useState("");

  return (
    <div className="balance2">
      <div className="yourplan">
        <h3>Your Plan</h3>
        <div className="yourplan__container">
          <div className="billing__upper__container">
            <div className="balance2__info__container">
              <p className="content__title">Plan Name</p>
              <p>{planName}</p>
            </div>
            <div className="balance2__info__container">
              <p className="content__title">Valid Till</p>
              <p>01/04/2022</p>
            </div>
          </div>
          <div className="balance2__buttons__container">
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
              View Plans{" "}
              <ArrowDropDownIcon fontSize="default" style={{ color: "#fff" }} />
            </Button>
          </div>
        </div>
      </div>

      <div className="billing">
        <h3>Your Billing</h3>
        <div className="billing__container">
          <div className="billing__upper__container">
            {" "}
            <div className="balance2__info__container">
              <p className="content__title">Payement Method</p>
              <p>Visa **** **** **** ****</p>
            </div>
            <div className="balance2__info__container">
              <p className="content__title">Billing Email</p>
              <p>test123@gmail.com</p>
            </div>
          </div>
          <div className="balance2__info__container">
            <p className="content__title">Billing Address</p>
            <p>USA, california</p>
          </div>
          <div className="balance2__buttons__container">
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
              Update Billing Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balance2;

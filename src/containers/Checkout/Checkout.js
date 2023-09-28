import React, { useEffect, useState } from "react";
import "./checkout.css";
import Axios from "../../config/Axios";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";

function Checkout() {
  const history = useHistory();
  const location = useLocation();
  const [redirectUrl, setRedirectUrl] = useState("");
  useEffect(async () => {
    let value = location.search?.split("&");
    let sessionId = value[1]?.split("=")[1];
    let orderId = value[2]?.split("=")[1];
    if (sessionId && orderId) {
      await Axios.post(
        "user/payment/validate",
        {
          sessionId: sessionId,
          orderId: orderId,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDFmNGQxMjkwZWU4NDRlODU5MjBlOCIsIm5hbWUiOiJBaG1hZCBBc2hyYWYifSwiaWF0IjoxNjI2MjAwNjU3fQ.u0glyJpdtu4FIjEk9ol6qi41YwqpKwtU3wW6mADpBbA",
          },
        }
      )
        .then(function (response) {
          history.push("/home");
          alert(response.data.message);
        })
        .catch(function (error) {});
    } else {
      await Axios.post(
        "user/payment/checkout",
        {
          planId: "60d1f0a102324f427c512343",
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDFmNGQxMjkwZWU4NDRlODU5MjBlOCIsIm5hbWUiOiJBaG1hZCBBc2hyYWYifSwiaWF0IjoxNjI2MjAwNjU3fQ.u0glyJpdtu4FIjEk9ol6qi41YwqpKwtU3wW6mADpBbA",
          },
        }
      )
        .then(function (response) {
          setRedirectUrl(response.data.url);
        })
        .catch(function (error) {});
    }
  }, []);
  return (
    <div className="checkout">
      <div className="checkout__body">
        <h2 style={{ textAlign: "center" }}>Professional</h2>
        <div className="plan__value">
          <span style={{ fontSize: "1.875rem" }}>$</span>
          <span style={{ fontSize: "3.125rem" }}>500</span>
          <span style={{ fontSize: "1.125rem" }}>/user</span>
        </div>
        <div className="plan__coins__value"> 5000 coins</div>
        <div className="plan__features__container">
          <p>
            <i className="fas fa-check-circle"></i>{" "}
            Feature:asdffsdsdsdsdsdsdsdsdsaas
          </p>
          <p>
            <i className="fas fa-check-circle"></i>{" "}
            Feature:asdffsdsdsdsdsdsdsdsdsaas
          </p>
          <p>
            <i className="fas fa-check-circle"></i>{" "}
            Feature:asdffsdsdsdsdsdsdsdsdsaas
          </p>
          <p>
            <i className="fas fa-check-circle"></i>{" "}
            Feature:asdffsdsdsdsdsdsdsdsdsaas
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
              history.push(redirectUrl);
            }}
            className="hover__backgroundchange__buttons"
          >
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

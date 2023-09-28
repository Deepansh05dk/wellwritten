import React, { useState } from "react";
import "./login.css";
import SignIn from "../../Components/Login/SignIn/SignIn";
import SignUp from "../../Components/Login/SignUp/SignUp";
import logo from "../../static/Well-written Logo.png";

function Login() {
  const [loginstate, setLoginstate] = useState(true);

  const [activeClassSignin, setActiveClassSignin] = useState(
    "signin__signup__options__active"
  );
  const [activeClassSignup, setActiveClassSignup] = useState("");
  return (
    <div className="login">
      <div className="signin__signup">
        <div className="signin__signup__header">
          <img
            className="signin__signup__header__logo"
            src={logo}
            alt="logo"
          ></img>
          <div className="signin__signup__header__options">
            <button
              className={activeClassSignin}
              autoFocus={true}
              onClick={(e) => {
                e.preventDefault();
                setLoginstate(true);
                setActiveClassSignin("signin__signup__options__active");
                setActiveClassSignup("");
              }}
            >
              Log In
            </button>
            <button
              className={activeClassSignup}
              onClick={(e) => {
                e.preventDefault();
                setLoginstate(false);
                setActiveClassSignin("");
                setActiveClassSignup("signin__signup__options__active");
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
        {loginstate ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
}

export default Login;

import React, { useState, useEffect, useContext } from "react";
import "./signup.css";

import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Statecontext } from "../../../context/DataProvider";
import { useHistory } from "react-router-dom";
import Axios from "../../../config/Axios";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function SignUp() {
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const history = useHistory();
  const dispatch = useContext(Statecontext)[1];

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (email && password && fullName) {
      await Axios.post("auth/signup", {
        email: email,
        password: password,
        name: fullName,
      })
        .then(function (response) {
          setData(response.data);
          history.push("/welcome");
        })
        .catch(function (error) {
          setOpen(true);
        });
    }
  };
  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(data.user));
    sessionStorage.setItem("access-token", data.token);
    dispatch({ type: "ADD USER", item: data.user });
    dispatch({ type: "ADD TOKEN", item: data.token });
  }, [data, dispatch]);

  return (
    <div className="signup">
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="warning">
          User Already Registered.
        </Alert>
      </Snackbar>
      <div className="signin__signup__container">
        <div className="signin__signup__container_header">
          <Button variant="outlined" size="small">
            {" "}
            <i class="fab fa-google"></i> Sign Up with Google
          </Button>
          <Button variant="outlined" size="small">
            <i class="fab fa-microsoft"></i> Sign Up with Outlook{" "}
          </Button>
        </div>
        <div className="signin__signup__container_mid">
          <hr />
          <p>OR</p>
        </div>
        <form>
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            fullWidth
            id="outlined-required"
            label="Email Id"
            variant="outlined"
            margin="dense"
            type="email"
          />
          <TextField
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            required
            fullWidth
            id="outlined-required"
            label="Full Name"
            variant="outlined"
            margin="dense"
          />

          <TextField
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            fullWidth
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            margin="dense"
          />
          <div className="form__footer">
            <Button
              onClick={handleSignUp}
              disableRipple={true}
              disableFocusRipple={true}
              variant="outlined"
              className="signin__signup__submitbutton"
              size="small"
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

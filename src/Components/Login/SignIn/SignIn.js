import React, { useState, useEffect, useContext } from "react";
import "./signin.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Statecontext } from "../../../context/DataProvider";
import Axios from "../../../config/Axios";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function SignIn() {
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useContext(Statecontext)[1];

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      await Axios.post("/auth/login", {
        email: email,
        password: password,
      })
        .then(function (response) {
          setData(response.data);
          history.push("/");
        })
        .catch(function (error) {
          setOpen(true);
        });
    }
  };
  useEffect(() => {
    if (data) {
      sessionStorage.setItem("user", JSON.stringify(data.user));
      sessionStorage.setItem("access-token", data.token);
      dispatch({ type: "ADD USER", item: data.user });
      dispatch({ type: "ADD TOKEN", item: data.token });
    }
  }, [data]);
  return (
    <div className="signin">
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="error">
          User not registered.
        </Alert>
      </Snackbar>
      <div className="signin__signup__container">
        <div className="signin__signup__container_header">
          <Button
            disableRipple={true}
            disableFocusRipple={true}
            variant="outlined"
            size="small"
          >
            {" "}
            <i class="fab fa-google"></i> Log In with Google
          </Button>
          <Button
            disableRipple={true}
            disableFocusRipple={true}
            variant="outlined"
            size="small"
          >
            <i class="fab fa-microsoft"></i> Log In with Outlook
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
            type="email"
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
              disableRipple={true}
              disableFocusRipple={true}
              variant="outlined"
              size="small"
              className="signin__signup__submitbutton"
              onClick={handleLogin}
            >
              {" "}
              Log In
            </Button>
            <p>Forgot Password</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

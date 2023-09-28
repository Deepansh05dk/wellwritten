import React, { useState, useContext } from "react";
import "./invite.css";
import "../../../../Styles/hometaskbar.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Axios from "../../../../config/Axios";
import { Statecontext } from "../../../../context/DataProvider";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
function Invite() {
  const [email, setEmail] = useState();
  const [role, setRole] = useState();
  const state = useContext(Statecontext)[0];
  const [rows, setRows] = useState([
    { date: "a", name: "a", access: "a" },
    { date: "a", name: "a", access: "a" },
    { date: "a", name: "a", access: "a" },
  ]);
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post(
      "/auth/invite",
      {
        email: email,
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYzEwOGM2NGZlYjhiOGRkYzIyNTM1ZSIsIm5hbWUiOiJQYXJhcyBTaGlzaG9kaWEifSwiaWF0IjoxNjIzMjYzNzgwfQ.l9d2kN-oDQuGUAuigU6A79ekeQ-6_wd1wHVa9gPIcq8",
        },
      }
    )
      .then(function (response) {
        setOpen(true);
      })
      .catch(function (error) {
        alert(error);
      });
  };
  return (
    <div className="invite">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Invited Sucessfully
        </Alert>
      </Snackbar>
      <div className="mainlayout__taskbar">
        <h1>Invite Users</h1>
      </div>
      <div className="invite__body">
        <div className="invite__input__container">
          <TextField
            required
            fullWidth
            style={{ marginRight: "2rem", flex: "0.6" }}
            id="outlined-required"
            label="Email ID"
            variant="outlined"
            margin="dense"
            type="email"
            value={email || ""}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FormControl
            style={{ flex: "0.4" }}
            className="role__select"
            variant="outlined"
            margin="dense"
          >
            <InputLabel htmlFor="outlined-role-native-simple">Roles</InputLabel>
            <Select
              //   value={state.age}
              //   onChange={handleChange}

              label="Role"
              // margin="dense"
            >
              <MenuItem style={{ display: "none" }} value="" />
              <MenuItem value={"Admin"}>Admin</MenuItem>
              <MenuItem value={"Contributor"}>Contributor</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Button
          disableRipple={true}
          disableFocusRipple={true}
          variant="outlined"
          size="small"
          onClick={handleSubmit}
          style={{ marginTop: "1.5rem" }}
          className="hover__backgroundchange__buttons"
        >
          Send Invite
        </Button>
      </div>
      <h3>Invited Users</h3>
      <div className="invitedusers__body">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Access</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.access}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Invite;

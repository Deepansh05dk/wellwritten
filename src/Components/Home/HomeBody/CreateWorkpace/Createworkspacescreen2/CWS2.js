import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { useHistory } from "react-router-dom";
import Select from "@material-ui/core/Select";
import "./CWS2.css";
import InputLabel from "@material-ui/core/InputLabel";
import AddIcon from "@material-ui/icons/Add";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Statecontext } from "../../../../../context/DataProvider";
import Axios from "../../../../../config/Axios";

function CWS2({ setWorkspacescreen }) {
  const [contributors, setContributors] = useState(["", ""]);
  const history = useHistory();
  const state = useContext(Statecontext)[0];
  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post(
      "/user/workspace/create",
      { ...state.inputDetails.workspaceDetails, runs: "10" },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDFmNGQxMjkwZWU4NDRlODU5MjBlOCIsIm5hbWUiOiJBaG1hZCBBc2hyYWYifSwiaWF0IjoxNjI0MzcyNDMzfQ.Us3xOcLhUJu-0gm0SjrqmIJkKUeb5DaIOGvcsp0at_U",
        },
      }
    )
      .then(function (response) {
        history.push("/");
      })
      .catch(function (error) {
        alert(error);
      });
  };

  return (
    <div className="createworkspace__screen2">
      <button
        onClick={(e) => {
          e.preventDefault();
          setWorkspacescreen("workspacescreen1");
        }}
        className="createworkspace__screen2__navigation_key__back"
      >
        <ArrowBackIosIcon />
      </button>
      <div className="trackbars">
        <div className=" trackbar trackbar1"></div>
        <div className=" trackbar trackbar2"></div>
      </div>
      <h3 style={{ textAlign: "center" }}>Add Collaborators</h3>
      {contributors.map((v) => {
        return (
          <div className="createworkspace__screen2__inputrow">
            <TextField
              required
              fullWidth
              label="Email Id"
              variant="outlined"
              margin="dense"
              // value={companyName || ""}
              // onChange={(e) => {
              //   setCompanyName(e.target.value);
              // }}
            />
            <FormControl
              margin="dense"
              className="role__select"
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-role-native-simple">
                Role
              </InputLabel>
              <Select
                //   value={state.age}
                //   onChange={handleChange}
                label="Role"
              >
                <MenuItem style={{ display: "none" }} value="" />
                <MenuItem value={"Admin"}>Admin</MenuItem>
                <MenuItem value={"Contributor"}>Contributor</MenuItem>
              </Select>
            </FormControl>
          </div>
        );
      })}

      <div
        className="add__more"
        onClick={(e) => {
          e.preventDefault();
          setContributors([...contributors, ""]);
        }}
      >
        <AddIcon /> <span>Add More</span>
      </div>
      <div className="createworkspace__dialog__button__container ">
        <p onClick={handleSubmit}>Skip and Create</p>
        <Button
          onClick={handleSubmit}
          disableRipple={true}
          disableFocusRipple={true}
          variant="outlined"
          size="small"
          className="hover__backgroundchange__buttons"
        >
          Create
        </Button>
      </div>
    </div>
  );
}

export default CWS2;

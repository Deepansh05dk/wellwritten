import React, { useState, useEffect, useContext } from "react";
import "../../../../Styles/hometaskbar.css";
import "./editworkspace.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import AddIcon from "@material-ui/icons/Add";
import { Statecontext } from "../../../../context/DataProvider";
import Axios from "../../../../config/Axios";
import MenuItem from "@material-ui/core/MenuItem";
import { useLocation } from "react-router-dom";

function EditWorkspace() {
  const state = useContext(Statecontext)[0];
  const location = useLocation();
  const [contributors, setContributors] = useState([""]);
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceDescription, setWorkspaceDescription] = useState("");
  const [count, setCount] = useState(1000);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post(
      "/user/workspace/edit",
      {
        workspaceId: location.state?._id,
        name: workspaceName,
        description: workspaceDescription,
        runs: location.state?.credits.runs,
        tokens: location.state?.credits.tokens,
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDFmNGQxMjkwZWU4NDRlODU5MjBlOCIsIm5hbWUiOiJBaG1hZCBBc2hyYWYifSwiaWF0IjoxNjI0MzcyNDMzfQ.Us3xOcLhUJu-0gm0SjrqmIJkKUeb5DaIOGvcsp0at_U",
        },
      }
    )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        alert(error);
      });
  };
  useEffect(() => {
    setContributors(location.state?.Users);
    setWorkspaceName(location.state?.name);
    setWorkspaceDescription(location.state?.description);
  }, []);
  return (
    <div className="editworkspace">
      <div className="mainlayout__taskbar">
        <h1>Edit Workspace</h1>
      </div>
      <div className="editworkspace__body">
        <h3>Workspaces Details</h3>
        <div
          style={{ backgroundColor: "#FFF", marginBottom: "1rem" }}
          className="balance__count__container"
        >
          <div>
            <span className="dollar__sign">
              <i className="fas fa-dollar-sign"></i>
            </span>{" "}
            <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              {count}/5000
            </span>
          </div>
          <p>coins remaining</p>
        </div>
        <div style={{ display: "flex" }}>
          <TextField
            fullWidth
            style={{ marginRight: "2rem", flex: "0.6" }}
            label="Workspace Name"
            variant="outlined"
            margin="dense"
            value={workspaceName || ""}
            onChange={(e) => {
              setWorkspaceName(e.target.value);
            }}
          />
          <TextField
            fullWidth
            style={{ flex: "0.4" }}
            label="Description"
            variant="outlined"
            margin="dense"
            value={workspaceDescription || ""}
            onChange={(e) => {
              setWorkspaceDescription(e.target.value);
            }}
          />
        </div>
        <h3 style={{ marginBottom: "0px" }}>Collaborators</h3>
        {contributors.map((i) => {
          return (
            <div key={i._id} style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Email ID"
                variant="outlined"
                margin="dense"
                type="email"
                style={{ marginRight: "2rem", flex: "0.6" }}
                value={i.name}
                onChange={(e) => {
                  e.preventDefault();
                }}
              />
              <FormControl
                style={{ flex: "0.4" }}
                margin="dense"
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-role-native-simple">
                  Roles
                </InputLabel>
                <Select
                  //   value={state.age}
                  //   onChange={handleChange}
                  label="Role"
                  inputProps={{
                    name: "role",
                    id: "outlined-role-native-simple",
                  }}
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          {" "}
          <Button
            onClick={handleSubmit}
            disableRipple={true}
            disableFocusRipple={true}
            variant="outlined"
            size="small"
            className="hover__backgroundchange__buttons"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditWorkspace;

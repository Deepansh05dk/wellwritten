import React, { useEffect, useState, useContext } from "react";
import ProjectTaskbar from "../ProjectTaskbar/ProjectTaskbar";
import ProjectTabs from "../ProjectTabs/ProjectTabs";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";
import "./project.css";
import Axios from "../../../../../config/Axios";
import { Statecontext } from "../../../../../context/DataProvider";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";

function Project() {
  const [contributors, setContributors] = useState(["", ""]);
  const [dialog, setDialog] = useState(false);
  const [folders,setFolders]=useState([{_id:1,name:"Folder"},{_id:2,name:"Folder"},{_id:3,name:"Folder"},{_id:4,name:"Folder"},{_id:5,name:"Folder"}]);
  const [state, dispatch] = useContext(Statecontext);
  const [newfolderName, setNewfolderName] = useState("");
  const createProject = (e) => {
    e.preventDefault();
    setDialog(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state.userDetails.currentWorkspace) {
      await Axios.post(
        "/user/folder/create",
        {
          name: newfolderName,
          workspaceId: state.userDetails.currentWorkspace.id,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDFmNGQxMjkwZWU4NDRlODU5MjBlOCIsIm5hbWUiOiJBaG1hZCBBc2hyYWYifSwiaWF0IjoxNjI0MzcyNDMzfQ.Us3xOcLhUJu-0gm0SjrqmIJkKUeb5DaIOGvcsp0at_U",
          },
        }
      )
        .then(function (response) {})
        .catch(function (error) {});
    }
  };

  useEffect(async () => {
    if (state.userDetails.currentWorkspace) {
      await Axios.get(
        "/user/folders/" + state.userDetails.currentWorkspace.id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDFmNGQxMjkwZWU4NDRlODU5MjBlOCIsIm5hbWUiOiJBaG1hZCBBc2hyYWYifSwiaWF0IjoxNjI0MzcyNDMzfQ.Us3xOcLhUJu-0gm0SjrqmIJkKUeb5DaIOGvcsp0at_U",
          },
        }
      )
        .then(function (response) {
          dispatch({
            type: "ADD USER FOLDERS",
            item: response.data,
          });
        })
        .catch(function (error) {});
    }
  }, []);

  return (
    <div className="project">
      <ProjectTaskbar />
      <div className="projectbody">
        <div
          onClick={(e) => {
            e.preventDefault();
            createProject(e);
          }}
          className="create__new__project"
        >
          <AddIcon style={{ fontSize: "5rem" }} />
          <p style={{ fontSize: "1rem" }}>Create New</p>
        </div>
        <Dialog
          PaperProps={{ style: { width: "90%" } }}
          maxWidth="sm"
          open={dialog}
        >
          <IconButton
            aria-label="close"
            onClick={(e) => {
              e.preventDefault();
              setDialog(false);
            }}
            className="closebutton"
          >
            <CloseIcon />
          </IconButton>
          <div className="createproject__dialog">
            <h3>New Project</h3>
            <TextField
              required
              fullWidth
              label="Name of Project"
              variant="outlined"
              margin="dense"
              value={newfolderName || ""}
              onChange={(e) => {
                setNewfolderName(e.target.value);
              }}
            />
            <h3
              style={{
                textAlign: "left",
                marginBottom: "0rem",
                marginTop: "1rem",
              }}
            >
              Assign Contributors
            </h3>
            {contributors.map((i) => {
              return (
                <div key={i._id} style={{ display: "flex" }}>
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
                    // value={email || ""}
                    // onChange={(e) => {
                    //   setEmail(e.target.value);
                    // }}
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
                margin: "1rem 0",
              }}
            >
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
        </Dialog>
        {folders?.map((item) => {
          return <ProjectTabs key={item._id} name={item.name} />;
        })}
      </div>
    </div>
  );
}

export default Project;

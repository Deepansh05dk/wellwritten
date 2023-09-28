import React, { useState, useEffect } from "react";
import "./workspace.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { EditRounded } from "@material-ui/icons";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";

function Workspace({ item }) {
  const [count, setCount] = useState(1000);
  const history = useHistory();
  const [contributors, setContributors] = useState(["","",""]);
  useEffect(() => {
    setContributors(item?.Users);
  }, []);

  return (
    <Accordion key={item._id} className="workspace__item">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className="workspace__summary">
          <span className="workspace__title">{"Title"}</span>
          <div className="assigned__coins__count">
            <div
              onClick={(e) => {
                e.preventDefault();
                history.push({
                  pathname: "/home/editworkspace",
                  state: item,
                });
              }}
              className="assigned__coins__count__container"
            >
              <span className="dollar__sign">
                <i className="fas fa-dollar-sign"></i>
              </span>{" "}
              <span className="count__number">
                <b>{1000} </b>Coins Assigned
              </span>
              <EditRounded />
            </div>
          </div>
          <div className="remaining__coins__count">
            <span className="dollar__sign">
              <i className="fas fa-dollar-sign"></i>
            </span>{" "}
            <span className="count__number">
              <b>{count} </b>Coins Remaining
            </span>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="accordian__maincontent">
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            margin="dense"
            value={""}
            onChange={(e) => {
              e.preventDefault();
            }}
          />

          <h3>Collaborators</h3>

          {contributors?.map((i) => {
            return (
              <div
                key={i._id}
                className="accordian__maincontent__contributors__row"
              >
                {" "}
                <TextField
                  required
                  fullWidth
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
            className="workspace__savecontainer"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            {" "}
            <Button
              onClick={(e) => {
                e.preventDefault();
              }}
              disableRipple={true}
              disableFocusRipple={true}
              variant="outlined"
              size="small"
              className="hover__backgroundchange__buttons"
            >
              save
            </Button>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default Workspace;

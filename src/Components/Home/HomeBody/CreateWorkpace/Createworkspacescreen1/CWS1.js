import React, { useState, useContext, useEffect } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Statecontext } from "../../../../../context/DataProvider";
function CWS1({ setWorkspacescreen }) {
  const [state, dispatch] = useContext(Statecontext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [coins, setCoins] = useState(0);
  useEffect(() => {
    setName(
      state.inputDetails?.workspaceDetails.name
        ? state.inputDetails.workspaceDetails.name
        : ""
    );
    setDescription(
      state.inputDetails?.workspaceDetails.description
        ? state.inputDetails.workspaceDetails.description
        : ""
    );
    setCoins(
      state.inputDetails?.workspaceDetails.coins
        ? state.inputDetails.workspaceDetails.coins
        : 0
    );
  }, []);
  return (
    <div className="createworkspace__screen1">
      <div className="trackbars">
        <div className=" trackbar trackbar1"></div>
        <div className=" trackbar trackbar2"></div>
      </div>
      <h3 style={{ textAlign: "center" }}>New Workspace</h3>
      <TextField
        fullWidth
        label="Name of Workspace"
        variant="outlined"
        margin="dense"
        value={name || ""}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <TextField
        fullWidth
        label="Description"
        variant="outlined"
        margin="dense"
        value={description || ""}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <TextField
        fullWidth
        label="Number of Coins to Assign"
        variant="outlined"
        margin="dense"
        value={coins}
        onChange={(e) => {
          setCoins(e.target.value);
        }}
      />
      <div className="createworkspace__dialog__button__container">
        <Button
          className="next hover__backgroundchange__buttons"
          onClick={(e) => {
            e.preventDefault();
            setWorkspacescreen("workspacescreen2");
            dispatch({
              type: "ADD NEW WORKSPACE DETAILS",
              item: {
                name: name,
                description: description,
                tokens: coins,
              },
            });
          }}
          disableRipple={true}
          disableFocusRipple={true}
          variant="outlined"
          size="small"
        >
          <span>Next</span> <ArrowForwardIosIcon fontSize="small" />
        </Button>
      </div>
    </div>
  );
}

export default CWS1;

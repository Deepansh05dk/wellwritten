import React, { useState, useContext, useEffect } from "react";
import "./createworkspace.css";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import CWS1 from "../Createworkspacescreen1/CWS1";
import CWS2 from "../Createworkspacescreen2/CWS2";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { useHistory } from "react-router-dom";
import { Statecontext } from "../../../../../context/DataProvider";
import Axios from "../../../../../config/Axios";

function CreateWorkspace() {
  const history = useHistory();
  let [state, dispatch] = useContext(Statecontext);
  const [expand, setExpand] = useState(false);
  let [workspacescreen, setWorkspacescreen] = useState("workspacescreen1");
  let Workspacescreen;
  const [dialog, setDialog] = useState(false);

  if (workspacescreen === "workspacescreen1")
    Workspacescreen = <CWS1 setWorkspacescreen={setWorkspacescreen} />;
  else Workspacescreen = <CWS2 setWorkspacescreen={setWorkspacescreen} />;

  useEffect(async () => {
    await Axios.get("/user/workspaces", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDFmNGQxMjkwZWU4NDRlODU5MjBlOCIsIm5hbWUiOiJBaG1hZCBBc2hyYWYifSwiaWF0IjoxNjI0MzcyNDMzfQ.Us3xOcLhUJu-0gm0SjrqmIJkKUeb5DaIOGvcsp0at_U",
      },
    })
      .then(function (response) {
        dispatch({
          type: "ADD USER WORKSPACES",
          item: response.data,
        });
      })
      .catch(function (error) {});
  }, []);

  return (
    <div className="workspacecreate">
      <div
        style={{
          position: "absolute",
          top: "5px",
          width: "180px",
          left: "5px",
        }}
      >
        {" "}
        <Accordion
          expanded={expand}
          onChange={(e, isExpanded) => setExpand(isExpanded)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            {state.userDetails.currentWorkspace
              ? state.userDetails.currentWorkspace.name
              : "My Workspaces"}
          </AccordionSummary>
          <AccordionDetails style={{ flexDirection: "column" }}>
            {state.userDetails?.userWorkspaces.map((i) => {
              return (
                <div className="select__option" key={i._id}>
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      setExpand(false);
                      dispatch({
                        type: "ADD CURRENT WORKSPACE",
                        item: {
                          id: i._id,
                          name: i.name,
                        },
                      });
                      sessionStorage.setItem(
                        "currWork",
                        JSON.stringify({
                          id: i._id,
                          name: i.name,
                        })
                      );
                      history.push("/");
                    }}
                  >
                    {i.name}
                  </span>
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      history.push({
                        pathname: "/home/editworkspace",
                        state: i,
                        key: i._id,
                      });
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </span>
                </div>
              );
            })}
          </AccordionDetails>
        </Accordion>
      </div>

      <span
        onClick={(e) => {
          e.preventDefault();
          setDialog(true);
        }}
        className="create__newworkspace"
      >
        <AddIcon />
        <p style={{ fontSize: "0.9rem" }}>Create New</p>
      </span>
      <Dialog
        maxWidth="sm"
        PaperProps={{ style: { width: "90%" } }}
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
        <div className="createworkspace__dialog">
          <div className="createworkspace__dialog__body">{Workspacescreen}</div>
        </div>
      </Dialog>
    </div>
  );
}

export default CreateWorkspace;

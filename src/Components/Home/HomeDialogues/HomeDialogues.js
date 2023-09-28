import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { Button } from "@material-ui/core";
import "./homedialogue.css";

function HomeDialogues() {
  const [dialog, setDialog] = useState(false);
  return (
    <>
      <Dialog
        PaperProps={{ style: { minWidth: "300px", padding: "2rem" } }}
        maxWidth="md"
        open={dialog}
      >
        <h2 style={{ textAlign: "center", color: "#012174" }}>
          Dear User, Welcome to WellWritten.Ai{" "}
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#012174",
            marginBottom: "3rem",
          }}
        >
          We'd love to give you a brief tour and explain how WellWritten.Ai
          works!
        </p>
        <div className="welcome_dialogue__buttons">
          <p style={{ color: "#f68a06", cursor: "pointer" }}>Skip</p>
          <Button
            // onClick={handleSubmit}
            disableRipple={true}
            disableFocusRipple={true}
            variant="outlined"
            size="small"
            className="hover__backgroundchange__buttons"
          >
            Take Tour
          </Button>
        </div>
      </Dialog>
    </>
  );
}

export default HomeDialogues;

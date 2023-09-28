import React, { useState, useEffect, useContext } from "react";
import "../../../../Styles/hometaskbar.css";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import "./profile.css";
import logo1 from "../../../../static/Dummyprofile.png";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import EditIcon from "@material-ui/icons/Edit";
import { Statecontext } from "../../../../context/DataProvider";

function Profile() {
  const [dialog, setDialog] = useState(false);
  const state = useContext(Statecontext)[0];
  const handleDelete = (item) => {
    setKeywords(
      keywords.filter((i) => {
        return i !== item;
      })
    );
  };

  const [keywords, setKeywords] = useState([]);
  return (
    <div className="profile">
      <div className="profile__taskbar">
        {" "}
        <div className="mainlayout__taskbar">
          <h1>My Profile</h1>
        </div>
        <div className="profile__body">
          <h3>Personal Information</h3>
          <div className="personal__info">
            <img alt="Remy Sharp" src={logo1} />
            <div className="profile__name__email">
              {" "}
              <TextField
                required
                fullWidth
                label="Full Name"
                variant="outlined"
                margin="dense"
                value={state.userDetails.userProfile?.name}
                onChange={(e) => {
                  e.preventDefault();
                }}
              />
              <TextField
                required
                fullWidth
                InputProps={{ style: { color: "#7F7F7F" } }}
                label="Email ID"
                variant="outlined"
                margin="dense"
                value={state.userDetails.userProfile?.email}
                onChange={(e) => {
                  e.preventDefault();
                }}
              />
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setDialog(true);
                }}
                className="change__password"
              >
                <EditIcon style={{ marginRight: "5px", fontSize: "1.2rem" }} />
                Change Password{" "}
              </div>
              <Dialog
                PaperProps={{ style: { width: "90%" } }}
                maxWidth="sm"
                open={dialog}
              >
                <IconButton
                  aria-label="close"
                  className="closebutton"
                  onClick={(e) => {
                    e.preventDefault();
                    setDialog(false);
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <div className="changepassword__dialog">
                  <h3>Change Password</h3>
                  <TextField
                    required
                    fullWidth
                    label="Old Password"
                    variant="outlined"
                    margin="dense"
                    // value={referralLink || ""}
                    // onChange={(e) => {
                    //   setReferralLink(e.target.value);
                    // }}
                  />
                  <TextField
                    required
                    fullWidth
                    label="New Password"
                    variant="outlined"
                    margin="dense"
                    // value={referralLink || ""}
                    // onChange={(e) => {
                    //   setReferralLink(e.target.value);
                    // }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "1rem 0",
                    }}
                  >
                    <Button
                      disableRipple={true}
                      disableFocusRipple={true}
                      variant="outlined"
                      size="small"
                      className="hover__backgroundchange__buttons"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Done
                    </Button>
                  </div>
                </div>
              </Dialog>
            </div>
          </div>

          <h3>Company Information</h3>
          <TextField
            required
            fullWidth
            label="Company Name"
            variant="outlined"
            margin="dense"
            value={state.userDetails.userProfile?.organization}
            onChange={(e) => {
              e.preventDefault();
            }}
          />
          <TextField
            required
            fullWidth
            label="Company URL"
            variant="outlined"
            margin="dense"
            // value={referralLink || ""}
            // onChange={(e) => {
            //   setReferralLink(e.target.value);
            // }}
          />
          <TextField
            required
            fullWidth
            id="outlined-multiline-static"
            label={"Description"}
            multiline
            rows={7}
            variant="outlined"
            margin="dense"
            // onChange={(e) => {
            //   let str = e.target.value;

            // }}
          />
          <TextField
            required
            fullWidth
            margin="dense"
            id="outlined-required"
            label="Tone or Product Keywords"
            variant="outlined"
            value={keywords.join(",")}
            placeholder="Enter keywords comma seperated"
            onChange={(e) => {
              setKeywords(e.target.value.split(","));
            }}
          />
          <div className="target__keywords__container">
            {" "}
            {keywords?.map((item, index) => {
              return (
                <Chip
                  key={index}
                  label={item}
                  onDelete={() => handleDelete(item)}
                  color="primary"
                  variant="outlined"
                />
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1.5rem",
            }}
          >
            <Button
              disableRipple={true}
              disableFocusRipple={true}
              variant="outlined"
              className="hover__backgroundchange__buttons"
              size="small"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

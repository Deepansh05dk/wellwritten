import React, { useState, useRef, useContext } from "react";
import "./homebody.css";
import SearchIcon from "@material-ui/icons/Search";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import CreateWorkspace from "../../../Components/Home/HomeBody/CreateWorkpace/Createworkspace/CreateWorkspace";
import HomeRoute from "../../../routes/HomeRoute";
import { useHistory } from "react-router-dom";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Drawer from "@material-ui/core/Drawer";
import Bookmarks from "../../../Components/Home/HomeBody/Bookmarks/Bookmarks";
import Notifications from "../../../Components/Home/HomeBody/Notifications/Notifications";
import DummyProfile from "../../../static/Dummyprofile.png";
import { Statecontext } from "../../../context/DataProvider";

function MainlayoutBody() {
  const history = useHistory();
  const state = useContext(Statecontext)[0];
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openBookmark, setOpenBookmark] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [inputDisplay, setInputDisplay] = useState("none");
  const anchorRef = useRef(null);
  const handleToggle = () => {
    setOpenEditDialog((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenEditDialog(false);
  };

  return (
    <div className="mainlayoutbody">
      <div className="mainlayoutbody__header">
        <div style={{ flex: "0.28" }} className="create__workspace">
          <CreateWorkspace />
        </div>
        <div
          style={{ flex: inputDisplay !== "none" ? "0.8" : "1" }}
          className="mainlayoutbody__header__icons"
        >
          <div style={{ display: inputDisplay }} className="search__input">
            <input type="text" />

            <IconButton
              className="hover__change"
              onClick={(e) => {
                e.preventDefault();
                setInputDisplay("none");
              }}
            >
              <SearchIcon />
            </IconButton>
          </div>

          <IconButton
            className="hover__change"
            style={{
              display: inputDisplay === "flex" ? "none" : "inline-block",
            }}
            onClick={(e) => {
              e.preventDefault();
              setInputDisplay("flex");
            }}
          >
            <SearchIcon />
          </IconButton>

          {/* Book mark drawer */}
          <Tooltip title="Bookmark">
            <IconButton
              className="hover__change"
              onClick={(e) => {
                e.preventDefault();
                setOpenBookmark(true);
              }}
            >
              {" "}
              <BookmarkBorderIcon />
            </IconButton>
          </Tooltip>
          <Drawer
            anchor={"right"}
            open={openBookmark}
            onClose={(e) => {
              e.preventDefault();
              setOpenBookmark(false);
            }}
          >
            <Bookmarks
              onSelfClose={() => {
                setOpenBookmark(false);
              }}
              onNotifyOpen={() => {
                setOpenNotifications(true);
              }}
            />
          </Drawer>
          {/*Notification Drawer  */}
          <Tooltip title="Notifications">
            <IconButton
              className="hover__change"
              onClick={(e) => {
                e.preventDefault();
                setOpenNotifications(true);
              }}
            >
              {" "}
              <NotificationsNoneIcon />
            </IconButton>
          </Tooltip>
          <Drawer
            anchor={"right"}
            open={openNotifications}
            onClose={(e) => {
              e.preventDefault();
              setOpenNotifications(false);
            }}
          >
            <Notifications
              onClose={() => {
                setOpenNotifications(false);
              }}
            />
          </Drawer>
          {/* edit profile menu */}
          <div className="edit__profile">
            <div
              className="profile__icon__container"
              onClick={handleToggle}
              ref={anchorRef}
              aria-controls={openEditDialog ? "menu-list-grow" : undefined}
            >
              {" "}
              <img className="profile__icon" src={DummyProfile} alt="" />
            </div>
            <div className="profile__info">
              <h3>
                {state.userDetails?.userProfile
                  ? state.userDetails.userProfile.name
                  : "Guest"}
              </h3>
              <p>Admin</p>
            </div>
            <Popper
              open={openEditDialog}
              anchorEl={anchorRef.current}
              transition
              disablePortal
              style={{ zIndex: "2" }}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={openEditDialog}
                        id="menu-list-grow"
                      >
                        <MenuItem
                          onClick={(event) => {
                            handleClose(event);
                            history.push("/home/profile");
                          }}
                        >
                          Edit Profile
                        </MenuItem>
                        <MenuItem
                          onClick={(event) => {
                            handleClose(event);
                            sessionStorage.removeItem("user");
                            sessionStorage.removeItem("access-token");
                            window.location.reload();
                          }}
                        >
                          Logout
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </div>
      </div>
      <div className="mainlayoutbody__content">
        <HomeRoute />
      </div>
    </div>
  );
}

export default MainlayoutBody;

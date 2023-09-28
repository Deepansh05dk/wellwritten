import React, { useEffect, useContext } from "react";
import "./bookmarks.css";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Axios from "../../../../config/Axios";
import { Statecontext } from "../../../../context/DataProvider";

function Bookmarks({ onSelfClose, onNotifyOpen }) {
  const state = useContext(Statecontext)[0];
  // useEffect(
  //   () =>
  //     async function fetchData() {
  //       await Axios.get("/user/workspaces", {
  //         headers: {
  //           Authorization: "Bearer" + " " + state.token,
  //         },
  //       })
  //         .then(function (response) {
  //           alert(response);
  //         })
  //         .catch(function (error) {
  //           alert(error);
  //         });
  //     },
  //   []
  // );
  return (
    <div className="bookmarks">
      <div className="bookmark__header">
        <IconButton
          aria-label="close"
          onClick={(e) => {
            e.preventDefault();
            onSelfClose();
          }}
        >
          <CloseIcon style={{ color: "var(--unnamed-color-6f96aa)" }} />
        </IconButton>
        <h3>Bookmarks</h3>
        <IconButton
          onClick={(e) => {
            e.preventDefault();
            onNotifyOpen();
          }}
        >
          {" "}
          <NotificationsNoneIcon
            style={{ color: "var(--unnamed-color-6f96aa)" }}
          />
        </IconButton>
      </div>
      <div className="bookmarks__container">
        <div>
          <p
            style={{
              color: "#002173",
              fontSize: "0.8rem",
              marginBottom: "0.4rem",
            }}
          >
            3/4/2021
          </p>
          <hr />
        </div>
        <div style={{ color: "#002273" }} className="single__bookmark__header">
          <span>Captions for Photos</span>
          <span> Caption</span>
        </div>
        <div className="single__bookmark">
          <div className="single__bookmark__container">
            sdsdhsvdiushkdsdjsidbsudksvudjsjhgdsnduhs
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookmarks;

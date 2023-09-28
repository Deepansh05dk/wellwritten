import React, { useEffect, useState, useContext } from "react";
import Sidebar from "../HomeSidebar/HomeSidebar";
import HomeDialgoue from "../../../Components/Home/HomeDialogues/HomeDialogues";
import HomeBody from "../HomeBody/HomeBody";
import "./home.css";
import { Statecontext } from "../../../context/DataProvider";
import Axios from "../../../config/Axios";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function Home() {
  const dispatch = useContext(Statecontext)[1];
  const [check, setCheck] = useState(false);

  useEffect(async () => {
    await Axios.get("/user/profile", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDFmNGQxMjkwZWU4NDRlODU5MjBlOCIsIm5hbWUiOiJBaG1hZCBBc2hyYWYifSwiaWF0IjoxNjI0MzcyNDMzfQ.Us3xOcLhUJu-0gm0SjrqmIJkKUeb5DaIOGvcsp0at_U",
      },
    })
      .then(function (response) {
        dispatch({
          type: "ADD USER PROFILE",
          item: response.data.user,
        });
      })
      .catch(function (error) {});
  }, []);
  return (
    <div className="mainscreen">
      <HomeDialgoue />
      <input
        value={check}
        onChange={(e) => setCheck(e.target.checked)}
        type="checkbox"
        className="sidebar__navigator"
      />
      {check ? (
        <ArrowBackIcon
          style={{ fontSize: "1.7rem" }}
          className="sidebar__menu"
        />
      ) : (
        <MenuIcon style={{ fontSize: "1.7rem" }} className="sidebar__menu" />
      )}

      <Sidebar />
      <HomeBody />
    </div>
  );
}

export default Home;

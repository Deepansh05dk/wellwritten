import React, { useRef, useEffect, useContext } from "react";
import "./dashboard.css";
import DashboardTaskbar from "../DashboardTaskbar/DasboardTaskbar";
import DashboardTaskbarBodyTab from "../DashboardBodyTabs/DashboardTaskbarBodytTabs";
import RecentFileTab from "../RecentFileTab/RecentFileTab";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Axios from "../../../../../config/Axios";
import { Statecontext } from "../../../../../context/DataProvider";

function Dashboard() {
  const ref = useRef();
  const state = useContext(Statecontext)[0];
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
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
    <div className="dashboard">
      <DashboardTaskbar />
      <div className="dashboardtaskbarbody">
        <DashboardTaskbarBodyTab
          header="Amazon Product Description"
          link="/generate/amazondesc"
        />
        <DashboardTaskbarBodyTab header="Captions" link="/generate/caption" />
        <DashboardTaskbarBodyTab
          header="Instagram Ad"
          link="/generate/instagramAd"
        />
        <DashboardTaskbarBodyTab
          header="Linkedln Ad"
          link="/generate/linkedlnAd"
        />
        <DashboardTaskbarBodyTab header="Google Ad" link="/generate/googleAd" />
        <DashboardTaskbarBodyTab
          header="SEO Metatag"
          link="/generate/SEOmetatag"
        />
        <DashboardTaskbarBodyTab header="Taglines" link="/generate/taglines" />
      </div>
      <h3 className="recent">Recent Files</h3>
      <div className="recentfiles">
        <div className="recentfiles_container" ref={ref}>
          <RecentFileTab />
          <RecentFileTab />
          <RecentFileTab />
          <RecentFileTab />
          <RecentFileTab />
          <RecentFileTab />
          <RecentFileTab />
          <RecentFileTab />
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            scroll(100);
          }}
          className="recentfiles__slider"
        >
          <ArrowForwardIosIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

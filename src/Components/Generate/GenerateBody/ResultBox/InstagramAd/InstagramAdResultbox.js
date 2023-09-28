import React, { useState } from "react";
import "./instagramadresultbox.css";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ReportIcon from "@material-ui/icons/Report";
import Instagramposter from "../../../../../static/Instagramposter.png";
import { IconButton } from "@material-ui/core";
import Sendicon from "../../../../../static/sendicon.png";
import Commenticon from "../../../../../static/commenticon.png";
import Dummyprofile from "../../../../../static/Dummyprofile.png";
import Tooltip from "@material-ui/core/Tooltip";

function InstagramAdResultbox({ resultText, onDelete, index }) {
  const [readOnly, setReadOnly] = useState("false");
  const [resultBoxText, setResultBoxText] = useState(resultText);
  return (
    <div className="instagramadresultbox">
      <div className="instagramadresultbox__body">
        <div className="instagramadresultbox__container">
          <div className="instagramadresultbox__content">
            <div className="content__blurbg blurbg"></div>
            <div className="instagramadresultbox__header">
              <div className="instagramadresultbox__header__left">
                <Avatar alt="Remy Sharp" src={Dummyprofile} />
                <div className="instagramadresultbox__header__info">
                  <p>
                    <b>Candlesmith</b>
                  </p>
                  <p>sponsored</p>
                </div>
              </div>
              <div className="instagramadresultbox__header__right">
                <MoreVertIcon />
              </div>
            </div>
            <div className="instagramadresultbox__imgcontainer">
              <img src={Instagramposter} alt="" />
              <div className="blurbg"></div>
            </div>
            <p className="instagramadresultbox__banner">
              Learn More
              <span>
                <ArrowForwardIosIcon fontSize="small" />
              </span>
            </p>
            <div className="instagramadresultbox__icons">
              <FavoriteOutlinedIcon fontSize="large" style={{ color: "red" }} />
              <img src={Commenticon} alt="" />
              <img src={Sendicon} alt="" />
            </div>
            <p className="likes_container">342 likes</p>
          </div>

          <div
            onInput={(e) => {
              setResultBoxText(e.target.innerText);
            }}
            contentEditable={readOnly}
            className="instagramadresultbox__textbox"
          >
            {resultText}
          </div>
        </div>
      </div>
      <div className="resultbox__content__footer">
        <div className="resultbox__content__characters">
          {" "}
          <span className="resultbox_content_select"> Content</span>
          <span className="resultbox_content__length">
            250 characters/20 words
          </span>
        </div>
        <hr></hr>
        <div className="resultbox_content_icons">
          <div className="resultbox_content_icons_left">
            <Tooltip title="Copy">
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(resultBoxText);
                }}
              >
                <i className="material-icons custom resultbox_content_icon">
                  content_copy
                </i>
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  readOnly === "true"
                    ? setReadOnly("false")
                    : setReadOnly("true");
                }}
              >
                <EditOutlinedIcon className="resultbox_content_icon" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Plagiarism Check">
              <IconButton>
                <ReportIcon className="resultbox_content_icon" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  onDelete(index);
                }}
              >
                <DeleteOutlineOutlinedIcon className="resultbox_content_icon" />
              </IconButton>
            </Tooltip>
          </div>
          <Tooltip title="Bookmark">
            <IconButton>
              <BookmarkBorderOutlinedIcon className="resultbox_content_icon" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default InstagramAdResultbox;

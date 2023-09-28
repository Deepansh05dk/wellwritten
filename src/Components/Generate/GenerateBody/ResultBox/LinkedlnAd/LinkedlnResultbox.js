import React, { useState } from "react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ReportIcon from "@material-ui/icons/Report";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import MessageIcon from "@material-ui/icons/Message";
import { IconButton } from "@material-ui/core";
import Linkedlnshare from "../../../../../static/linkedlnshare.png";
import Mainlogo from "../../../../../static/Well-written Logo.png";
import Linkedlnposter from "../../../../../static/Linkedlnposter.png";
import Icon2 from "../../../../../static/Group 503.png";
import Icon3 from "../../../../../static/Group 504.png";
import Icon1 from "../../../../../static/Group 505.png";
import "./linkedlnresultbox.css";
import Tooltip from "@material-ui/core/Tooltip";

function LinkedlnResultbox({ resultText, onDelete, index }) {
  const [readOnly, setReadOnly] = useState("false");
  const [resultBoxText, setResultBoxText] = useState(resultText);
  return (
    <div className="linkedlnresultbox">
      <div className="linkedlnresultbox__body">
        {" "}
        <div className="linkedlnresultbox__container">
          <div className="linkedlnresultbox__header">
            <div className="blurbg"></div>
            <img src={Mainlogo} alt="logo" />
            <div className="linkedlnresultbox__header__info">
              <p>
                {" "}
                <b> Well Written</b>
              </p>
              <p>2426 followers</p>
              <p>Promoted</p>
            </div>
          </div>
          <div
            onInput={(e) => {
              setResultBoxText(e.target.innerText);
            }}
            contentEditable={readOnly}
            className="linkedlnresultbox__textbox"
          >
            {resultText}
          </div>
          <div className="linkedlnresultbox__img_container">
            <img className="linkedlnposter" src={Linkedlnposter} alt="" />
          </div>
          <div className="linkedlnresultbox__comments">
            <img src={Icon1} alt="" />
            <img src={Icon2} alt="" />
            <img src={Icon3} alt="" />
            16 .<span> 7 comments</span>
          </div>
          <hr />
          <div className="linkedlnresultbox__icons">
            <div className="blurbg"></div>
            <div className="linkedlnresultbox__icon linkedlnresultbox__icon1 ">
              <ThumbUpAltOutlinedIcon /> <span>Like</span>
            </div>
            <div className="linkedlnresultbox__icon">
              <MessageIcon />
              <span>Comment</span>{" "}
            </div>
            <div className="linkedlnresultbox__icon">
              <img className="MuiSvgIcon-root" src={Linkedlnshare} alt="icon" />
              <span>Share</span>
            </div>
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
                {" "}
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

export default LinkedlnResultbox;

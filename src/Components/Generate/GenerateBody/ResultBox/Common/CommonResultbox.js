import React, { useState } from "react";
import "./commonresultbox.css";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ReportIcon from "@material-ui/icons/Report";
import { IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

function CaptionResultbox({ resultText, onDelete, index }) {
  const [readOnly, setReadOnly] = useState("false");
  const [resultBoxText, setResultBoxText] = useState(resultText);
  return (
    <div className="captionsresultbox">
      <div
        onInput={(e) => {
          setResultBoxText(e.target.innerText);
        }}
        contentEditable={readOnly}
        className="captionsresultbox__textbox"
      >
        {resultText}
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

export default CaptionResultbox;

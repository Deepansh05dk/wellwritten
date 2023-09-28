import React, { useState } from "react";
import "./googleadresultbox.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ReportIcon from "@material-ui/icons/Report";
import { IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function GoogleAdResultBox({ resultText, onDelete, index }) {
  const [readOnly, setReadOnly] = useState("false");
  const [resultBoxTextContent, setResultBoxTextContent] = useState(resultText);
  const [resultBoxTextHeadline, setResultBoxTextHeadline] = useState(
    " Google Ads - Drive Traffic To Your Website"
  );
  const [copyContentType, setCopyContentType] = useState("title");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="googleadresultbox">
      <div className="googleadresultbox__body">
        <div className="googleadresultbox__header">
          <div className="blurbg"></div>
          <b>Ad.</b> www.google.com/
          <ArrowDropDownIcon />
          1800 572 8317{" "}
        </div>
        <div className="googleadresultbox__maintextbox">
          <h5
            onInput={(e) => {
              setResultBoxTextHeadline(e.target.innerText);
            }}
            contentEditable={readOnly}
            className="websitelink"
          >
            Google Ads - Drive Traffic To Your Website
          </h5>
          <div
            onInput={(e) => {
              setResultBoxTextContent(e.target.innerText);
            }}
            contentEditable={readOnly}
            className="googleadresultbox__textbox"
          >
            {resultText}
          </div>
        </div>
      </div>

      <div className="resultbox__content__footer">
        <div className="resultbox__content__characters">
          {" "}
          <select className="resultbox_content_select">
            <option value="characters">Headline</option>
            <option value="characters">Content</option>
          </select>
          <span className="resultbox_content__length">250</span>
        </div>
        <hr></hr>
        <div className="resultbox_content_icons">
          <div className="resultbox_content_icons_left">
            <Tooltip title="copy">
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(e);
                  if (copyContentType === "body") {
                    navigator.clipboard.writeText(resultBoxTextHeadline);
                  } else if (copyContentType !== "") {
                    navigator.clipboard.writeText(resultBoxTextContent);
                  }
                }}
              >
                <i className="material-icons custom resultbox_content_icon">
                  content_copy
                </i>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={(e) => {
                  e.preventDefault();
                  setCopyContentType("title");
                  handleClose();
                }}
              >
                Title
              </MenuItem>
              <MenuItem
                onClick={(e) => {
                  e.preventDefault();
                  setCopyContentType("meta");
                  handleClose();
                }}
              >
                Meta
              </MenuItem>
            </Menu>
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

export default GoogleAdResultBox;

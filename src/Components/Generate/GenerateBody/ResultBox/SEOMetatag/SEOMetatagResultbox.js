import React, { useState } from "react";
import "./seometatagresultbox.css";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ReportIcon from "@material-ui/icons/Report";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
function SEOMetatagResultbox({ resultText, onDelete, index }) {
  const [readOnly, setReadOnly] = useState("false");
  const [resultBoxTextMeta, setResultBoxTextMeta] = useState(resultText);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [resultBoxTextTitle, setResultBoxTextTitle] = useState(
    "<title>React App</title>"
  );
  const [copyContentType, setCopyContentType] = useState("");
  return (
    <div className="seometatagresultbox">
      <div className="seometatagresultbox__body">
        <div className="seometatagresultbox__body_container">
          <div className="seometatagresultbox__content">
            <div className="blurbg"></div>
            <p>www.google.com/</p>
            <h5 className="websitelink">
              Google Ads - Drive Traffic To Your Website
            </h5>
            <p>
              Google ads give you control over your advertising budget. Set a
              monthly budget cap, and never go over it. Plus, you can pause or
              adjust your spend anytime.
            </p>
          </div>
          <div className="seometatagresultbox__textbox">
            <div
              onInput={(e) => {
                setResultBoxTextTitle(e.target.innerText);
              }}
              contentEditable={readOnly}
              className="seometatagresultbox__textbox__titletag"
            >
              {"<title>React App</title>"}
            </div>
            <br />
            <div
              onInput={(e) => {
                setResultBoxTextMeta(e.target.innerText);
              }}
              contentEditable={readOnly}
              className="seometatagresultbox__textbox__metatag"
            >
              {resultText}
            </div>
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
            <Tooltip title="Copy">
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(e);
                  if (copyContentType === "meta") {
                    navigator.clipboard.writeText(resultBoxTextTitle);
                  } else if (copyContentType !== "") {
                    navigator.clipboard.writeText(resultBoxTextMeta);
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

export default SEOMetatagResultbox;

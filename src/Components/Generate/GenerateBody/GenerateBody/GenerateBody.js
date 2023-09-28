import React, { useState, useEffect } from "react";
import "./generatebody.css";
import Sidebar from "../GenerateSidebar/MainSidebar/GenerateSidebar";
import ResultBox from "../../GenerateBody/ResultBox/MainResultBox/ResultBox";
import ShareIcon from "@material-ui/icons/Share";
import GetAppIcon from "@material-ui/icons/GetApp";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Axios from "../../../../config/Axios";

function MainSoftware({ resultBox, sidebar }) {
  const [result, setResult] = useState([
    { text: "dummytext", index: 1 },
    { text: "dummytext", index: 2 },
    { text: "dummytext", index: 3 },
    { text: "dummytext", index: 4 },
  ]);

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleClick = (e, index) => {
    const { checked } = e.target;
    setIsCheck([...isCheck, index]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== index));
    }
  };

  const onDelete = (index) => {
    setResult(
      result.filter((i) => {
        return i.index !== index;
      })
    );
  };

  useEffect(async () => {
    await Axios.post(
      "/generation/tagline",
      {
        prompt: "Generating AI based output",
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwZDFmNGQxMjkwZWU4NDRlODU5MjBlOCIsIm5hbWUiOiJBaG1hZCBBc2hyYWYifSwiaWF0IjoxNjI0MzcyNDMzfQ.Us3xOcLhUJu-0gm0SjrqmIJkKUeb5DaIOGvcsp0at_U",
        },
      }
    )
      .then(function (response) {
        console.log(response.data.choices);
      })
      .catch(function (error) {});
  }, []);

  return (
    <div className="mainsoftware">
      <input className="tocheck" type="checkbox"></input>
      <div className="direction_arrow_container">
        <div>
          <ArrowForwardIosIcon className="direction_arrow" />
        </div>
      </div>
      <Sidebar sidebar={sidebar} />
      <div className="mainsoftware__body">
        <div className="mainsoftware__body__header">
          <p>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isCheckAll}
                  onChange={(e) => {
                    setIsCheckAll(e.target.checked);
                    !isCheckAll
                      ? setIsCheck(result.map((item) => item.index))
                      : setIsCheck([]);
                  }}
                  color="default"
                />
              }
              label="Select All"
            />
          </p>
          <div className="mainsoftware__body__header_icons">
            <Tooltip title="Bookmark">
              <IconButton>
                {" "}
                <BookmarkIcon className="header_icons" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton>
                {" "}
                <DeleteIcon className="header_icons" />
              </IconButton>
            </Tooltip>
            <span className="header_icons">|</span>
            <Tooltip title="Share">
              <IconButton>
                {" "}
                <ShareIcon className="header_icons" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Download">
              <IconButton>
                {" "}
                <GetAppIcon className="header_icons" />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="mainsoftware__body__content">
          {result?.map((item) => {
            return (
              <ResultBox
                resultBox={resultBox}
                key={item.index}
                resultText={item.text}
                onDelete={onDelete}
                index={item.index}
                handleClick={handleClick}
                checked={isCheck.includes(item.index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainSoftware;

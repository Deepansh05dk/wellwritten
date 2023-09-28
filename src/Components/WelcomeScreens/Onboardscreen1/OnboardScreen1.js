import React, { useState, useContext, useEffect } from "react";
import "./onboardscreen1.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { FormControlLabel, FormControl } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { Statecontext } from "../../../context/DataProvider";
import CountryInput from "./CountryInput/CountryInput";
import { useHistory } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";

function Onboardscreen1() {
  const [companyName, setCompanyName] = useState("");
  const history = useHistory();
  const [isSelfEmployed, setIsSelfEmployed] = useState(false);
  const [optionClasses, setOptionClass] = useState([
    "onboardscreen__body__option",
    "onboardscreen__body__option",
    "onboardscreen__body__option",
    "onboardscreen__body__option",
    "onboardscreen__body__option",
  ]);
  const [industry, setIndustry] = useState("");
  const [country, setCountry] = useState("");
  const [organizationSize, setOrganizationSize] = useState({});
  const [state, dispatch] = useContext(Statecontext);

  const handleOptionClass = (e, i, value) => {
    if (optionClasses[i] === "onboardscreen__body__option") {
      setOrganizationSize({ value: value, index: i });
      let newOptionClasses = optionClasses.map((v, index) =>
        index === i
          ? "onboardscreen__body__option onboardscreen__body__option-active"
          : "onboardscreen__body__option"
      );
      setOptionClass(newOptionClasses);
    } else {
      setOrganizationSize({});
      let newOptionClasses = [...optionClasses];
      newOptionClasses[i] = "onboardscreen__body__option";
      setOptionClass(newOptionClasses);
    }
  };

  useEffect(() => {
    setCompanyName(
      state.inputDetails.initialDetails.organization
        ? state.inputDetails.initialDetails.organization
        : ""
    );
    setIsSelfEmployed(
      state.inputDetails.initialDetails.isSelfEmployed
        ? state.inputDetails.initialDetails.isSelfEmployed
        : false
    );
    setIndustry(
      state.inputDetails.initialDetails.industry
        ? state.inputDetails.initialDetails.industry
        : ""
    );
    setOrganizationSize(
      state.inputDetails.initialDetails.organizationSize
        ? state.inputDetails.initialDetails.organizationSize
        : {}
    );
    setCountry(
      state.inputDetails.initialDetails
        ? state.inputDetails.initialDetails.country
        : ""
    );
    setOptionClass(
      state.inputDetails.initialDetails.organizationSize
        ? optionClasses.map((v, index) =>
            index === state.inputDetails.initialDetails.organizationSize.index
              ? "onboardscreen__body__option onboardscreen__body__option-active"
              : "onboardscreen__body__option"
          )
        : optionClasses.map((i) => "onboardscreen__body__option")
    );
  }, []);

  return (
    <div className="onboardscreen1">
      <div className="trackbars">
        <div className=" trackbar trackbar1"></div>
        <div className=" trackbar trackbar2"></div>
        <div className="trackbar trackbar3"></div>
        <div className="trackbar trackbar4"></div>
      </div>
      <div className="onboardscreen1__body">
        <h2>Let's begin with some details!</h2>
        <div className="companyname__input">
          <TextField
            required
            fullWidth
            id="outlined-required"
            label="Company Name"
            variant="outlined"
            margin="dense"
            value={companyName || ""}
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isSelfEmployed || false}
                onChange={(e) => {
                  setIsSelfEmployed(e.target.checked);
                }}
              />
            }
            label="Self Employed"
          />
        </div>
        <div className="organisationsize__input">
          <h3>Organisation Size</h3>
          <div className="organisationsize__input__options">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleOptionClass(e, 0, "1-10");
              }}
              className={optionClasses[0]}
            >
              1-10
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleOptionClass(e, 1, "11-50");
              }}
              className={optionClasses[1]}
            >
              11-50
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleOptionClass(e, 2, "51-250");
              }}
              className={optionClasses[2]}
            >
              51-250
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleOptionClass(e, 3, "251-500");
              }}
              className={optionClasses[3]}
            >
              251-500
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleOptionClass(e, 4, "500+");
              }}
              className={optionClasses[4]}
            >
              500 +
            </button>
          </div>
        </div>

        <div>
          {" "}
          <FormControl margin="dense" variant="outlined" fullWidth>
            {" "}
            <InputLabel htmlFor="outlined-age-native-simple">
              Industry
            </InputLabel>
            <Select
              onChange={(e) => {
                setIndustry(e.target.value);
              }}
              value={industry || ""}
              label="Industry"
              inputProps={{
                name: "industry",
                id: "outlined-age-native-simple",
              }}
            >
              <MenuItem aria-label="None" value="" />
              <MenuItem value={"Ecommerce"}>Ecommerce</MenuItem>
              <MenuItem value={"Education"}>Education</MenuItem>
              <MenuItem value={"Fashion and Lifestyle"}>
                Fashion and Lifestyle
              </MenuItem>
              <MenuItem value={"Food and Beverage"}>Food and Beverage</MenuItem>
              <MenuItem value={"Grocery"}>Grocery</MenuItem>
              <MenuItem value={"IT and Software"}>IT and Software</MenuItem>
              <MenuItem value={"Healthcare"}>Healthcare</MenuItem>
              <MenuItem value={"Services"}>Services</MenuItem>
              <MenuItem value={"Web Designing /Developement"}>
                Web Designing /Developement
              </MenuItem>
              <MenuItem value={"Accounting Services"}>
                Accounting Services
              </MenuItem>
              <MenuItem value={"Ad/Coupons/Deals Services"}>
                Ad/Coupons/services
              </MenuItem>
              <MenuItem value={"Automotive Repair Shops"}>
                Automotive Repair Shops
              </MenuItem>
              <MenuItem value={"Cab Service"}>Cab Service</MenuItem>
              <MenuItem value={"Caterers"}>Caterers</MenuItem>
              <MenuItem value={"Charity"}>Charity</MenuItem>
              <MenuItem value={"Computer Programming /Data Processing"}>
                Computer Programming /Data Processing
              </MenuItem>
              <MenuItem value={"Consulting / PR services"}>
                Consulting / PR services
              </MenuItem>
              <MenuItem value={"Financial Service"}>Financial Service</MenuItem>
              <MenuItem value={"Gaming"}>Gaming</MenuItem>
              <MenuItem value={"General Merchandise Stores"}>
                General Merchandise Stores
              </MenuItem>
              <MenuItem value={"Government Bodies"}>Government Bodies</MenuItem>
              <MenuItem value={"Health and Beauty Spas"}>
                Health and Beauty Spas
              </MenuItem>
              <MenuItem value={"House and Real Estate"}>
                House and Real Estate
              </MenuItem>
              <MenuItem value={"Logistics"}>Logistic</MenuItem>
              <MenuItem value={"Media and Entertainment"}>
                Media and Entertainment
              </MenuItem>
              <MenuItem value={"Not for Profit"}>Not for Profit</MenuItem>
              <MenuItem value={"Others"}>Others</MenuItem>
              <MenuItem value={"Platform as Service"}>
                Platform as Service
              </MenuItem>
              <MenuItem value={"Real Estate Agents/Rentals"}>
                Real Estate Agents/Rentals
              </MenuItem>
              <MenuItem value={"Software as Service"}>
                Software as Service
              </MenuItem>
              <MenuItem value={"Service Center"}>Service Center</MenuItem>
              <MenuItem value={"Social"}>Social</MenuItem>
              <MenuItem value={"Pre / Post Paid / Telecom Services"}>
                Pre/Post Paid / Telecomservices
              </MenuItem>
              <MenuItem value={"Tours and Travels"}>Tours and Travels</MenuItem>
              <MenuItem value={"Transport"}>Transport</MenuItem>
              <MenuItem value={"Utilities-General"}>Utilities-General</MenuItem>
              <MenuItem value={"Utilities-Electric,Gas,Water,Oil"}>
                Utilities-Electric,Gas,Water,Oil
              </MenuItem>
            </Select>
          </FormControl>
          <CountryInput setCountry={setCountry} country={country} />
        </div>

        <div className="onboardscreen1__submitbutton">
          {" "}
          <Button
            className="next hover__backgroundchange__buttons"
            onClick={(e) => {
              e.preventDefault();
              // if (companyName && industry && country) {
              dispatch({
                type: "ADD USER INITIAL DETAILS",
                item: {
                  industry: industry,
                  organization: companyName,
                  isSelfEmployed: isSelfEmployed,
                  country: country,
                  organizationSize: organizationSize,
                },
              });
              let initialDetails = JSON.parse(
                sessionStorage.getItem("initialDetails")
              );
              sessionStorage.setItem(
                "initialDetails",
                JSON.stringify({
                  ...(initialDetails ? initialDetails : {}),
                  industry: industry,
                  organization: companyName,
                  isSelfEmployed: isSelfEmployed,
                  country: country,
                  organizationSize: organizationSize,
                })
              );
              history.push("/welcome/screen2");
            }}
            variant="outlined"
            size="small"
          >
            {" "}
            <span>Next</span> <ArrowForwardIosIcon fontSize="small" />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Onboardscreen1;

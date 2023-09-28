import React, { useReducer, createContext } from "react";
import combineReducers from "react-combine-reducers";
import inputDetailsReducer from "./Reducers/InputDetailsReducer";
import userDetailsReducer from "./Reducers/UserDetailsReducer";

// input details initial state
const inputDetails = {
  initialDetails: sessionStorage.getItem("initialDetails")
    ? JSON.parse(sessionStorage.getItem("initialDetails"))
    : {},
  workspaceDetails: {},
};

// user details initial state
const userDetails = {
  user: sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : null,
  token: sessionStorage.getItem("access-token")
    ? sessionStorage.getItem("access-token")
    : null,
  userWorkspaces: [],
  userFolders: [],
  userProfile: {},
  currentWorkspace: sessionStorage.getItem("currWork")
    ? JSON.parse(sessionStorage.getItem("currWork"))
    : null,
};

const [reducerCombined, initialStateCombined] = combineReducers({
  inputDetails: [inputDetailsReducer, inputDetails],
  userDetails: [userDetailsReducer, userDetails],
  // ...
});

export const Statecontext = createContext();
export const DataProvider = ({ children }) => {
  return (
    <Statecontext.Provider
      value={useReducer(reducerCombined, initialStateCombined)}
    >
      {children}
    </Statecontext.Provider>
  );
};

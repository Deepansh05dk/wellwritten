const inputDetailsReducer = (state, action) => {
  switch (action.type) {
    case "ADD USER INITIAL DETAILS":
      let initialdetails = state.initialDetails;
      return {
        ...state,
        initialDetails: { ...initialdetails, ...action.item },
      };
    case "ADD NEW WORKSPACE DETAILS":
      console.log(state);
      return {
        ...state,
        workspaceDetails: action.item,
      };
    default:
      return state;
  }
};

export default inputDetailsReducer;

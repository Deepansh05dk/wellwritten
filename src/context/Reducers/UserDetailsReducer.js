const userDetailsReducer = (state, action) => {
  switch (action.type) {
    case "ADD USER":
      return {
        ...state,
        user: action.item,
      };
    case "ADD TOKEN":
      return {
        ...state,
        token: action.item,
      };
    case "ADD USER WORKSPACES":
      return {
        ...state,
        userWorkspaces: action.item,
      };
    case "ADD USER FOLDERS":
      return {
        ...state,
        userFolders: action.item,
      };
    case "ADD USER PROFILE":
      return {
        ...state,
        userProfile: action.item,
      };
    case "ADD CURRENT WORKSPACE":
      return {
        ...state,
        currentWorkspace: action.item,
      };
    default:
      return state;
  }
};
export default userDetailsReducer;

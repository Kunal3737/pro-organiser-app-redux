const initialState = {
  teamMembers: null,
  teamMembersError: null,
};

const teamMembersReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "TEAM_MEMBERS":
      return {
        ...state,
        teamMembers: action.payload,
      };
    case "TEAM_MEMBERS_ERROR":
      return {
        ...state,
        teamMembersError: action.payload,
      };
    default:
      return state;
  }
};

export default teamMembersReducer;

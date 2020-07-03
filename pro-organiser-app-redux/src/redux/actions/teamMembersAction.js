const axios = require("axios").default;

const teamMembersAction = (boardId) => {
  return (dispatch) => {
    axios
      .get(
        `https://pro-organizer-app-redux.firebaseio.com/boards/${boardId}.json`
      )
      .then((response) => {
        console.log(response.data.boardTeam);
        dispatch({
          type: "TEAM_MEMBERS",
          payload: response.data.boardTeam,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: "TEAM_MEMBERS_ERROR",
          payload: error.message,
        });
      });
  };
};

export default teamMembersAction;

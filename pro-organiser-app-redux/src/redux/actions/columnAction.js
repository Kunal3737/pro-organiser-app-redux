const axios = require("axios").default;

const columnAction = (boardId) => {
  //   console.log(column_name);
  //   console.log(boardId);
  return (dispatch) => {
    axios
      .get(
        `https://pro-organizer-app-redux.firebaseio.com/boards/${boardId}/column.json`
      )
      .then((response) => {
        console.log("RESPONSE", response.data);
        dispatch({
          type: "COLUMN_RESPONSE",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: "COLUMN_RESPONSE_ERROR",
          payload: error.message,
        });
      });
  };
};

export default columnAction;

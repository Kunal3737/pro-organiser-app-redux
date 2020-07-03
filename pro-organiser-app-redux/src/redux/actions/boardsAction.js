import columnAction from "./columnAction";
const axios = require("axios").default;

const boardsAction = (column_name, boardId) => {
  console.log(column_name);
  console.log(boardId);
  return (dispatch) => {
    axios
      .post(
        `https://pro-organizer-app-redux.firebaseio.com/boards/${boardId}/column.json`,
        {
          column_name: column_name,
        }
      )
      .then((response) => {
        console.log("RESPONSE", response.data);
        dispatch(columnAction(boardId));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default boardsAction;

import homeBoardsAction from "./homeBoardsAction";

const axios = require("axios").default;

const createBoardAction = (dataReceived) => {
  return (dispatch) => {
    axios
      .post(
        `https://pro-organizer-app-redux.firebaseio.com/boards.json`,
        dataReceived
      )
      .then((response) => {
        console.log(response.data);
        dispatch(homeBoardsAction());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default createBoardAction;

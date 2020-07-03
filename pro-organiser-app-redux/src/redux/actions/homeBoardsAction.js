const axios = require("axios").default;

const homeBoardsAction = () => {
  return (dispatch) => {
    axios
      .get(`https://pro-organizer-app-redux.firebaseio.com/boards.json`)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "HOME_BOARD",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: "HOME_BOARD_ERROR",
          payload: error.message,
        });
      });
  };
};

export default homeBoardsAction;

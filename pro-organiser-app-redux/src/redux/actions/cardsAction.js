const axios = require("axios").default;

const cardsAction = (boardId, columnId) => {
  console.log(boardId);
  console.log(columnId);
  return (dispatch) => {
    axios
      .get(
        `https://pro-organizer-app-redux.firebaseio.com/boards/${boardId}/column/${columnId}/cards.json`
      )
      .then((response) => {
        console.log("RESPONSE", response.data);
        response.data && dispatch({
          type: "CARD_RESPONSE",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "CARD_RESPONSE_ERROR",
          payload: error.message,
        });
      });
  };
};

export default cardsAction;

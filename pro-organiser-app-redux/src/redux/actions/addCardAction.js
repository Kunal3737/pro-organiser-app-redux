import cardsAction from './cardsAction';
const axios = require("axios").default;

const addCardAction = (
  title,
  Team,
  description,
  due_date,
  currentColumnId,
  currentboardId
) => {
  console.log(title);
  console.log(Team);
  console.log(description);
  console.log(due_date);
  console.log(currentColumnId);
  console.log(currentboardId);
  return (dispatch) => {
    axios
      .post(
        `https://pro-organizer-app-redux.firebaseio.com/boards/${currentboardId}/column/${currentColumnId}/cards.json`,
        {
          Title: title,
          Members: Team,
          Description: description,
          Due_Date: due_date,
        }
      )
      .then((response) => {
        console.log(response.data);
        dispatch(cardsAction(currentboardId, currentColumnId));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export default addCardAction;

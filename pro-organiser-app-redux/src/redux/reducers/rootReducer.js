import { combineReducers } from "redux";
// import simpleReducer from './simpleReducer';
import homeBoardReducer from "./homeBoardReducer";
import columnBoardReducer from "./columnBoardReducer";
import teamMembersReducer from "./teamMembersReducer";
import cardsReducer from "./cardsReducer";

export default combineReducers({
  homeBoardReducer,
  columnBoardReducer,
  teamMembersReducer,
  cardsReducer,
});

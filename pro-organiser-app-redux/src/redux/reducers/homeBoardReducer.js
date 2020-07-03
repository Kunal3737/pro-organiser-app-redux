const initialState = {
  createBoardData: [],
  createBoardError: null,
};

const homeBoardReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "HOME_BOARD":
      return {
        ...state,
        createBoardData: action.payload,
      };
    case "HOME_BOARD_ERROR":
      return {
        ...state,
        createBoardError: action.payload,
      };
    default:
      return state;
  }
};

export default homeBoardReducer;

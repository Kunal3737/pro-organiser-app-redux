const initialState = {
  columnData: [],
  columnDataError: "",
};

const columnBoardReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "COLUMN_RESPONSE":
      return {
        ...state,
        columnData: action.payload,
      };
    case "COLUMN_RESPONSE_ERROR":
      return {
        ...state,
        columnDataError: action.payload,
      };
    default:
      return state;
  }
};

export default columnBoardReducer;

const initialState = {
  cardsData: [],
  cardsDataError: "",
};

const cardsReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "CARD_RESPONSE":
      return {
        ...state,
        cardsData: action.payload,
      };
    case "CARD_RESPONSE_ERROR":
      return {
        ...state,
        cardsDataError: action.payload,
      };
    default:
      return state;
  }
};

export default cardsReducer;

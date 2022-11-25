import { CREATE_WILL, REMOVE_WILL } from "../actions/index";

const initialState = [];
export const willReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WILL:
      return [...state, action.payload];
    case REMOVE_WILL:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  };
};

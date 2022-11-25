import { combineReducers } from "redux";
import { willReducer } from "./will";

const rootReducer = combineReducers({
  willReducer,
});

export default rootReducer;

import { combineReducers } from "redux";

import booksReducer from "./books/booksReducer";

const rootReducer = combineReducers({
  booksStore: booksReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import authorsReducer from "./authorsReducer";
import usersReducer from "./usersReducer";
import booksReducer from "./booksReducer";

export default combineReducers({
  authors: authorsReducer,
  users: usersReducer,
  books: booksReducer
});

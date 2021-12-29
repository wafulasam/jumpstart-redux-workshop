// all reducers
import { combineReducers } from "redux";
import { notesReducer } from "./notesReducer";
import { cartReducer } from "./cartReducer";
import { productsReducer } from "./productsReducer";

export const rootReducer = combineReducers({
   notesReducer,
   cartReducer,
   productsReducer
});
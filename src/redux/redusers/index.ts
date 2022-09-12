import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

export const reducer = combineReducers({
  login: userReducer,
  products: productReducer
});

export type RootState = ReturnType<typeof reducer>;
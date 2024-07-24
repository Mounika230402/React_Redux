import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { singleReducers } from "./combine_reducder";
import { thunk } from "redux-thunk";

export const Reducerstore = createStore(
  singleReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

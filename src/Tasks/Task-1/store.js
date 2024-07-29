import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { singleReducers } from "./combine_reducder";
import { thunk } from "redux-thunk";
// import { Reducer } from "./reducer";
import { singleReducers } from "../../redux/combine_reducder";

export const Reducerstore = createStore(
  singleReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
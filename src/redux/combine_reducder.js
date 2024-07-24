import { combineReducers } from "redux";
import { Reducer } from "./products/reducer";
import { Reducers } from "./candies/reducer";
import { cartReducer } from "./cart/reducer";

export const singleReducers=combineReducers({
    candies:Reducers,
    products:Reducer,
    cart:cartReducer
})
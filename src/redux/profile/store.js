import { legacy_createStore } from "redux";
import { Profile_Reducer } from "./reducer";

export const Profile_store=legacy_createStore(Profile_Reducer)
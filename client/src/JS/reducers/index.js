import { combineReducers } from "redux";
import { userReducer } from "./user";
import {pubReducer} from "./pub"

export const rootReducer = combineReducers({ userReducer,pubReducer });

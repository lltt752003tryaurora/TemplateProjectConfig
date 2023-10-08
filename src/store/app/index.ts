import { combineReducers } from "@reduxjs/toolkit";
import demo from "./demo";

const createReducer = combineReducers({
    demo,
});

export default createReducer;
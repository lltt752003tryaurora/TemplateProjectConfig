import { combineReducers } from "@reduxjs/toolkit";
import app from './app'

interface AsyncReducersProps {
    [key: string]: any;
}

const rootReducer = {
    app,
}

const createReducer = (asyncReducer?: AsyncReducersProps) => combineReducers({
    ...asyncReducer,
    ...rootReducer,
});

export default createReducer;
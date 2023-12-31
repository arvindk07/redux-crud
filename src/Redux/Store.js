import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootreducer = combineReducers({ user: Reducer });

const store = configureStore({
  reducer: rootreducer,
  middleware: [thunk, logger],
});

export default store;

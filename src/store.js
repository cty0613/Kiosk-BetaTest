import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { Reducer } from "./redux/reducer";

export const store = createStore(Reducer, applyMiddleware(logger));
export default store;
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import adressReducer from "./reducers";

const rootReducer = combineReducers({adressReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));


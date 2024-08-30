import { createStore } from "redux";
import { combineReducers } from "redux";
import reducer from "./redux/reducer";

const rootReducer = combineReducers({
  cart: reducer,
});

const store = createStore(rootReducer);

export default store;

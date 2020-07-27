import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { drawerReducer } from "../reducer/drawerReducer";
import { shareReducer } from "../reducer/shareReducer";

const initialState = {};
const reducer = combineReducers({
  drawerVisible: drawerReducer,
  share: shareReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

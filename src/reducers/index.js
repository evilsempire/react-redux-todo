import { combineReducers } from "redux";

//import reducers
import todo from "./todo";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({todo,visibilityFilter})
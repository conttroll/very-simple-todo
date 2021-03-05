import {combineReducers, createStore} from "redux";
import todoReducer from "./todoReducer";
import activeReducer from "./activeReducer";
import allReducer from "./allReducer";

const reducers = combineReducers({
    allTodos: allReducer,
    active: activeReducer,
    // completed: completedReducer,
    toDo: todoReducer
})

const store = createStore(reducers);

window.store = store;

export default store;
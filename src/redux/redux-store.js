import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./users-reducer";

let reducers = combineReducers({
    profile:profileReducer,
    messages:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:userReducer
});


let store = createStore(reducers);


export default store;
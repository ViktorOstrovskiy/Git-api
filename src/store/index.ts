import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./user-services/reducer";

const rootReducer = combineReducers({
  usersAll: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type Store = ReturnType<typeof rootReducer>;

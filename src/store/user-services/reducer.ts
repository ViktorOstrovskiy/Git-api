import { AllUsers } from "core/types";
import { GET_USERS, GET_USER, GET_REPOS } from "../action-types";
import { ActionTypes, IUserReducer } from "../types";

const initialState: IUserReducer = {
  users: null,
  user: null,
  repos: null,
};

const userReducer = (
  state = initialState,
  action: ActionTypes
): IUserReducer => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload.items };

    case GET_USER:
      return { ...state, user: payload };

    case GET_REPOS:
      return { ...state, repos: payload };

    default:
      return state;
  }
};

export default userReducer;

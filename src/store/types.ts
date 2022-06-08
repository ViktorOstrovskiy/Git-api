import {
  AllRepositories,
  AllUsers,
  AllUsersResponse,
  OneUser,
} from "../core/types";
import { GET_USERS, GET_USER, GET_REPOS } from "./action-types";

export type IUserReducer = {
  users: Array<AllUsers> | null;
  user: OneUser | null;
  repos: Array<AllRepositories> | null;
};

interface IUserAll {
  type: typeof GET_USERS;
  payload: AllUsersResponse;
}

interface IUserOne {
  type: typeof GET_USER;
  payload: OneUser;
}

interface IRepository {
  type: typeof GET_REPOS;
  payload: Array<AllRepositories>;
}

export type ActionTypes = IUserAll | IUserOne | IRepository;

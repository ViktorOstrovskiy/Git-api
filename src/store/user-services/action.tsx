import { API } from "../../core/api";
import { GET_USERS, GET_USER, GET_REPOS } from "../action-types";
import { Dispatch } from "redux";
import { AllRepositories, AllUsers, OneUser } from "../../core/types";

export const getUsers =
  (user: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const { data } = await API.get(`search/users?q=${user}`);

      const getusers = data;
      dispatch(setUsers(getusers));
    } catch (err) {
      console.log("Error", err);
    }
  };

export const getUser =
  (user: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const { data } = await API.get(`users/${user}`);

      const getuser = data;
      dispatch(setUser(getuser));
    } catch (err) {
      console.log("Error", err);
    }
  };

export const getRepos =
  (user: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const { data } = await API.get(`users/${user}/repos`);

      const getRepos = data;
      dispatch(setRepos(getRepos));
    } catch (err) {
      console.log("Error", err);
    }
  };

const setUsers = (data: AllUsers) => ({
  type: GET_USERS,
  payload: data,
});

const setUser = (data: OneUser) => ({
  type: GET_USER,
  payload: data,
});

const setRepos = (data: AllRepositories) => ({
  type: GET_REPOS,
  payload: data,
});

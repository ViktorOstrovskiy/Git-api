import { Store } from "..";
import { AllRepositories, AllUsers, OneUser } from "../../core/types";

export const AllUserSelector = (state: Store): Array<AllUsers> =>
  state.usersAll.users as Array<AllUsers>;
export const OneUserSelector = (state: Store): OneUser =>
  state.usersAll.user as OneUser;
export const RepositoriesSelector = (state: Store): Array<AllRepositories> =>
  state.usersAll.repos as Array<AllRepositories>;

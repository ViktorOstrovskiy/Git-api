import { FC } from "react";
// types
import { AllUsers } from "core/types";
// styles
import styles from "./UserList.module.scss";

type UserListProps = { user: AllUsers };

const UserList: FC<UserListProps> = ({ user }) => (
  <div className={styles.wrapper}>
    <img src={user.avatar_url} alt="user" />
    <p>{user.login}</p>
    <span>Repo:##</span>
  </div>
);

export default UserList;

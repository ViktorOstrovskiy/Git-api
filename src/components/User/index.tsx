import { FC } from "react";
//types
import { OneUser } from "core/types";
// styles
import styles from "./User.module.scss";
import { Link } from "react-router-dom";

type UserProps = { user: OneUser };

const User: FC<UserProps> = ({ user }) => (
  <div className={styles.wrapper}>
    <Link to="/">
      <button>Back to search</button>
    </Link>
    <div className={styles.info}>
      <div>
        <img src={user.avatar_url} alt="user" />
      </div>
      <div>
        <div className={styles.info_text}>
          <h4>Name:</h4>
          <p>{user.login}</p>
        </div>
        <div className={styles.info_text}>
          <h4>Email:</h4>
          <p>{user.email !== null ? user.email : "no emails"}</p>
        </div>
        <div className={styles.info_text}>
          <h4>Location:</h4>
          <p>{user.location !== null ? user.location : "no location"}</p>
        </div>

        <div className={styles.info_text}>
          <h4>Followers:</h4>
          <p>{user.followers}</p>
        </div>
        <div className={styles.info_text}>
          <h4>Following:</h4>
          <p>{user.following}</p>
        </div>
      </div>
    </div>
    <div className={styles.biography}>
      <h3>Biography:</h3>
      <span>{user.bio !== null ? user.bio : "no biography"}</span>
    </div>
  </div>
);

export default User;

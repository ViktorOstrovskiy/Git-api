import { FC, SetStateAction, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
// actions
import { getRepos } from "../../store/user-services/action";
// styles
import styles from "./SearchRepositories.module.scss";

type SearchRepositoriesProps = {
  user: string;
  nameRepositories: string;
  setNameRepositories: any;
};

const SearchRepositories: FC<SearchRepositoriesProps> = ({
  user,
  nameRepositories,
  setNameRepositories,
}) => {
  //states

  // dispatch
  const dispatch: Dispatch<any> = useDispatch();

  // Effect
  useEffect(() => {
    dispatch(getRepos(user));
  }, [user]);

  // helpers
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNameRepositories(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <form>
        <input
          placeholder="Search for User`s Repositories"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeInput(e)
          }
          value={nameRepositories}
        />
      </form>
    </div>
  );
};

export default SearchRepositories;

import { FC } from "react";
// types
import { AllRepositories } from "core/types";
// styles
import styles from "./RepositoriesList.module.scss";

type RepositoriesListProps = { item: AllRepositories };

const RepositoriesList: FC<RepositoriesListProps> = ({ item }) => (
  <div className={styles.wrapper}>
    <p>{item.name}</p>
    <div>
      <p>Forks:{item.forks}</p>
      <p>Stars:{item.stargazers_count}</p>
    </div>
  </div>
);

export default RepositoriesList;

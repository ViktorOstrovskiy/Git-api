import { Dispatch, FC, useEffect, useState } from "react";
import { getUser } from "../../store/user-services/action";
import { useDispatch, useSelector } from "react-redux";
import User from "../../components/User";
import SearchRepositories from "../../components/SearchRepositories";
import { Params, useParams } from "react-router-dom";
import {
  OneUserSelector,
  RepositoriesSelector,
} from "../../store/user-services/selectors";
import { AllRepositories, OneUser } from "../../core/types";
import RepositoriesList from "components/RepositoriesList";

const SecondPage: FC = () => {
  // states
  const [nameRepositories, setNameRepositories] = useState<string>("");

  // hooks
  const { login }: Readonly<Params<string>> = useParams();

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getUser(login as string));
  }, [login]);

  // selectors
  const user: OneUser = useSelector(OneUserSelector);
  const repo: Array<AllRepositories> = useSelector(RepositoriesSelector);

  // helpers
  const searchRepositories: Array<AllRepositories> =
    repo &&
    repo.filter((el) =>
      el.name.toLowerCase().includes(nameRepositories.toLowerCase())
    );

  return (
    <div>
      {user && <User user={user} />}
      <SearchRepositories
        user={login as string}
        nameRepositories={nameRepositories}
        setNameRepositories={setNameRepositories}
      />
      {searchRepositories &&
        searchRepositories.map((item) => <RepositoriesList item={item} />)}
    </div>
  );
};

export default SecondPage;

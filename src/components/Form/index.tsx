import { FC, useCallback } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
// action
import { getUsers } from "../../store/user-services/action";
// helpers
import { debounce } from "../../core/helpers";
// styles
import styles from "./Form.module.scss";

const Form: FC = () => {
  // dispatch
  const dispatch: Dispatch<any> = useDispatch();

  // helpers
  const optimizedFn = useCallback(
    debounce((name: string) => dispatch(getUsers(name))),
    []
  );

  return (
    <div className={styles.wrapper}>
      <h1>Search</h1>
      <form>
        <input
          placeholder="Search for User"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            optimizedFn(e.target.value)
          }
        />
      </form>
    </div>
  );
};

export default Form;

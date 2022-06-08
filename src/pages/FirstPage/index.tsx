import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// components
import Form from "../../components/Form";
import UserList from "../../components/UserList";
// selectors
import { AllUserSelector } from "../../store/user-services/selectors";
// types
import { AllUsers } from "core/types";

const FirstPage = () => {
  // selectors
  const users: Array<AllUsers> = useSelector(AllUserSelector);

  return (
    <div>
      <Form />
      <div>
        {users &&
          users.map((item: AllUsers) => (
            <Link to={`user/${item.login}`}>
              <UserList user={item} key={item.id} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default FirstPage;

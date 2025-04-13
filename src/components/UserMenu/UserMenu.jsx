import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  return (
    <div className={css.userMenuWrapp}>
      <p className={css.userName}>User: {userData.name}</p>
      <button
        className={css.btnLogOut}
        onClick={() => dispatch(logOut())}
        type="button"
      >
        Logout
      </button>
    </div>
  );
}

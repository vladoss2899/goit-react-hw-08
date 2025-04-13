import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const bildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={bildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={bildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}


import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const bildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

export default function AuthNav() {
  return (
    <div className={css.authNavWrap}>
      <NavLink className={bildLinkClass} to="/register" end>
        Register
      </NavLink>
      <NavLink className={bildLinkClass} to="/login" end>
        Login
      </NavLink>
    </div>
  );
}


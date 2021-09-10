import { NavLink } from "react-router-dom";
import "./AuthNav.css";

const AuthNav = () => (
  <div className="authNav">
    <NavLink to="/register" exact className="link" activeClassName="activeLink">
      Sign up
    </NavLink>
    <NavLink to="/login" exact className="link" activeClassName="activeLink">
      Log in
    </NavLink>
  </div>
);

export default AuthNav;

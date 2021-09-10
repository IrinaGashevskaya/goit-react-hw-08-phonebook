import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import "./Navigation.css";

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav className="navigation">
      <NavLink to="/" exact className="link" activeClassName="activeLink">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className="link"
          activeClassName="activeLink"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
export default Navigation;

import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";

import "./HomeView.css";

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div className="welcome">
      <h1 className="homeView">Welcome</h1>

      <p className="home">Now you will exactly not forget your contacts!</p>

      {!isLoggedIn && (
        <p className="home">
          Please, <b>Sign up</b> or <b>Log in</b> to have access to the
          Phonebook!
        </p>
      )}
    </div>
  );
};
export default HomeView;

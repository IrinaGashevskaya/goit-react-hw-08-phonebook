import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import Button from "@material-ui/core/Button";
import defaultAvatar from "../../images/user.png";
import "./UserMenu.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className="user">
      <img src={defaultAvatar} alt="Default Avatar" width="40" className="" />
      <span className="user-name">Welcome, {name}</span>
      <Button
        color="primary"
        variant="outlined"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </div>
  );
}

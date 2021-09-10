import { useSelector, useDispatch } from "react-redux";
import { contactsActions, contactsSelectors } from "../../redux/contacts";
import "./Filter.css";
export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  return (
    <label className="label" name="filter" htmlFor="filter" value={filter}>
      Find contacts by name
      <input
        className="input-filter"
        value={filter}
        type="text"
        id="filter"
        onChange={(e) =>
          dispatch(contactsActions.filterContact(e.target.value))
        }
      />
    </label>
  );
}

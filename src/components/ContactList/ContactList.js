import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
//import { IconButton } from "@material-ui/core";

import "./ContactList.css";

function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
  const contacts = useSelector(contactsSelectors.getContacts);

  return (
    <>
      {contacts.length > 0 && (
        <ul className="list">
          {visibleContacts.map(({ id, name, number }) => (
            <li className="item" key={id}>
              <p className="name">
                {name}: {number}
              </p>
              <button
                className="button"
                type="button"
                name="delete"
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {!contacts.length && (
        <p className="contact-empty">
          Your phonebook is empty. Please add contact.
        </p>
      )}
    </>
  );
}
export default ContactList;

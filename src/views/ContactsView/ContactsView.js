import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "../../components/ContactList";
import ContactForm from "../../components/ContactForm";
import Filter from "../../components/Filter";
import { contactsOperations } from "../../redux/contacts";
import "./ContactsView.css";

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <div className="phonebook">
      <h1 className="header">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

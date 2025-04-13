import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { Helmet } from "react-helmet-async";
import { getContacts } from "../redux/contacts/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      Your Contacts:
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

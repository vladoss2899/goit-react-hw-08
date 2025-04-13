import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

export default function ContactList() {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const filterContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      {error && <Error />}
      {loading && <Loader />}
      <ul className={css.contactListWrap}>
        {filterContacts.length > 0 &&
          filterContacts.map((item) => {
            return (
              <li key={item.id}>
                <Contact name={item.name} number={item.number} id={item.id} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

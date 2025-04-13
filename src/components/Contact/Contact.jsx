import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contactWrap}>
      <div className={css.contactData}>
        <p className={css.contactName}>
          <IoPersonSharp className={css.contactIcon} />
          {name}
        </p>
        <p className={css.contactPhone}>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button
        className={css.contactBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}


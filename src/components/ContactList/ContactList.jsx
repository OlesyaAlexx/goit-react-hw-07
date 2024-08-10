import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const filter = useSelector(selectNameFilter); //повертає значення фільтра з слайсу filters.
  //Використовуємо useSelector, щоб отримати значення фільтра з Redux-стану.
  const filteredContacts = useSelector(
    (state) => selectFilteredContacts(state, filter) //беруться всі контакти і значення фільтра та повертаються лише ті контакти, які відповідають умовам фільтра.
  );
  //Якщо filteredContacts або його довжина дорівнює 0,
  // то відображається повідомлення про те, що контакти відсутні.
  if (!filteredContacts || filteredContacts.length === 0) {
    return <p>No contacts available</p>;
  }

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <li className={styles.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

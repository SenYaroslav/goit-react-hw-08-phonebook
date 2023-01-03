import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { contacts } from 'redux/contacts/selectors';
import { filter } from 'redux/contacts/selectors';

const ContactList = () => {
  const filtered = useSelector(filter);
  const { items, isLoading, error } = useSelector(contacts);

  const getVisibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filtered)
  );

  return (
    <>
      <div>
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
      </div>
      {getVisibleContacts && (
        <ul className={css.contacts__list}>
          {getVisibleContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;

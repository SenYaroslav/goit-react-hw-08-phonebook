import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { fetchAll } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { contacts } from 'redux/contacts/selectors';

const Contacts = () => {
  const { items } = useSelector(contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div
      style={{
        maxWidth: '650px',
        margin: '0 auto',
        padding: '20px',
        fontSize: '18px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      {items.length ? (
        <>
          <h2>Contacts</h2>
          <Filter title="Find contacts by name" />
          <ContactList />
        </>
      ) : (
        <h3>There is no <span style={{ color: 'rgb(214, 225, 255)'}} > CONTACTS</span> yet</h3>
      )}
    </div>
  );
};

export default Contacts;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PhoneBookForm from 'components/PhoneBookForm/PhoneBookForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Section from 'components/Section/Section';
import InputSearch from 'components/InputSearch/InputSearch';
import { getContacts, getFilter } from 'redux/contacts/contactsSelectors';
import { getAuth } from 'redux/auth/selectorsAuth';

import {
  fetchTasks,
  deleteContact,
  addContact,
  findByName,
} from 'redux/contacts/operation';
import { Loader } from 'components/Loader/Loader';

export const HomePage = () => {
  const { items: contacts, isLoading, error } = useSelector(getContacts);
  const { isAuth } = useSelector(getAuth);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const onInputContact = user => {
    if (contacts.some(contact => contact.name === user.name)) {
      return alert(`${user.name} is already in contacts.`);
    }
    dispatch(addContact(user));
  };

  const findByNameFilter = value => {
    const name = value.trim().toLocaleLowerCase();
    dispatch(findByName(name));
  };
  const onClickDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <main>
      {isAuth && (
        <>
          <Section title="PhoneBook">
            <PhoneBookForm onInputContact={onInputContact} />
          </Section>

          <Section title="Contacts">
            <InputSearch
              nameSearch="Find contacts by name"
              onSearchName={findByNameFilter}
            />
            <div
              style={{
                width: 'fit-content',
                margin: ' 0 auto',
                position: 'absolute',
                top: '10px',
                right: '10px',
              }}
            >
              {isLoading && <Loader />}
            </div>
            <p>{error}</p>
            <ContactsList
              onClickDelete={onClickDelete}
              contacts={filter === '' ? contacts : filter}
            />
          </Section>
        </>
      )}
    </main>
  );
};

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PhoneBookForm from 'components/PhoneBookForm/PhoneBookForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Section from 'components/Section/Section';
import InputSearch from 'components/InputSearch/InputSearch';
import {
  getContacts,
  getEditedContact,
  getFilter,
} from 'redux/contacts/contactsSelectors';
import { getAuth } from 'redux/auth/selectorsAuth';
import cool from '../assets/cool-background.png';

import {
  fetchTasks,
  deleteContact,
  addContact,
  updateContact,
} from 'redux/contacts/operation';
import { Loader } from 'components/Loader/Loader';
import { editContact, findByName } from 'redux/contacts/contactsSlice';

const HomePage = () => {
  const editedContact = useSelector(getEditedContact);

  const { items: contacts, isLoading, error } = useSelector(getContacts);
  const { isAuth } = useSelector(getAuth);
  let filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const onInputContact = user => {
    if (
      !editedContact &&
      contacts.some(contact => contact.name === user.name)
    ) {
      return alert(`${user.name} is already in contacts.`);
    }
    !editedContact && dispatch(addContact(user));
    editedContact && dispatch(updateContact({ id: editedContact.id, ...user }));
  };

  const findByNameFilter = value => {
    const name = value.trim().toLocaleLowerCase();
    if (!name) {
      filter = '';
    }
    filter = contacts.filter(el => el.name.toLocaleLowerCase().includes(name));
    dispatch(findByName(filter));
  };
  const onClickDelete = id => {
    dispatch(deleteContact(id));
  };
  const onClickEdit = id => {
    const contact = contacts.find(el => el.id === id);
    dispatch(editContact(contact));
  };
  return (
    <main
      style={{
        backgroundImage: `url(${cool})`,
        backgroundSize: 'cover',
        height: '100%',
      }}
    >
      {isAuth && (
        <div
          style={{
            display: `flex`,
            padding: '100px',
          }}
        >
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
              onClickEdit={onClickEdit}
              contacts={filter === '' ? contacts : filter}
            />
          </Section>
        </div>
      )}
    </main>
  );
};

export default HomePage;
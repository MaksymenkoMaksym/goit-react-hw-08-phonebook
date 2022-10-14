import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Form } from './PhoneBookForm.styled';
import { Button } from 'components/ContactsList/ContactList.styled';
import InputName from '../InputName/InputName';
import { useSelector } from 'react-redux';
import { getEditedContact } from 'redux/contacts/contactsSelectors';

const PhoneBookForm = ({ onInputContact }) => {
  const editedContact = useSelector(getEditedContact);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const reset = () => {
    setName('');
    setPhone('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    onInputContact({ name, number: phone });
    reset();
  };

  const handleChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    } else {
      setPhone(evt.target.value);
    }
  };
  useEffect(() => {
    editedContact && setName(editedContact.name);
    editedContact && setPhone(editedContact.number);
  }, [editedContact]);

  return (
    <Form onSubmit={handleSubmit}>
      <InputName
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        mainTitle="Name"
        defaultValue="Bob"
        value={name}
        handleChange={handleChange}
      />
      <InputName
        type="tel"
        name="phone"
        title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        mainTitle="Phone"
        defaultValue="+1"
        value={phone}
        handleChange={handleChange}
      />
      {editedContact ? (
        <Button type="submit">Edit Contact</Button>
      ) : (
        <Button type="submit">Add Contact</Button>
      )}
    </Form>
  );
};

PhoneBookForm.propTypes = {
  onInputContact: PropTypes.func.isRequired,
};
export default PhoneBookForm;

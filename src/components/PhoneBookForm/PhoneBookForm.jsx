import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Form } from './PhoneBookForm.styled';
import { Button } from 'components/ContactsList/ContactList.styled';
import InputName from '../InputName/InputName';

const PhoneBookForm = ({ onInputContact, contact }) => {
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const handleSubmit = e => {
    e.preventDefault();
    onInputContact({ name, number: phone });
  };
  const handleChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    } else {
      setPhone(evt.target.value);
    }
  };

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
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

PhoneBookForm.propTypes = {
  onInputContact: PropTypes.func.isRequired,
};
export default PhoneBookForm;

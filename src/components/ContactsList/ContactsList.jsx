import PropTypes from 'prop-types';

import { Button, Ul, Li } from './ContactList.styled';

const ContactsList = ({ contacts, onClickDelete, onClickEdit }) => {
  if (!contacts.length) {
    return <p>No any data</p>;
  }
  return (
    <>
      <Ul>
        {contacts.map(contact => (
          <Li key={contact.id}>
            {contact.name}:<span>{contact.number}</span>
            <div
              style={{
                display: `flex`,
                gap: '10px',
              }}
            >
              <Button type="button" onClick={() => onClickDelete(contact.id)}>
                Delete
              </Button>
              <Button type="button" onClick={() => onClickEdit(contact.id)}>
                Edit
              </Button>
            </div>
          </Li>
        ))}
      </Ul>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),

  onClickDelete: PropTypes.func.isRequired,
};

export default ContactsList;

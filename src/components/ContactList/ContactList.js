import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';

const ContactList = ({ contactArrey, onDeleteEl }) => {
  return (
    <ul>
      {contactArrey.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            name={name}
            number={number}
            deleteEl={() => onDeleteEl(id)}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactArrey: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteEl: PropTypes.func.isRequired,
};
export default ContactList;

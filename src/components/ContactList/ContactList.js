import React from 'react';

import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contactArrey, onDeleteEl }) => {
  return (
    <ul>
      {contactArrey.map(e => {
        return (
          <li className={s.serchEl} key={e.id}>
            {e.name}: {e.number}
            <button
              type="button"
              className={`${s.ripple} ${s.deletBtn}`}
              onClick={() => onDeleteEl(e.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactArrey: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteEl: PropTypes.func.isRequired,
};
export default ContactList;

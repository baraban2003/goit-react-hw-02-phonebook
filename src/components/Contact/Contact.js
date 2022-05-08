import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';

const Contact = ({ name, number, deleteEl }) => {
  return (
    <li className={s.serchEl}>
      {name}: {number}
      <button
        type="button"
        className={`${s.ripple} ${s.deletBtn}`}
        onClick={deleteEl}
      >
        Delete
      </button>
    </li>
  );
};

Contact.protoType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  deleteEl: PropTypes.func.isRequired,
};

export default Contact;

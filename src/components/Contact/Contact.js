import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';
import AddContacts from '../AddContacts';

const Contact = ({
  onChangename,
  onChangePhone,
  nameValue,
  phoneValue,
  onSubmit,
  id,
}) => {
  return (
    <div>
      <AddContacts
        onChangename={onChangename}
        onChangePhone={onChangePhone}
        nameValue={nameValue}
        phoneValue={phoneValue}
        onSubmit={onSubmit}
        id={id}
      />
      <h2 className={s.contactsTitle}>Contacts</h2>
    </div>
  );
};
Contact.propTypes = {
  onChangename: PropTypes.func.isRequired,
  onChangePhone: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
  phoneValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string,
};
export default Contact;

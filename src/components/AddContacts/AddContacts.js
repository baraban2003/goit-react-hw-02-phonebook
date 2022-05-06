import React from 'react';
import PropTypes from 'prop-types';
import s from './AddContacts.module.css';

const AddContacts = ({
  onChangename,
  onChangePhone,
  nameValue,
  phoneValue,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <h1>Phonebook</h1>
      <div className={s.searchForm}>
        <h2>Name</h2>
        <input
          className={s.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={nameValue}
          onChange={onChangename}
        />

        <h2>Number</h2>
        <input
          className={s.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phoneValue}
          onChange={onChangePhone}
        />

        <button type="submit" className={s.ripple}>
          Add contact
        </button>
      </div>
    </form>
  );
};

AddContacts.propTypes = {
  onChangename: PropTypes.func.isRequired,
  onChangePhone: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
  phoneValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddContacts;

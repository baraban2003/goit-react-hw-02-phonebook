import React from 'react';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

const SearchForm = ({ value, onChange }) => (
  <label className={s.searchBlock}>
    Find Contacts by Name
    <input
      className={s.searchInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

SearchForm.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default SearchForm;

import React, { Component } from 'react';
import Container from './Container';
import ContactList from './ContactList';
import SearchForm from './SearchForm';
import ContactForm from './ContactForm';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleEl = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(e =>
      e.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteEl = elem => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(e => e.id !== elem),
    }));
  };

  render() {
    const { contacts } = this.state;
    const visibleEl = this.getVisibleEl();

    return (
      <div>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm addContact={this.addContact} arrayContact={contacts} />

          <h2>Contacts</h2>
          <SearchForm onChange={this.changeFilter} />
          <ContactList contactArrey={visibleEl} onDeleteEl={this.deleteEl} />
        </Container>
      </div>
    );
  }
}

export default App;

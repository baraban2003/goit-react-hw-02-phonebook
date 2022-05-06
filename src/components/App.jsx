import React, { Component } from 'react';
import Container from './Container';
import { nanoid } from 'nanoid';
import Contact from './Contact';
import ContactList from './ContactList';
import SearchForm from './SearchForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number, contacts } = this.state;
    const nanoID = nanoid(5);
    const eventNameValue = event.target[0].value;
    const filterName = contacts.find(e => e.name === eventNameValue);

    filterName
      ? alert(`${eventNameValue} is already in Contacts`)
      : this.setState(prevState => ({
          contacts: [
            { id: nanoID, name: name, number: number },
            ...prevState.contacts,
          ],
        }));
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
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
    const visibleEl = this.getVisibleEl();

    return (
      <div>
        <Container>
          <Contact
            onChangename={this.handleChange}
            onChangePhone={this.handleChange}
            nameValue={this.state.name}
            phoneValue={this.state.number}
            onSubmit={this.handleSubmit}
            id={this.state.contacts.id}
          />
          <SearchForm onChange={this.changeFilter} />
          <ContactList contactArrey={visibleEl} onDeleteEl={this.deleteEl} />
        </Container>
      </div>
    );
  }
}
export default App;

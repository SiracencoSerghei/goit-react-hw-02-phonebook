
import {React,  Component } from "react";
import { nanoid } from "nanoid";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      name: '',
      number: '',
    };
    this.nameInputId = nanoid();
    this.numberInputId = nanoid();
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeName = event => {
    const { name, value } = event.currentTarget;
    console.log(this.state);
    this.setState(
      // не работает для чекбоксов
      { [name]: value }
    );
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state);

  }

  render() {
    return (
      <div>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101'
          }}
        >
          <form onSubmit={this.onSubmit}>
            <label htmlFor={this.nameInputId} >
              Name:
              <input
                type="text"
                name="name"
                id={this.nameInputId}
                value={this.state.name}
                onChange={this.onChangeName}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label htmlFor={this.numberInputId}>
              <input 
               type="tel"
               name="number"
               id={this.numberInputId}
                value={this.state.number}
                onChange={this.onChangeName}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
               required
               />
            </label>

            <button type="submit" value="submit" >Submit</button>
          </form>
        </div>
        <div>
          <h2>Contacts</h2>
          <ul>
            <li>{this.state.name}: {this.state.number}</li>
          </ul>
        </div>
      </div>
    );
  }


};
import React from 'react';
import uuid from 'uuid/v4';
import Note from '../note-create-form/note-create-form';
// import './dashboard.scss';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
      error: null,
    };
  }

  handleAddNote = (note) => {
    if (note.title === '') {
      return this.setState({ error: true });
    }

    note.createdOn = new Date();
    note._id = uuid();
    return this.setState((previousState) => {
      return {
        notes: [...previousState.expenses, note],
        error: null,
      };
    });
  }

  handleNotes = () => {
    return (
      <ul className = "container">
        {
          this.state.notes.map((expense) => {
            return (
              <li key={expense._id}>
              {expense.title} : ${expense.price}
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <section className="dashboard">
        <Note handleAddNote={ this.handleAddNote } />
        { 
          this.state.error && <h2 className="error">You must enter a title.</h2>
        }
        { this.handleNotes() }
      </section>
    );
  }
}

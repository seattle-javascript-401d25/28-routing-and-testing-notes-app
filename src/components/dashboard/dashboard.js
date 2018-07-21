import React from 'react';
import uuid from 'uuid/v4';
import ExpenseForm from '../expense-form/expense-form';
import './dashboard.scss';

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
        notes: [...previousState.notes, note],
        error: null,
      };
    });
  }

 
  handleNotesList = () => {
    return (
      <ul>
        {
          this.state.notes.map((note) => {
            return (
              <li key={note._id}>
                {note.title} : ${expense.price}
              </li>
              <button className="note-remove" onClick =
            );
          })
        }
      </ul>
    );
  }

  removeNote(note) {
    this.setState({
      notes: this.notes.filter(())
    })
  }

  render() {
    return (
      <section className="dashboard">
        <ExpenseForm handleAddNote={this.handleAddNote} />
        {
          this.state.error && <h2 className="error">You must enter a title.</h2>
        }
        {this.handleNotesList()}
        
      </section>
    );
  }
}
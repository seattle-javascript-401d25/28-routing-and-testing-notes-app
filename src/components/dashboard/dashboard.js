import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from '../note-form/note-form';
import './dashboard.scss';
import NoteItem from '../note-item/note-item';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
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

  handleRemoveNote = (noteToRemove) => {
    this.setState((previousState) => {
      return {
        notes: previousState.notes.filter(note => note._id !== noteToRemove._id),
      };
    });
  }

  handleUpdateNote = (noteToUpdate) => {
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.map(note => (note._id === noteToUpdate._id ? noteToUpdate : note)),
      };
    });
  }

  handleNotes = () => {
    return (
      <ul className = "note-list">
        {
          this.state.notes.map((note) => {
            return (
              <li key={note._id}>
                <NoteItem
                  note={note}
                  handleRemoveNote={this.handleRemoveNote}
                  />
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
        <NoteForm handleAddNote = { this.handleAddNote } />
        { 
          this.state.error && <h2 className="error">You must enter a title to the note.</h2>
        }
        { this.handleNotes() }
      </section>
    );
  }
}

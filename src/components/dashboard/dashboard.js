import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from '../note-create-form/note-create-form';
import { renderIf } from '../../lib/utils';
import './dashboard.scss';

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

  handleAllNotes = () => {
    return this.state.notes;
  }

  handleNoteList = () => {
    return (
      <ul>
        {
          this.state.notes.map((note) => {
            return (
              <li key={note._id}>
              {note.title} : ${note.body}
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
        <NoteForm handleComplete={ this.handleAddNote } />
        {
          renderIf(this.state.error, <h2 className="error">You gotta name ur note bruh</h2>)
        }
        { this.handleNoteList() }
        <p>Here there be notes: { this.handleNoteList() }</p>
      </section>
    );
  }
}

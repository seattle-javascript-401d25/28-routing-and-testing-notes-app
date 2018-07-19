import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import uuid from 'uuid/v4';

import NoteList from '../note-list/note-list';
import NoteEdit from '../note-edit/note-edit';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allNotes: [{ // mock data for one note
        _id: 'THIS-WOULD-BE-UUID',
        editing: false,
        completed: false,
        content: 'This is the content of this note!',
        title: 'The Note Title',
        createdOn: new Date(),
      },
      { // mock data for one note
        _id: 'THIS-WOULD-BE-UUID2',
        editing: false,
        completed: false,
        content: 'This is the content of another!',
        title: 'The Other Note Title',
        createdOn: new Date(),
      }],
      error: false,
      edit: false,
      create: false,
    };
  }

  addNote = (note) => {
    console.log('aaaa addNote', note);
    this.setState({ create: false, edit: false });
    if (note.title === '') {
      return this.setState({ error: true });
    }

    note.createdOn = new Date();
    note._id = uuid();
    return this.setState((previousState) => {
      return {
        allNotes: [...previousState.allNotes, note],
        error: false,
      };
    });
  }

  handleCreateNewNote = () => {
    console.log('hhhhh handleCreateNewNote');
    return this.setState({ create: true, edit: false });
  }

  render() {
    console.log('!!! dashboard, allNotes', this.state.allNotes);
    return (
      <div className="dashboard">
        <div>
          <button onClick={this.handleCreateNewNote}>Create a New Note</button>
        </div>
        <div>
          {this.state.create
            ? <NoteEdit note={{}} addNote={this.addNote} />
            : <NoteList notes={this.state.allNotes} />
          }
        </div>
      </div>
    );
  }
}

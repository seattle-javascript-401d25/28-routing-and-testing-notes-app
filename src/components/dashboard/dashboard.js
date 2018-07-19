import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import uuid from 'uuid/v4';

import NoteList from '../note-list/note-list';
import NoteEdit from '../note-edit/note-edit';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allNotes: localStorage.allNotes ? JSON.parse(localStorage.allNotes) : [],
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
    note.editing = false;
    const allNotes = [note].concat(this.state.allNotes);
    localStorage.setItem('allNotes', JSON.stringify(allNotes));
    return this.setState({ allNotes });
    // return this.setState((previousState) => {
    //   return {
    //     allNotes: [...previousState.allNotes, note],
    //     error: false,
    //   };
    // });
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
            ? <NoteEdit mode="create" addNote={this.addNote} />
            : <NoteList notes={this.state.allNotes} />
          }
        </div>
      </div>
    );
  }
}

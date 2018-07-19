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
      action: null,
    };
  }

  addNote = (note) => {
    console.log('aaaa addNote', note);
    this.setState({ action: null });
    if (note.title === '') {
      return this.setState({ error: true });
    }

    note.createdOn = new Date();
    note._id = uuid();
    note.editing = false;
    const allNotes = [note].concat(this.state.allNotes);
    localStorage.setItem('allNotes', JSON.stringify(allNotes));
    return this.setState({ allNotes });
  }

  handleCreateNewNote = () => {
    console.log('hhhhh handleCreateNewNote');
    return this.setState({ action: 'create' });
  }

  handleEditNote = () => {
    console.log('hhhhh handleEditNote');
    return this.setState({ action: 'edit' });
  }

  handleDeleteNote = (id) => {
    console.log('hhhhhh handleDeleteNote');
    this.setState({ action: 'delete' });
    const allNotes = this.state.allNotes.filter((note) => {
      return note._id !== id;
    });
    localStorage.setItem('allNotes', JSON.stringify(allNotes));
    return this.setState({ allNotes, action: null });
  }

  render() {
    console.log('!!! dashboard, allNotes', this.state.allNotes);
    return (
      <div className="dashboard">
        <div>
          <button onClick={this.handleCreateNewNote}>Create a New Note</button>
        </div>
        <div>
          {this.state.action === 'create'
            ? <NoteEdit mode="create" addNote={this.addNote} delNote={this.handleDeleteNote}/>
            : <NoteList addNote={this.addNote} delNote={this.handleDeleteNote} notes={this.state.allNotes} />
          }
        </div>
      </div>
    );
  }
}

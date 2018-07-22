import React from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

import NoteList from '../note-list/note-list';
import NoteEdit from '../note-edit/note-edit';
import './dashboard.scss';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allNotes: localStorage.allNotes ? JSON.parse(localStorage.allNotes) : [],
      note: {},
      error: false,
      action: props.action || null,
    };
  }

  addNote = (note) => {
    console.log('aaaa addNote', note);
    if (note.cancelled) {
      return this.setState({ action: null, cancelled: false });
    }
    if (note.title === '') {
      return this.setState({ error: true, action: null });
    }
    this.setState({ error: false });
    let { allNotes } = this.state;
    console.log('aaaa allNotes at the top of addNote', allNotes);
    if (note.editing) {
      allNotes = this.state.allNotes.filter(n => n._id !== note._id);
      console.log('aaaa editing: addNote allNotes post filter', allNotes);
    } else {
      note.createdOn = new Date();
      console.log('aaaaa creating: ADDING UUID to note!');
      note._id = uuid();
    }
    note.editing = false;
    console.log('aaaaa note', note);
    console.log('aaaa allNotes', allNotes);
    allNotes = allNotes.length ? [note].concat(allNotes) : [note];
    console.log('aaaa addNote post concat', allNotes);
    localStorage.setItem('allNotes', JSON.stringify(allNotes));
    return this.setState({ allNotes, action: null });
  }

  handleCreateNewNote = () => {
    console.log('hhhhh handleCreateNewNote');
    return this.setState({ action: 'create' });
  }

  handleEditNote = (id) => {
    console.log('hhhhh handleEditNote', id);
    const note = this.state.allNotes.filter(n => n._id === id)[0];
    return this.setState({ note, action: 'edit' });
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
    console.log('!!! dashboard action', this.state.action);
    console.log('!!! dashboard, allNotes', this.state.allNotes);
    return (
      <div className="note-grid">
        {console.log('!!! dashboard this.state.action', this.state.action)}
          {this.state.action !== null
            ? <NoteEdit mode={this.state.action} addNote={this.addNote} note={this.state.note}/>
            : <NoteList addNote={this.addNote} delNote={this.handleDeleteNote} editNote={this.handleEditNote} notes={this.state.allNotes} /> 
          }
      </div>
    );
  }
}

Dashboard.propTypes = {
  action: PropTypes.string,
};

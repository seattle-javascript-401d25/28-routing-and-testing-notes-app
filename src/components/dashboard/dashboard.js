import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NoteList from '../note-list/note-list';

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
    };
  }

  render() {
    console.log('!!! dashboard, allNotes', this.state.allNotes);
    return (
      <div className="dashboard">
        <div>
          <Link to="/dashboard/create">Create A New Note</Link>
        </div>
        <NoteList notes={this.state.allNotes} />
      </div>
    );
  }
}

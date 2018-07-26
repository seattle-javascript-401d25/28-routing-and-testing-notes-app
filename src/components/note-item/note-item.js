import React from 'react';
import PropTypes from 'prop-types'; /*eslint-disable-line*/
import './note-item.scss';

export default class NoteItem extends React.Component {
  render() {
    const { note, handleRemoveNote } = this.props; 
    console.log(note);
    /*eslint-disable-line*/
    return (
      <div className="note-item-container">
      <strong className="note-title">{note.title}</strong>
      <p className="note-description">{note.description}</p>
      <button
          className="delete-button"
          onClick = {() => handleRemoveNote(note)}>
          Delete
      </button>
      </div>
    );
  }
}

NoteItem.propTypes = {
  handleRemoveNote: PropTypes.func,
  note: PropTypes.object,
};

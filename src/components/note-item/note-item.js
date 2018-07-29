import React from 'react';
import PropTypes from 'prop-types'; /*eslint-disable-line*/
import Modal from '../modal/modal';
import NoteForm from '../note-form/note-form';

import './note-item.scss';

export default class NoteItem extends React.Component {
  render() {
    const { note, handleRemoveNote, handleUpdateNote } = this.props; /*eslint-disable-line*/
    const showModal = () => handleUpdateNote({ ...note, editing: true });
    const hideModal = () => handleUpdateNote({ ...note, editing: false });
    const updateAndClose = (updatedNote) => {
      return handleUpdateNote({ ...updatedNote, editing: false });
    };
    return (
      <div className="note-item" data-cy="note-item" onClick={showModal}>
      <strong className="note-title">{note.title}</strong>
      <p className="note-description">{note.description}</p>
      <button
          className="delete-button"
          onClick = {() => handleRemoveNote(note)} 
          data-cy="note-item-delete">
          Delete
      </button>
        <Modal 
          show={note.editing}
          handleClose={hideModal}
        >
          <h3>Editing {note.title}</h3>
          <NoteForm 
            handleComplete={updateAndClose}
            note={note}
          />
        </Modal>
      </div>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import NoteForm from '../note-create-form/note-create-form';

export default class NoteInstance extends React.Component {
  render() {
    const { note, handleRemoveNote, handleUpdateNote } = this.props;
    const showModal = () => handleUpdateNote({ ...note, editing: true });
    const hideModal = () => handleUpdateNote({ ...note, editing: false });
    const updateAndClose = (updatedNote) => {
      return handleUpdateNote({ ...updatedNote, editing: false });
    };
    return (
      <div className="note-item" data-cy="note-item">
      <strong>{note.title}</strong> : {note.body}
      <button
        onClick={() => handleRemoveNote(note) } data-cy="note-item-btn">
      Delete
      </button>
      <button
        onClick={showModal}
        data-cy="note-item-btn">
        Update
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

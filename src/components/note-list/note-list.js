import React from 'react';
import NoteItem from '../note-item/note-item';

export default function NoteList(props) {
  console.log('...NoteList props.notes', props.notes);
  return (
    props.notes.map((note) => {
      return (
        <div className="note-list" key={note._id}>
          <NoteItem note={note} />
        </div>
      );
    })
  );
}

import React from 'react';
import PropTypes from 'prop-types';

export default class NoteEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.mode !== 'create' ? props.note.content : '',
      title: props.mode !== 'create' ? props.note.title : '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log('ne hc name', name, value);
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('!!!! sending addNote', this.state);
    this.props.addNote(this.state);
  }

  render() {
    // console.log('!!!! NoteEdit, props.note', this.props.note);
    return (
      <div className="note-edit">
        {this.props.mode === 'edit' ? <h2>Note Editor</h2> : <h2>Create a Note</h2>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          <textarea name="content" value={this.state.content} onChange={this.handleChange} />
          <button type="submit">Save</button> 
        </form>
      </div>
    );
  }
}

NoteEdit.propTypes = {
  note: PropTypes.object,
  addNote: PropTypes.func,
  mode: PropTypes.string,
};

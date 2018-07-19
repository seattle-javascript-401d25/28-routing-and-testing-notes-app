import React from 'react';
import PropTypes from 'prop-types';

export default class NoteEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.note,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log('ne hc name', name, value);
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNote(this.state.note);
  }

  render() {
    console.log('!!!! NoteEdit, props.note', this.props.note);
    return (
      <div className="note-edit">
        {this.note ? <h2>Note Editor</h2> : <h2>Create a Note</h2>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" onChange={this.handleChange} value={this.props.note.title ? this.props.note.title : this.state.note.title} />
          {/* <textarea name="content" value={this.state.content} onChange={this.handleChange} /> */}
          <button type="submit">Save</button> 
        </form>
      </div>
    );
  }
}

NoteEdit.propTypes = {
  note: PropTypes.object,
  addNote: PropTypes.func,
};

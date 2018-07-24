import React from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  title: '',
  body: 'body',
};

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.note ? props.note : defaultState;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleComplete(this.state);
    this.setState(defaultState);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const buttonText = this.props.note ? 'Update Note' : 'Create Note';
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={ this.state.title }
          onChange={ this.handleChange }
        />Note
        <input
          type="string"
          name="body"
          placeholder="body"
          value={ this.state.body }
          onChange={ this.handleChange }
        />
        <button type="submit">Create Note</button>
      </form>
    );
  }
}

NoteForm.propTypes = {
  handleComplete: PropTypes.func,
};

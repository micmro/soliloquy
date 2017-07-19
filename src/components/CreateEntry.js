import React, { Component } from 'react';
import CreateEntryMutation from '../mutations/CreateEntryMutation';
import './CreateEntry.css';


class CreateEntry extends Component {
  state = {value: ''};

  constructor(props) {
    super(props);

    this.submitEntry = this.submitEntry.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitEntry(event) {
    event.preventDefault();
    CreateEntryMutation(
      this.state.value,
      () => this.setState({value: ''})
    );
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form className="CreateEntry" onSubmit={this.submitEntry}>
        <input value={this.state.value} onChange={this.handleChange} placeholder={this.props.placeholder} />
      </form>
    );
  }
}

CreateEntry.defaultProps = {
  placeholder: 'Enter your message …'
};

export default CreateEntry
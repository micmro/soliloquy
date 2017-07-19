import React, { Component } from 'react';
import './CreateEntry.css';
import CreateEntryMutation from '../mutations/CreateEntryMutation'


class CreateEntry extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.submitEntry = this.submitEntry.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitEntry(event) {
    event.preventDefault();
    CreateEntryMutation(this.state.value, (response) => {
      console.log('Success!', response)
      this.setState({value: ''})
    })
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